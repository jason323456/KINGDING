import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-blue-900 text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              專業鏡片供應的最佳夥伴
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl">
              提供全方位光學鏡片解決方案，現貨充足、品質穩定。
              <br />
              致力於成為眼鏡店與中盤商最強大的後盾。
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                href="/products"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
              >
                瀏覽產品
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                聯絡我們
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
                為什麼選擇我們
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                三大核心優勢
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="bg-white overflow-hidden shadow rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto mb-4">
                    📦
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">現貨充足</h3>
                  <p className="mt-2 text-base text-gray-500">
                    擁有大型倉儲空間，熱門度數隨時有貨，大幅縮短您的等待時間。
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white overflow-hidden shadow rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto mb-4">
                    ⚡
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">快速發貨</h3>
                  <p className="mt-2 text-base text-gray-500">
                    優化的物流流程，確保今日下單、盡速出貨，讓您的生意不中斷。
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white overflow-hidden shadow rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto mb-4">
                    🛡️
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">品質認證</h3>
                  <p className="mt-2 text-base text-gray-500">
                    嚴選中國優質工廠，產品符合國際光學標準，品質穩定有保障。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
