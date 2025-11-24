"use client";

import { useState, useCallback } from "react";

// Define Types for better type safety
type OrderItem = {
  lens_type: {
    index: number | null;
    design: string | null;
    feature: string;
  };
  rx: {
    side: string;
    sph: number;
    cyl: number;
    axis: number;
    add: number;
  };
  quantity: number;
  notes: string;
};

type OrderResult = {
  order_items: OrderItem[];
  customer_id?: string;
  notes?: string;
  error?: string;
  details?: string;
};

const DEFAULT_ROW: OrderItem = {
  lens_type: { index: 1.56, design: "S", feature: "CLEAR" },
  rx: { side: "R", sph: 0.00, cyl: 0.00, axis: 0, add: 0.00 },
  quantity: 1,
  notes: ""
};

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // Initialize with one empty row so table is always visible
  const [result, setResult] = useState<OrderResult>({ order_items: [{ ...DEFAULT_ROW }] });

  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  // Track modified fields: Set of strings "rowIndex-fieldKey" (e.g., "0-sph")
  const [modifiedFields, setModifiedFields] = useState<Set<string>>(new Set());

  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    // Do NOT reset result here immediately if we want to keep manual entries, 
    // but usually upload implies new analysis. For now, let's keep previous data until analysis starts.
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/parse-order", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.order_items) {
        setResult(data);
        // Reset modified fields on new AI load because these are "fresh" from AI (should be black)
        setModifiedFields(new Set());
      } else if (data.error) {
        // Keep existing table but show error? Or just alert.
        alert(`Error: ${data.error}\n${data.message || ''}`);
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to analyze image");
    } finally {
      setLoading(false);
    }
  };

  // Generic handler for input changes
  const handleInputChange = (rowIndex: number, fieldPath: string, value: any) => {
    setResult((prev) => {
      const newItems = [...prev.order_items];
      const item = { ...newItems[rowIndex] };

      // Update nested fields
      if (fieldPath.includes('.')) {
        const [parent, child] = fieldPath.split('.');
        // @ts-ignore
        item[parent] = { ...item[parent], [child]: value };
      } else {
        // @ts-ignore
        item[fieldPath] = value;
      }

      newItems[rowIndex] = item;
      return { ...prev, order_items: newItems };
    });

    // Mark as modified
    setModifiedFields((prev) => {
      const newSet = new Set(prev);
      newSet.add(`${rowIndex}-${fieldPath}`);
      return newSet;
    });
  };

  const addRow = () => {
    setResult((prev) => ({
      ...prev,
      order_items: [...prev.order_items, { ...DEFAULT_ROW }]
    }));
  };

  const removeRow = (index: number) => {
    setResult((prev) => ({
      ...prev,
      order_items: prev.order_items.filter((_, i) => i !== index)
    }));
  };

  // Helper to determine input class
  const getInputClass = (rowIndex: number, fieldKey: string) => {
    const isModified = modifiedFields.has(`${rowIndex}-${fieldKey}`);
    const baseClass = "block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-1 font-mono transition-colors";
    return isModified ? `${baseClass} text-red-600 font-bold bg-red-50` : `${baseClass} text-gray-900`;
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            👓 智慧鏡片訂單辨識 (AI Lens Order Parser)
          </h1>
          <p className="text-gray-500 mb-8">
            上傳手寫或列印的訂單照片，AI 將自動提取規格。您也可以直接手動輸入。
          </p>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              上傳訂單照片
            </label>

            <div
              className={`relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors
                ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50 hover:bg-gray-100"}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">點擊上傳</span> 或拖曳照片至此
                </p>
                <p className="text-xs text-gray-500">支援 JPG, PNG</p>
              </div>
            </div>

            {file && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleUpload}
                  disabled={loading}
                  className={`px-6 py-2 rounded-full font-bold text-white transition-colors
                    ${loading
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                  {loading ? "AI 分析中..." : "開始 AI 分析"}
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Preview Section (Left Column) */}
            {preview && (
              <div className="lg:col-span-1">
                <div className="border rounded-lg p-2 bg-gray-100 sticky top-8">
                  <h3 className="text-sm font-bold text-gray-500 mb-2">
                    原始圖片
                  </h3>
                  <img
                    src={preview}
                    alt="Order Preview"
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
            )}

            {/* Result Section - Editable Table (Right Column, expands if no preview) */}
            <div className={preview ? "lg:col-span-2" : "lg:col-span-3"}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  📋 訂單確認 (可編輯)
                </h3>
                <div className="flex gap-2">
                  <button onClick={addRow} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-lg font-bold text-sm transition-colors">
                    + 新增一列
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-colors">
                    確認下單
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto border rounded-xl shadow-sm bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">眼別</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20">折射率</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">球鏡</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">散光</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">軸度</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">老花</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">數量</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">備註</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {result.order_items.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-2 py-2">
                          <select
                            value={item.rx.side}
                            onChange={(e) => handleInputChange(index, "rx.side", e.target.value)}
                            className={getInputClass(index, "rx.side")}
                          >
                            <option value="R">R</option>
                            <option value="L">L</option>
                          </select>
                        </td>
                        <td className="px-2 py-2">
                          <input
                            type="number"
                            value={item.lens_type.index || 1.56}
                            step="0.01"
                            onChange={(e) => handleInputChange(index, "lens_type.index", parseFloat(e.target.value))}
                            className={getInputClass(index, "lens_type.index")}
                          />
                        </td>

                        {/* Sphere: Split Sign and Value */}
                        <td className="px-2 py-2">
                          <div className="flex gap-1">
                            <select
                              value={item.rx.sph >= 0 ? "+" : "-"}
                              onChange={(e) => {
                                const newSign = e.target.value === "+" ? 1 : -1;
                                handleInputChange(index, "rx.sph", newSign * Math.abs(item.rx.sph));
                              }}
                              className={`w-12 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-1 font-mono ${item.rx.sph < 0 ? 'text-red-600 font-bold' : ''}`}
                            >
                              <option value="+">+</option>
                              <option value="-">-</option>
                            </select>
                            <input
                              type="number"
                              value={Math.abs(item.rx.sph)}
                              step="0.25"
                              min="0"
                              onChange={(e) => {
                                const val = parseFloat(e.target.value);
                                const sign = item.rx.sph >= 0 ? 1 : -1;
                                handleInputChange(index, "rx.sph", sign * (isNaN(val) ? 0 : val));
                              }}
                              className={getInputClass(index, "rx.sph")}
                            />
                          </div>
                        </td>

                        {/* Cylinder: Split Sign and Value */}
                        <td className="px-2 py-2">
                          <div className="flex gap-1">
                            <select
                              value={item.rx.cyl >= 0 ? "+" : "-"}
                              onChange={(e) => {
                                const newSign = e.target.value === "+" ? 1 : -1;
                                handleInputChange(index, "rx.cyl", newSign * Math.abs(item.rx.cyl));
                              }}
                              className={`w-12 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-1 font-mono ${item.rx.cyl < 0 ? 'text-red-600 font-bold' : ''}`}
                            >
                              <option value="+">+</option>
                              <option value="-">-</option>
                            </select>
                            <input
                              type="number"
                              value={Math.abs(item.rx.cyl)}
                              step="0.25"
                              min="0"
                              onChange={(e) => {
                                const val = parseFloat(e.target.value);
                                const sign = item.rx.cyl >= 0 ? 1 : -1;
                                handleInputChange(index, "rx.cyl", sign * (isNaN(val) ? 0 : val));
                              }}
                              className={getInputClass(index, "rx.cyl")}
                            />
                          </div>
                        </td>

                        <td className="px-2 py-2">
                          <input
                            type="number"
                            value={item.rx.axis}
                            onChange={(e) => handleInputChange(index, "rx.axis", parseFloat(e.target.value))}
                            className={getInputClass(index, "rx.axis")}
                          />
                        </td>

                        {/* Add: Split Sign and Value */}
                        <td className="px-2 py-2">
                          <div className="flex gap-1">
                            <select
                              value={item.rx.add >= 0 ? "+" : "-"}
                              onChange={(e) => {
                                const newSign = e.target.value === "+" ? 1 : -1;
                                handleInputChange(index, "rx.add", newSign * Math.abs(item.rx.add));
                              }}
                              className="w-12 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-1 font-mono"
                            >
                              <option value="+">+</option>
                              <option value="-">-</option>
                            </select>
                            <input
                              type="number"
                              value={Math.abs(item.rx.add)}
                              step="0.25"
                              min="0"
                              onChange={(e) => {
                                const val = parseFloat(e.target.value);
                                const sign = item.rx.add >= 0 ? 1 : -1;
                                handleInputChange(index, "rx.add", sign * (isNaN(val) ? 0 : val));
                              }}
                              className={getInputClass(index, "rx.add")}
                            />
                          </div>
                        </td>

                        <td className="px-2 py-2">
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleInputChange(index, "quantity", parseFloat(e.target.value))}
                            className={getInputClass(index, "quantity")}
                          />
                        </td>
                        <td className="px-2 py-2">
                          <input
                            type="text"
                            value={item.notes || ""}
                            onChange={(e) => handleInputChange(index, "notes", e.target.value)}
                            className={getInputClass(index, "notes")}
                            placeholder="..."
                          />
                        </td>
                        <td className="px-2 py-2 text-center">
                          <button
                            onClick={() => removeRow(index)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
