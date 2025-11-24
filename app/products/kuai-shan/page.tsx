"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function KuaiShanPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-200 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
                {/* Abstract Nature Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-50/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>

                <div className="relative z-10 text-center px-4 flex flex-col items-center">
                    <h1 className="text-8xl md:text-9xl font-light tracking-tight mb-4 text-black" style={{ fontFamily: 'var(--font-chen)' }}>
                        快閃
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-blue-600 font-bold tracking-[0.2em] mb-6">
                        基材雙面變色技術
                    </h2>

                    <div className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light space-y-2">
                        <p>回歸純粹，擁抱自然</p>
                        <p>為戶外生活提供最實惠的防護。</p>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Visual Diagram (CSS Representation) */}
                    <div className="order-2 md:order-1 relative h-96 bg-blue-50 rounded-2xl border border-blue-100 p-8 flex items-center justify-center overflow-hidden">
                        {/* Lens Cross Section */}
                        <div className="relative w-64 h-32 bg-gray-200/80 rounded-b-full border-t border-gray-300 flex items-center justify-center overflow-hidden shadow-lg">
                            {/* Particles inside the material */}
                            <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-2 p-4 opacity-50">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i} className="w-2 h-2 bg-gray-800 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                ))}
                            </div>
                            <span className="relative z-10 text-gray-800 font-bold text-sm bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">變色因子融合於基材</span>
                        </div>

                        <div className="absolute bottom-8 text-center">
                            <p className="text-blue-600 text-sm font-bold tracking-widest">SUBSTRATE TECHNOLOGY</p>
                            <p className="text-gray-500 text-xs mt-1">材料本身即具備變色能力</p>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl font-light text-gray-800 mb-8 border-l-4 border-blue-400 pl-6">
                            基材變色 <br />
                            <span className="text-2xl text-gray-400 font-normal">Substrate Technology</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg">
                            <p>
                                「快閃」系列採用成熟的基材變色技術，在鏡片原料聚合過程中，直接加入光致變色因子。
                                讓您在室內外活動時無需頻繁更換眼鏡，實現一副眼鏡滿足多種場景的需求。
                            </p>
                            <p>
                                這種技術讓整片鏡片都具備感光能力，具有以下特點：
                            </p>
                            <ul className="space-y-4 mt-4">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-3 text-xl">●</span>
                                    <span>**雙面變色**：鏡片正反兩面皆能感光，提供全方位的紫外線防護 (UV400)。</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-3 text-xl">●</span>
                                    <span>**快速響應**：相較於傳統變色鏡片，變色速度提升 18.5%，褪色速度提升 26%。</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-3 text-xl">●</span>
                                    <span>**經濟實惠**：製程成熟穩定，是高 CP 值的變色鏡片入門首選。</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-3 text-xl">●</span>
                                    <span>**耐用持久**：變色因子與鏡片材質合而為一，變色性能穩定持久。</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Cards */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-light text-center mb-16 text-gray-800">適合這樣的你</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-6">🏃</div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">戶外運動愛好者</h3>
                            <p className="text-gray-500">長時間暴露在陽光下，需要全方位的紫外線防護。</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-6">💰</div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">精打細算族</h3>
                            <p className="text-gray-500">尋找價格親民、品質穩定的變色鏡片入門款。</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl mb-6">🛡️</div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">耐用導向</h3>
                            <p className="text-gray-500">希望鏡片耐磨、變色功能壽命長，不需頻繁更換。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 px-4 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-light text-center mb-16 text-gray-800">為什麼選擇快閃？</h2>
                    <div className="grid grid-cols-4 gap-1 text-center bg-gray-100 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                        {/* Header */}
                        <div className="p-6 bg-gray-50 text-gray-500 font-bold">比較項目</div>
                        <div className="p-6 bg-gray-50 text-gray-400 font-bold">快變 (膜層)</div>
                        <div className="p-6 bg-blue-50 text-blue-600 font-bold text-lg border-b-4 border-blue-400">快閃 (基材)</div>
                        <div className="p-6 bg-gray-50 text-gray-400 font-bold">一般 (傳統)</div>

                        {/* Row 1 */}
                        <div className="p-6 bg-white text-gray-600">價格</div>
                        <div className="p-6 bg-white text-gray-400">$$$ (高)</div>
                        <div className="p-6 bg-blue-50/30 text-blue-800 font-bold">$$ (超值)</div>
                        <div className="p-6 bg-white text-gray-400">$ (低)</div>

                        {/* Row 2 */}
                        <div className="p-6 bg-white text-gray-600">變色速度</div>
                        <div className="p-6 bg-white text-gray-400">★★★★★</div>
                        <div className="p-6 bg-blue-50/30 text-blue-800 font-bold">★★★★</div>
                        <div className="p-6 bg-white text-gray-400">★★★</div>

                        {/* Row 3 */}
                        <div className="p-6 bg-white text-gray-600">耐用度</div>
                        <div className="p-6 bg-white text-gray-400">★★★★</div>
                        <div className="p-6 bg-blue-50/30 text-blue-800 font-bold">★★★★★</div>
                        <div className="p-6 bg-white text-gray-400">★★★</div>

                        {/* Row 4 */}
                        <div className="p-6 bg-white text-gray-600">底色</div>
                        <div className="p-6 bg-white text-gray-400">極致清澈</div>
                        <div className="p-6 bg-blue-50/30 text-blue-800 font-bold">清透</div>
                        <div className="p-6 bg-white text-gray-400">微黃</div>
                    </div>
                </div>
            </section>

            {/* Product Family Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900" style={{ fontFamily: 'var(--font-chen)' }}>快閃全系列產品</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Pro */}
                        <Link href="/products" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 group block">
                            <div className="h-2 w-12 bg-blue-500 mb-4 rounded-full"></div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">快閃 Pro</h3>
                            <p className="text-xs font-bold text-blue-500 mb-3">綠膜 | 1.56 非球面</p>
                            <p className="text-sm text-gray-500 mb-4 leading-relaxed">入門高CP升級款；快變快退、底色清晰，低~中度數戶外/日常首選。</p>
                            <span className="text-xs font-bold text-gray-300 border border-gray-200 px-2 py-1 rounded">NEW</span>
                        </Link>

                        {/* Che */}
                        <div className="bg-white rounded-xl p-6 shadow-md ring-2 ring-blue-100 transform -translate-y-2 border border-blue-200 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">CURRENT</div>
                            <div className="h-2 w-12 bg-blue-600 mb-4 rounded-full"></div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">快閃・澈</h3>
                            <p className="text-xs font-bold text-blue-500 mb-3">淨藍膜 (低反) | 1.56 非球面</p>
                            <p className="text-sm text-gray-500 mb-4 leading-relaxed">低反射更清亮、畫面乾淨，通勤/長時使用、對反光敏感者推薦。</p>
                        </div>

                        {/* Glare Shield */}
                        <Link href="/products" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 group block">
                            <div className="h-2 w-12 bg-purple-500 mb-4 rounded-full"></div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">快閃・眩盾</h3>
                            <p className="text-xs font-bold text-purple-500 mb-3">AG 紫膜 (防眩) | 1.56 非球面</p>
                            <p className="text-sm text-gray-500 mb-4 leading-relaxed">強光/夜間燈源環境舒適，駕車/戶外活動專用。</p>
                            <span className="text-xs font-bold text-gray-300 border border-gray-200 px-2 py-1 rounded">NEW</span>
                        </Link>

                        {/* Classic */}
                        <Link href="/products" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 group block opacity-75 hover:opacity-100">
                            <div className="h-2 w-12 bg-gray-400 mb-4 rounded-full"></div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gray-600 transition-colors">快閃 Classic</h3>
                            <p className="text-xs font-bold text-gray-500 mb-3">綠膜 | 球面</p>
                            <p className="text-sm text-gray-500 mb-4 leading-relaxed">舊款/清庫存；價目表標示「Classic (380)」避免混淆。</p>
                            <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">CLEARANCE</span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
