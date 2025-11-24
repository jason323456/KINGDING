"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function KuaiBianPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black z-0"></div>

                {/* Animated Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px] animate-pulse"></div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">快變・澈</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-red-500 font-bold tracking-[0.5em] mb-8">
                        SPIN COATING
                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        採用先進 <span className="text-white font-bold">旋塗膜層變色技術</span>，
                        <br />
                        突破傳統限制，變色更均勻、褪色更迅速。
                    </p>
                </div>
            </section>

            {/* Technology Section */}
            <section className="py-24 px-4 bg-zinc-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8 border-l-4 border-red-600 pl-6">
                            膜變工藝 <br />
                            <span className="text-2xl text-gray-500 font-normal">Spin Coating Technology</span>
                        </h2>
                        <div className="space-y-6 text-gray-300 text-lg">
                            <p>
                                「快變」系列採用最新的旋塗技術，將變色因子均勻地旋塗於鏡片表面，形成一層高活性的變色層。
                            </p>
                            <p>
                                不同於傳統的基材變色（將變色因子混合在鏡片材料中），膜層變色能確保：
                            </p>
                            <ul className="space-y-4 mt-4">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-3 text-xl">✓</span>
                                    <span>**極速反應**：變色因子直接接觸光線，反應速度提升 30%。</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-3 text-xl">✓</span>
                                    <span>**色澤均勻**：不受度數厚薄影響，高度數鏡片邊緣與中心顏色一致。</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-3 text-xl">✓</span>
                                    <span>**清澈底色**：室內回色後，鏡片如水晶般清澈透明，無殘留底色。</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Visual Diagram (CSS Representation) */}
                    <div className="relative h-96 bg-black rounded-2xl border border-zinc-800 p-8 flex items-center justify-center group overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(220,38,38,0.1),transparent_70%)]"></div>

                        {/* Lens Cross Section */}
                        <div className="relative w-64 h-32 bg-gray-800/50 rounded-b-full border-t border-gray-700 backdrop-blur-sm flex items-start justify-center overflow-hidden">
                            <span className="mt-8 text-gray-600 text-sm">一般鏡片基材</span>

                            {/* Coating Layer */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse"></div>
                        </div>

                        <div className="absolute bottom-8 text-center">
                            <p className="text-red-500 text-sm font-bold tracking-widest">SPIN COATING LAYER</p>
                            <p className="text-gray-500 text-xs mt-1">變色層位於表面，反應無阻礙</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 px-4 bg-black">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">技術對決：膜變 vs 基變</h2>
                    <div className="grid grid-cols-4 gap-1 text-center bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden">
                        {/* Header */}
                        <div className="p-6 bg-zinc-900 text-gray-400 font-bold">比較項目</div>
                        <div className="p-6 bg-red-900/20 text-red-500 font-bold text-xl border-b-4 border-red-600">快變 (膜層)</div>
                        <div className="p-6 bg-zinc-900 text-blue-400 font-bold text-lg">快閃 (基材)</div>
                        <div className="p-6 bg-zinc-900 text-gray-600 font-bold">一般 (傳統)</div>

                        {/* Row 1 */}
                        <div className="p-6 bg-zinc-900 text-gray-300">變色速度</div>
                        <div className="p-6 bg-black text-white">★★★★★ (極快)</div>
                        <div className="p-6 bg-zinc-900 text-gray-400">★★★★ (快)</div>
                        <div className="p-6 bg-zinc-900 text-gray-600">★★★ (普通)</div>

                        {/* Row 2 */}
                        <div className="p-6 bg-zinc-900 text-gray-300">褪色速度</div>
                        <div className="p-6 bg-black text-white">★★★★★ (秒回)</div>
                        <div className="p-6 bg-zinc-900 text-gray-400">★★★★ (快)</div>
                        <div className="p-6 bg-zinc-900 text-gray-600">★★ (慢)</div>

                        {/* Row 3 */}
                        <div className="p-6 bg-zinc-900 text-gray-300">顏色均勻度</div>
                        <div className="p-6 bg-black text-white">完美均勻</div>
                        <div className="p-6 bg-zinc-900 text-gray-400">良好</div>
                        <div className="p-6 bg-zinc-900 text-gray-600">受厚度影響</div>

                        {/* Row 4 */}
                        <div className="p-6 bg-zinc-900 text-gray-300">底色透明度</div>
                        <div className="p-6 bg-black text-white">極致清澈</div>
                        <div className="p-6 bg-zinc-900 text-gray-400">清透</div>
                        <div className="p-6 bg-zinc-900 text-gray-600">微黃/微灰</div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
