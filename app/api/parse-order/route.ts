import { NextRequest, NextResponse } from "next/server";
import { parseOrderImage } from "@/lib/gemini";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const result = await parseOrderImage(buffer, file.type);

        return NextResponse.json(result);
    } catch (error: any) {
        console.error("API Error Details:", JSON.stringify(error, null, 2));

        // Extract more specific error info if available
        const status = error.status || 500;
        const message = error.message || "Unknown error";
        const details = error.details || JSON.stringify(error);

        return NextResponse.json(
            {
                error: "Failed to process image",
                message: message,
                details: details,
                status: status
            },
            { status: 500 } // Keep HTTP 500 but send details in body
        );
    }
}
