import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Knowledge() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-blue-900 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-bold mb-4">光學知識小學堂</h1>
                        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                            了解鏡片規格、鍍膜科技與保養知識，為自己選擇最合適的視覺夥伴。
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                    {/* Section 1: Refractive Index */}
                    <section id="refractive-index">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl">📏</span>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">折射率 (Refractive Index)</h2>
                                <p className="text-gray-500">決定鏡片厚薄的關鍵數字</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                折射率越高，鏡片折射光線的能力越強，因此在相同度數下，鏡片可以做得越<strong>薄</strong>、越<strong>輕</strong>。
                                通常度數越深，建議選擇越高的折射率，以獲得美觀與舒適的配戴體驗。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <div className="text-2xl font-bold text-blue-600 mb-2">1.56</div>
                                    <div className="text-sm font-bold text-gray-800 mb-2">標準鏡片</div>
                                    <p className="text-xs text-gray-500">適合：低度數<br />(近視 300 度以內)</p>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                                    <div className="text-2xl font-bold text-blue-700 mb-2">1.60</div>
                                    <div className="text-sm font-bold text-gray-800 mb-2">薄型鏡片</div>
                                    <p className="text-xs text-gray-500">適合：中度數<br />(近視 300-600 度)</p>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                                    <div className="text-2xl font-bold text-blue-800 mb-2">1.67</div>
                                    <div className="text-sm font-bold text-gray-800 mb-2">超薄鏡片</div>
                                    <p className="text-xs text-gray-500">適合：高度數<br />(近視 600-800 度)</p>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                                    <div className="text-2xl font-bold text-blue-900 mb-2">1.74</div>
                                    <div className="text-sm font-bold text-gray-800 mb-2">極薄鏡片</div>
                                    <p className="text-xs text-gray-500">適合：超高度數<br />(近視 800 度以上)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Lens Design (Spherical / Aspherical / Double Aspherical) */}
                    <section id="design">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl">👁️</span>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">鏡片設計 (Lens Design)</h2>
                                <p className="text-gray-500">決定視野真實度與外觀美感的關鍵</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Spherical */}
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">球面鏡片 (Spherical)</h3>
                                <div className="bg-gray-50 h-40 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative border border-gray-200">
                                    {/* SVG Diagram: Distorted Grid */}
                                    <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-60">
                                        <defs>
                                            <pattern id="grid-s" width="20" height="20" patternUnits="userSpaceOnUse">
                                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
                                            </pattern>
                                        </defs>
                                        {/* Distorted lines simulation */}
                                        <path d="M10,10 Q50,5 90,10" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                        <path d="M10,30 Q50,25 90,30" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                        <path d="M10,50 Q50,50 90,50" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                        <path d="M10,70 Q50,75 90,70" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                        <path d="M10,90 Q50,95 90,90" fill="none" stroke="#9CA3AF" strokeWidth="1" />

                                        <path d="M10,10 Q5,50 10,90" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                        <path d="M30,10 Q25,50 30,90" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                        <path d="M50,10 Q50,50 50,90" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                        <path d="M70,10 Q75,50 70,90" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                        <path d="M90,10 Q95,50 90,90" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                    </svg>
                                    <span className="absolute text-xs font-bold text-gray-500 bg-white/80 px-2 py-1 rounded">周邊變形明顯</span>
                                </div>
                                <p className="text-sm text-gray-600 text-justify">
                                    鏡片表面如球體。周邊區域容易產生像差，導致視野邊緣物體扭曲變形。外觀上，近視鏡片邊緣較厚，容易讓眼睛看起來變小。
                                </p>
                            </div>

                            {/* Aspherical */}
                            <div className="bg-blue-50 rounded-2xl shadow-sm p-6 border border-blue-100 flex flex-col">
                                <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">非球面鏡片 (Aspherical)</h3>
                                <div className="bg-white h-40 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative border border-blue-100">
                                    {/* SVG Diagram: Better Grid */}
                                    <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-60">
                                        <path d="M10,10 Q50,9 90,10" fill="none" stroke="#3B82F6" strokeWidth="1" />
                                        <path d="M10,30 Q50,29 90,30" fill="none" stroke="#3B82F6" strokeWidth="1" />
                                        <path d="M10,50 Q50,50 90,50" fill="none" stroke="#3B82F6" strokeWidth="1" />
                                        <path d="M10,70 Q50,71 90,70" fill="none" stroke="#3B82F6" strokeWidth="1" />
                                        <path d="M10,90 Q50,91 90,90" fill="none" stroke="#3B82F6" strokeWidth="1" />

                                        <path d="M10,10 Q9,50 10,90" fill="none" stroke="#3B82F6" strokeWidth="1" />
                                        <path d="M30,10 Q29,50 30,90" fill="none" stroke="#3B82F6" strokeWidth="1" />
                                        <path d="M50,10 Q50,50 50,90" fill="none" stroke="#3B82F6" strokeWidth="1" />
                                        <path d="M70,10 Q71,50 70,90" fill="none" stroke="#3B82F6" strokeWidth="1" />
                                        <path d="M90,10 Q91,50 90,90" fill="none" stroke="#3B82F6" strokeWidth="1" />
                                    </svg>
                                    <span className="absolute text-xs font-bold text-blue-600 bg-blue-50/80 px-2 py-1 rounded">視野真實自然</span>
                                </div>
                                <p className="text-sm text-blue-800 text-justify">
                                    單面採用非球面設計，修正周邊像差。視野更寬廣，邊緣變形大幅減少。鏡片更平坦輕薄，配戴美觀度提升。
                                </p>
                            </div>

                            {/* Double Aspherical */}
                            <div className="bg-purple-50 rounded-2xl shadow-sm p-6 border border-purple-100 flex flex-col transform md:-translate-y-2 md:shadow-lg">
                                <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                                    頂級首選
                                </div>
                                <h3 className="text-lg font-bold text-purple-900 mb-2 text-center">雙非球面 (Bi-Aspherical)</h3>
                                <div className="bg-white h-40 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative border border-purple-100">
                                    {/* SVG Diagram: Perfect Grid */}
                                    <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-80">
                                        <defs>
                                            <pattern id="grid-d" width="20" height="20" patternUnits="userSpaceOnUse">
                                                <rect width="20" height="20" fill="none" stroke="#9333EA" strokeWidth="0.5" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grid-d)" />
                                    </svg>
                                    <span className="absolute text-xs font-bold text-purple-600 bg-purple-50/80 px-2 py-1 rounded">極致清晰・最輕薄</span>
                                </div>
                                <p className="text-sm text-purple-800 text-justify">
                                    鏡片<strong>內外兩面</strong>皆採用非球面設計。像差修正達到極致，視野幾乎無變形，是目前光學技術中<strong>最輕薄、最美觀</strong>的選擇。特別推薦給高度數或高散光族群。
                                </p>
                            </div>
                        </div>
                    </section>



                    {/* Section 4: Photochromic Technology */}
                    <section id="photochromic">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl">😎</span>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">變色鏡片科技 (Photochromic)</h2>
                                <p className="text-gray-500">室內透明、戶外變色，一鏡兩用的全天候防護</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Substrate Photochromic */}
                            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 flex flex-col">
                                <div className="flex items-center mb-6">
                                    <span className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold mr-4">1</span>
                                    <h3 className="text-xl font-bold text-gray-900">基材變色 (Substrate)</h3>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <p className="text-gray-600">
                                        <strong className="text-gray-900 block mb-1">原理：</strong>
                                        將感光變色分子直接混合在鏡片原料（單體）中，一體成型製作而成。是早期最常見的變色技術。
                                    </p>
                                    <p className="text-gray-600">
                                        <strong className="text-gray-900 block mb-1">特點：</strong>
                                        技術成熟，價格相對親民，適合預算有限的入門選擇。
                                    </p>
                                    <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-500">
                                        ⚠️ <strong>注意：</strong> 變色深淺會受鏡片厚度影響。高度數鏡片（邊緣厚、中心薄）可能會出現「中間淺、邊緣深」的色差現象（牛眼現象）。
                                    </div>
                                </div>
                            </div>

                            {/* Spin Coating Photochromic */}
                            <div className="bg-blue-50 rounded-2xl shadow-sm p-8 border border-blue-100 flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    主流推薦
                                </div>
                                <div className="flex items-center mb-6">
                                    <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">2</span>
                                    <h3 className="text-xl font-bold text-blue-900">旋塗膜變 (Spin Coating)</h3>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <p className="text-blue-800">
                                        <strong className="text-blue-900 block mb-1">原理：</strong>
                                        利用高速旋塗技術，在鏡片表面均勻鍍上一層高靈敏度的變色層。類似於在鏡片上穿了一件變色外衣。
                                    </p>
                                    <p className="text-blue-800">
                                        <strong className="text-blue-900 block mb-1">特點：</strong>
                                        變色速度快、顏色均勻且夠深。不論度數深淺，鏡片整體的變色效果皆一致。
                                    </p>
                                    <div className="bg-white/60 p-4 rounded-lg text-sm text-blue-700 border border-blue-100">
                                        ✨ <strong>優勢：</strong> 解決了基材變色的色差問題，特別適合<strong>高度數</strong>或對<strong>美觀度</strong>要求高的使用者。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Blue Light Technology */}
                    <section id="bluelight">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl">💻</span>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">抗藍光科技 (Blue Light Blocking)</h2>
                                <p className="text-gray-500">反射型 vs 吸收型，選擇最適合您的數位防護</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Coating Type */}
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col">
                                <div className="flex items-center mb-6">
                                    <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4 flex-shrink-0">A</span>
                                    <h3 className="text-lg font-bold text-gray-900">反射型<br /><span className="text-sm font-normal text-gray-500">(鍍膜防藍光)</span></h3>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <p className="text-gray-600 text-sm">
                                        <strong className="text-gray-900 block mb-1">原理：</strong>
                                        利用光學干涉，將有害藍光直接<strong>「反射」</strong>出去。
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 text-xs">
                                        <li><strong>膜色：</strong>因反射藍光，呈現明顯<strong>藍紫色反光</strong>。</li>
                                        <li><strong>優點：</strong>鏡片底色透亮，較不偏黃。</li>
                                        <li><strong>缺點：</strong>反光較強，拍照容易有藍光倒影。</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Substrate Type */}
                            <div className="bg-yellow-50 rounded-2xl shadow-sm p-6 border border-yellow-100 flex flex-col">
                                <div className="flex items-center mb-6">
                                    <span className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">B</span>
                                    <h3 className="text-lg font-bold text-yellow-900">吸收型<br /><span className="text-sm font-normal text-yellow-700">(基材防藍光)</span></h3>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <p className="text-yellow-800 text-sm">
                                        <strong className="text-yellow-900 block mb-1">原理：</strong>
                                        原料加入抗藍光因子，直接<strong>「吸收」</strong>藍光。
                                    </p>
                                    <ul className="list-disc list-inside text-yellow-800 space-y-2 text-xs">
                                        <li><strong>膜色：</strong>通常搭配<strong>綠色鍍膜</strong>，反光自然。</li>
                                        <li><strong>優點：</strong>防護波段廣，無藍光鬼影。</li>
                                        <li><strong>缺點：</strong>鏡片本身帶有極淡的微黃色。</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Hybrid Type */}
                            <div className="bg-green-50 rounded-2xl shadow-sm p-6 border border-green-100 flex flex-col relative overflow-hidden transform md:-translate-y-2 md:shadow-lg">
                                <div className="absolute top-0 right-0 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                                    雙重防護
                                </div>
                                <div className="flex items-center mb-6">
                                    <span className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">C</span>
                                    <h3 className="text-lg font-bold text-green-900">雙效型<br /><span className="text-sm font-normal text-green-700">(吸收+反射)</span></h3>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <p className="text-green-800 text-sm">
                                        <strong className="text-green-900 block mb-1">原理：</strong>
                                        以<strong>基材吸收</strong>為基礎，可再疊加<strong>鍍膜反射</strong>或<strong>頂級AR</strong>。
                                    </p>
                                    <ul className="list-disc list-inside text-green-800 space-y-2 text-xs">
                                        <li><strong>膜色：</strong>選擇多樣 (綠/藍/紫/鉑金)。</li>
                                        <li><strong>優點：</strong>可依需求選擇「加強防護(藍膜)」或「極致透亮(綠/鉑金膜)」。</li>
                                        <li><strong>缺點：</strong>價格較高，技術門檻高。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Lens Coating */}
                    <section id="coating">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl">🛡️</span>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">頂級鍍膜工藝 (Premium Coatings)</h2>
                                <p className="text-gray-500">層層防護，打造清晰耐用的完美視覺</p>
                            </div>
                        </div>

                        {/* 6 Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {/* 1. Hard Coating */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="text-3xl mb-4">💎</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">堅硬鍍膜 (Hard Coating)</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    強化鏡片表面硬度，大幅提升<span className="text-blue-600 font-bold">耐磨防刮能力</span>。雖然無法達到完全防刮，但能有效抵抗日常擦拭與微塵造成的細紋，延長鏡片使用壽命。
                                </p>
                            </div>

                            {/* 2. Anti-Reflective */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="text-3xl mb-4">✨</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">抗反光鍍膜 (Anti-Reflective)</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    消除鏡片表面的惱人反光與鬼影，讓光線穿透率高達 99%。不僅視覺更<span className="text-blue-600 font-bold">清晰透亮</span>，拍照時也不會因為反光而擋住您的眼睛，美觀大增。
                                </p>
                            </div>

                            {/* 3. Clean Coat */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-md border border-blue-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">SHMC 核心</div>
                                <div className="text-3xl mb-4">💧</div>
                                <h3 className="text-lg font-bold text-blue-800 mb-2">易潔鍍膜 (Clean Coat)</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    也就是常見的 <span className="font-bold">SHMC 超防水</span>。具備卓越的疏水疏油特性，水珠會自然滑落，指紋油漬不易附著，只需<span className="text-blue-600 font-bold">輕輕擦拭即可恢復乾淨</span>。
                                </p>
                            </div>

                            {/* 4. Anti-Static */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="text-3xl mb-4">⚡</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">抗靜電鍍膜 (Anti-Static)</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    一般鏡片擦拭時容易產生靜電吸附灰塵。抗靜電層能有效減少灰塵吸附，保持鏡片長久潔淨，減少頻繁擦拭的需求。
                                </p>
                            </div>

                            {/* 5. Blue Cut */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="text-3xl mb-4">💻</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">抗藍光鍍膜 (Blue Cut)</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    針對數位裝置發出的高能藍光進行過濾。有效減輕長時間使用電腦、手機造成的眼睛疲勞與乾澀，是現代數位生活的必備防護。
                                </p>
                            </div>

                            {/* 6. UV400 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="text-3xl mb-4">☀️</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">UV400 防護 (UV Protection)</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    完全阻隔波長 400nm 以下的有害紫外線 (UVA/UVB)。全天候保護眼睛免受紫外線傷害，延緩眼部老化與白內障風險。
                                </p>
                            </div>
                        </div>

                        {/* Summary Box */}
                        <div className="bg-gray-100 rounded-xl p-6 border border-gray-200">
                            <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">總結：HMC 與 SHMC 的差別</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="text-center">
                                    <div className="text-gray-500 font-bold mb-2">HMC (標準鍍膜)</div>
                                    <div className="text-sm text-gray-500">包含：💎 堅硬 + ✨ 抗反光 + ⚡ 抗靜電 + ☀️ UV400</div>
                                </div>
                                <div className="text-center border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pt-0 md:pl-8">
                                    <div className="text-blue-600 font-bold mb-2">SHMC (超防水鍍膜)</div>
                                    <div className="text-sm text-gray-600">
                                        包含：<span className="font-bold">HMC 所有功能</span> + <span className="text-blue-600 font-bold">💧 易潔鍍膜 (關鍵差異)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Lens Care */}
                    <section id="care">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl">🧼</span>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">鏡片保養小教室</h2>
                                <p className="text-gray-500">正確清潔，延長眼鏡壽命</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-8 bg-blue-50">
                                    <h3 className="text-xl font-bold text-blue-900 mb-6">✅ 正確清潔步驟</h3>
                                    <ol className="space-y-4">
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                                            <span className="text-blue-900"><strong>冷水沖洗：</strong>先用冷水沖掉鏡片表面的灰塵與沙粒，避免直接擦拭刮傷鏡片。</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                                            <span className="text-blue-900"><strong>中性洗劑：</strong>使用一滴洗碗精（中性清潔劑）輕輕搓洗鏡片與鏡框。</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                                            <span className="text-blue-900"><strong>面紙吸乾：</strong>沖淨泡沫後，用面紙輕輕將水珠「吸乾」，勿用力來回擦拭。</span>
                                        </li>
                                    </ol>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-red-600 mb-6">❌ 絕對避免</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center text-gray-700">
                                            <span className="text-red-500 mr-3">🚫</span>
                                            <span><strong>熱水洗澡：</strong>高溫會導致鍍膜龜裂脫落，請勿戴著洗澡或泡溫泉。</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="text-red-500 mr-3">🚫</span>
                                            <span><strong>衣角乾擦：</strong>衣服纖維粗糙且可能藏有灰塵，乾擦極易刮傷鏡片。</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="text-red-500 mr-3">🚫</span>
                                            <span><strong>化學溶劑：</strong>請勿使用酒精、肥皂（鹼性）清潔鏡片。</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}
