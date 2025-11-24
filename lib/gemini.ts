import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not defined");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  generationConfig: {
    responseMimeType: "application/json",
  },
});

export async function parseOrderImage(imageBuffer: Buffer, mimeType: string = "image/jpeg") {
  const prompt = `
    You are an expert optical assistant. Your job is to extract lens order details from the image.
    
    Please extract the following information and output it in JSON format:
    - **order_items**: An array of lens items.
      - **lens_type**:
        - index: (number) Common indices are **1.56, 1.60, 1.67, 1.74**. If you see "1.86", it is likely "1.56" written poorly. Only output 1.56, 1.60, 1.67, or 1.74 unless clearly specified otherwise.
        - design: (string) "AS" (Aspheric), "S" (Spherical), "PROG" (Progressive).
        - feature: (string) "BLUE_CUT", "PHOTO", "CLEAR".
      - **rx**:
        - side: "R" or "L".
        - sph: (number) Sphere power.
        - cyl: (number) Cylinder power. **CRITICAL: Astigmatism (Cyl) is almost always Negative (-).** If you see a positive sign or no sign, check if it can be interpreted as negative. If the user writes "+", convert it to "-" and adjust Sphere if necessary (Transposition), OR just report what is written but prefer Negative if ambiguous.
        - axis: (number) Axis (0-180).
        - add: (number) Addition power for progressive lenses.
      - **quantity**: (number)
    - **customer_id**: (string) Any customer name or ID found.
    - **notes**: (string) Any special instructions (e.g., "Urgent", "Tint").

    **Rules:**
    1. **Scan the ENTIRE image**: Data is often written in **multiple columns** (e.g., a list on the left, a list on the right). Do not stop after the first column.
    2. **Extract ALL items**: Look for every line that contains power and quantity (e.g., "+300-150 x 2").
    3. **Plano / Zero Handling**: 
       - "PL", "Plano", "-000", "+000", "000", "0" all mean **Sphere 0.00**.
       - If you see "-000-200", it means Sph: 0.00, Cyl: -2.00.
    4. **Handwriting Correction**: 
       - "1.56" often looks like "1.86" or "7.56". Assume 1.56.
       - "1.60" often looks like "1.6".
    5. **Missing Values**: If values are missing (e.g., no cylinder), set them to 0.00.
    6. **Confidence**: If unsure about a specific digit, make your best guess based on standard optical steps (0.25 steps).
  `;

  const imagePart = {
    inlineData: {
      data: imageBuffer.toString("base64"),
      mimeType,
    },
  };

  try {
    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text();
    return JSON.parse(text);
  } catch (error) {
    console.error("Error parsing order:", error);
    throw error;
  }
}
