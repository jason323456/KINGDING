import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative bg-gray-900 text-white py-32 overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-black"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            專注光學・深耕十五載
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto">
                            嚴選優質鏡片，為您的視界帶來最純粹的清晰。
                        </p>
                    </div>
                </div>

                {/* Company Overview */}
                <div className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center mb-16">
                            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">關於康鼎</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                康鼎光學眼鏡有限公司
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                KANG DING OPTICAL
                            </p>
                        </div>

                        <div className="prose prose-lg text-gray-500 mx-auto text-justify">
                            <p>
                                康鼎光學成立至今已逾十五年，始終秉持著「嚴選優質鏡片」的初衷，致力於為台灣市場引進高品質、高性價比的光學產品。作為專業的鏡片代理經銷商，我們深知一副好的眼鏡對於配戴者的重要性，因此我們不只銷售產品，更是在傳遞一份對視覺品質的堅持。
                            </p>
                            <p>
                                多年來，我們與無數眼鏡店家建立了深厚的合作夥伴關係，透過穩定的供貨體系與專業的服務，共同守護消費者的視力健康。我們旗下的 <strong>NEON OPTICAL</strong> 品牌，正是我們對市場需求的精準回應——從日常配戴的舒適標準，到針對數位時代的濾藍光防護，以及戶外活動專用的變色科技，我們不斷推陳出新，只為滿足您對清晰視界的渴望。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900">品牌理念</h2>
                            <p className="mt-4 text-xl text-gray-500">
                                三大核心價值，是我們對客戶不變的承諾
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 text-2xl">
                                    🛡️
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">嚴選品質</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    堅持誠信經營，每一片鏡片都經過嚴格篩選與品質控管。我們相信，唯有真實的優良品質，才能經得起時間的考驗，贏得客戶長久的信賴。
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600 text-2xl">
                                    💡
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">創新價值</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    持續引進最新的鍍膜技術與鏡片設計（如 SHMC 超防水、AG 防眩光、藍鑽膜等），致力於以合理的價格，讓消費者享受到頂級的視覺體驗。
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600 text-2xl">
                                    🤝
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">共同成長</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    我們視每一位經銷夥伴為家人，提供即時的業務支援與完善的售後服務。在光學領域深耕十五年，您的成功與滿意，就是康鼎光學最大的成就。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-blue-600">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            <span className="block">尋找值得信賴的合作夥伴？</span>
                            <span className="block text-blue-200">歡迎加入康鼎光學的經銷行列。</span>
                        </h2>
                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                            <div className="inline-flex rounded-md shadow">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                                >
                                    聯絡我們
                                </a>
                            </div>
                            <div className="ml-3 inline-flex rounded-md shadow">
                                <a
                                    href="/products"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
                                >
                                    瀏覽產品
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
