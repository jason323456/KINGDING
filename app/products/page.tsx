"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- Data Definitions ---

type Product = {
    name: string;
    coating: string;
    specs: string;
    desc: string;
    tag?: "NEW" | "OLD";
    accentColor: "blue" | "purple" | "gray";
    highlight?: boolean;
    link?: string;
};

type Series = {
    id: string;
    name: string;
    englishName: string;
    desc: string;
    tag: string;
    tagColor: "blue" | "purple" | "green";
    theme: "dark" | "light";
    subSeries?: {
        title: string;
        subtitle: string;
        desc: string;
        tag?: string;
        products: Product[];
    }[];
    products?: Product[]; // For simple series without sub-series
};

const productsData: Series[] = [
    {
        id: "kuai",
        name: "快系列",
        englishName: "KUAI Series",
        desc: "光影瞬息・以快制光",
        tag: "PREMIUM OPTICAL LENS",
        tagColor: "blue",
        theme: "light",
        subSeries: [
            {
                title: "快閃系列",
                subtitle: "Flash Series",
                desc: "基材雙面變色 | 入門高CP首選 | 1.56 為主",
                tag: "入門首選",
                products: [
                    { name: "快閃 Pro", coating: "綠膜", specs: "UV400 99% CUT / 1.56 非球面 / SHMC (超防水)", desc: "入門高CP升級款；快變快退、底色清晰，低~中度數戶外/日常首選。", tag: "NEW", accentColor: "blue" },
                    { name: "快閃・澈", coating: "淨藍膜 (低反)", specs: "UV400 99% CUT / 1.56 非球面 / SHMC", desc: "低反射更清亮、畫面乾淨，通勤/長時使用、對反光敏感者推薦。", tag: "NEW", accentColor: "blue", link: "/products/kuai-shan" },
                    { name: "快閃・眩盾", coating: "AG 紫膜 (防眩)", specs: "UV400 99% CUT / 1.56 非球面 / SHMC", desc: "強光/夜間燈源環境舒適，駕車/戶外活動專用。", tag: "NEW", accentColor: "blue" },
                    { name: "快閃 Classic", coating: "綠膜", specs: "UV400 / 球面 / 無超防水", desc: "經典入門款；價目表標示「Classic」避免混淆。", tag: "OLD", accentColor: "gray" },
                ]
            },
            {
                title: "快變系列",
                subtitle: "Change Series",
                desc: "旋塗膜層變色 | 高階全場景 | 抗藍光 + SHMC + 非球面",
                tag: "旗艦高階",
                products: [
                    { name: "快變・經典原色", coating: "綠膜", specs: "抗藍光 / SHMC / 非球面", desc: "穩定耐用、日常優雅墨綠灰。", accentColor: "gray" },
                    { name: "快變・曜", coating: "綠膜", specs: "高階深變色 / 抗藍光 / 穩定快退 / SHMC / 非球面", desc: "旗艦感，戶內外頻繁切換、喜深色者。", accentColor: "gray" },
                    { name: "快變・澈", coating: "淨藍膜 (低反)", specs: "高階深變色 / 抗藍光 / 低反射 / SHMC / 非球面", desc: "高亮清透、對反射敏感、長時間用眼者。", accentColor: "gray", link: "/products/kuai-bian" },
                ]
            }
        ]
    },
    {
        id: "impact",
        name: "抗撞系列",
        englishName: "Impact Resistance",
        desc: "安全防護 | 高強度耐衝擊",
        tag: "安全首選",
        tagColor: "green",
        theme: "light",
        products: [
            { name: "抗撞擊 HMC", coating: "綠膜", specs: "UV400 / 1.56 / 1.60", desc: "高強度鏡片，保護眼睛免受撞擊傷害。", accentColor: "blue" },
            { name: "抗撞擊 SHMC 防藍光", coating: "綠膜", specs: "UV420 / 抗藍光 / 超防水", desc: "結合安全防護與數位護眼，適合運動或高風險環境。", accentColor: "blue" },
        ]
    },
    {
        id: "super",
        name: "超完美系列",
        englishName: "Super Perfect",
        desc: "極致工藝 | 藍膜特徵",
        tag: "極致工藝",
        tagColor: "purple",
        theme: "light",
        products: [
            { name: "超完美・眩盾", coating: "AG 紫膜 (防眩)", specs: "防眩光 / 舒適視覺", desc: "針對強光環境設計，有效減少眩光干擾。", accentColor: "purple" },
            { name: "超完美 (舊款)", coating: "藍膜", specs: "庫存品項", desc: "透明/變色鏡片 (陸續淘汰中)。", tag: "OLD", accentColor: "gray" },
        ]
    },
    {
        id: "blue-general",
        name: "藍將系列",
        englishName: "Blue General",
        desc: "經典綠膜 | 穩定品質",
        tag: "經典穩定",
        tagColor: "blue",
        theme: "light",
        products: [
            { name: "藍將・透明", coating: "綠膜", specs: "標準光學鏡片", desc: "品質穩定，適合一般日常配戴。", accentColor: "blue" },
            { name: "藍將・變色 (舊款)", coating: "綠膜", specs: "庫存品項", desc: "變色鏡片 (陸續淘汰中)。", tag: "OLD", accentColor: "gray" },
        ]
    },
    {
        id: "blue-diamond",
        name: "藍鑽系列",
        englishName: "Blue Diamond",
        desc: "頂級防護 | 濾藍光首選",
        tag: "頂級防護",
        tagColor: "blue",
        theme: "light",
        products: [
            { name: "藍鑽・濾藍光", coating: "藍鑽膜", specs: "UV400 / SHMC (超防水) / 非球面 / 濾減藍光", desc: "頂級濾藍光防護，搭配超防水膜層，提供最清晰舒適的視覺體驗。", tag: "NEW", accentColor: "blue", highlight: true },
        ]
    }
];

// --- Components ---

function SeriesCard({ series, onClick }: { series: Series; onClick: () => void }) {
    const isDark = series.theme === "dark";

    // Custom Hover Effects
    const getHoverEffect = () => {
        switch (series.id) {
            case 'kuai': // Fast Series: Photochromic Darkening
                return (
                    <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-95 transition-opacity duration-700 ease-in-out pointer-events-none z-10" />
                );
            case 'impact': // Impact Series: Heavy Impact (Shake + Shockwave + Bold Cracks)
                return (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none z-10 overflow-hidden">
                        {/* Styles for Shake and Shockwave */}
                        {/* Glass Shards with Backdrop Blur */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] mix-blend-overlay"></div>

                        {/* Shockwave Ripple */}
                        <div className="shockwave-target absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-4 border-white/50 origin-center"></div>

                        {/* Bold Cracks SVG */}
                        <svg viewBox="0 0 200 200" className="w-full h-full absolute inset-0 scale-105 group-hover:scale-100 transition-transform duration-100 ease-out shake-target">
                            {/* Main Impact Center */}
                            <g stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
                                <path d="M100 100 L30 20 M100 100 L170 30 M100 100 L190 110 M100 100 L130 190 M100 100 L50 180 M100 100 L10 120" />
                                <path d="M60 50 L140 40 L170 100 L150 160 L70 170 L30 110 Z" strokeWidth="2" />
                            </g>
                            {/* Secondary Cracks */}
                            <g stroke="white" strokeWidth="1.5" fill="none" opacity="0.7">
                                <path d="M30 20 L10 0 M170 30 L200 10 M190 110 L200 120 M130 190 L140 200 M50 180 L40 200 M10 120 L0 110" />
                                <path d="M140 40 L150 20 M170 100 L200 90 M150 160 L180 180 M70 170 L60 200 M30 110 L0 120" />
                            </g>
                        </svg>

                        {/* Impact Flash */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/60 blur-2xl rounded-full animate-pulse mix-blend-screen"></div>
                    </div>
                );
            case 'super': // Super Series: Shine
                return (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden z-10">
                        <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 group-hover:animate-pulse" />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div
            onClick={onClick}
            className={`
        cursor-pointer group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
        ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border border-gray-100 shadow-lg'}
      `}
        >
            {/* Base Background for Dark Theme */}
            {isDark && (
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
            )}

            {/* Custom Hover Effect Overlay */}
            {getHoverEffect()}

            <div className="relative p-8 h-full flex flex-col justify-between min-h-[320px] z-20">
                <div>
                    <span className={`inline-block py-1 px-3 rounded-full text-xs font-bold tracking-widest mb-4 transition-colors duration-300
            ${isDark ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'bg-blue-50 text-blue-600'}
            ${series.id === 'kuai' ? 'group-hover:bg-gray-700 group-hover:text-white' : ''}
          `}>
                        {series.tag}
                    </span>
                    <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${series.id === 'kuai' ? 'group-hover:text-white' : 'group-hover:text-blue-500'}`}>
                        {series.name}
                    </h3>
                    <p className={`text-lg font-medium mb-6 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'} ${series.id === 'kuai' ? 'group-hover:text-gray-300' : ''}`}>
                        {series.englishName}
                    </p>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-600'} ${series.id === 'kuai' ? 'group-hover:text-gray-400' : ''}`}>
                        {series.desc}
                    </p>
                </div>

                <div className={`mt-8 flex items-center text-sm font-bold transition-colors duration-300 ${series.id === 'kuai' ? 'group-hover:text-white' : ''}`}>
                    <span className="mr-2">查看系列產品</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </div>
        </div>
    );
}

function ProductCard({ name, coating, specs, desc, tag, accentColor = 'blue', highlight = false, link }: Product) {
    const hoverBorderClass = {
        blue: 'hover:border-blue-300',
        purple: 'hover:border-purple-300',
        gray: 'hover:border-gray-400'
    };

    const CardContent = () => (
        <>
            {highlight && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gray-500 to-gray-700"></div>
            )}

            <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-gray-700 transition-colors">
                        {name}
                    </h3>
                    {tag === "NEW" && <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded-md border border-red-100">NEW</span>}
                    {tag === "OLD" && <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-md">CLEARANCE</span>}
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5 min-w-[40px]">膜色</span>
                        <p className="text-sm font-semibold text-gray-700">{coating}</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5 min-w-[40px]">規格</span>
                        <p className="text-sm font-semibold text-gray-700">{specs}</p>
                    </div>
                    <div className="pt-3 border-t border-gray-50">
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">{desc}</p>
                    </div>

                    {link && (
                        <div className="pt-4 mt-auto">
                            <span className="text-xs font-bold text-blue-600 group-hover:underline flex items-center">
                                了解更多 <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );

    if (link) {
        return (
            <Link href={link} className={`
                group relative bg-white rounded-2xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 cursor-pointer
                ${highlight
                    ? 'shadow-lg ring-2 ring-gray-400 transform hover:-translate-y-1 hover:shadow-2xl'
                    : `shadow-sm hover:shadow-xl hover:-translate-y-1 ${hoverBorderClass[accentColor]}`}
            `}>
                <CardContent />
            </Link>
        );
    }

    return (
        <div className={`
      group relative bg-white rounded-2xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100
      ${highlight
                ? 'shadow-lg ring-2 ring-gray-400 transform hover:-translate-y-1 hover:shadow-2xl'
                : `shadow-sm hover:shadow-xl hover:-translate-y-1 ${hoverBorderClass[accentColor]}`}
    `}>
            <CardContent />
        </div>
    );
}

function HeroBanner({ series }: { series: Series }) {
    const isDark = series.theme === "dark";
    const tagColors: { [key: string]: string } = {
        green: 'bg-green-100 text-green-800',
        purple: 'bg-purple-100 text-purple-800',
        blue: 'bg-blue-100 text-blue-800',
    };

    // --- Custom Carousel for Kuai Series ---
    const [currentKuaiSlide, setCurrentKuaiSlide] = useState(0);

    useEffect(() => {
        if (series.id === 'kuai') {
            const timer = setInterval(() => {
                setCurrentKuaiSlide((prev) => (prev + 1) % 2);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [series.id]);

    if (series.id === 'kuai') {
        const kuaiSlides = [
            {
                id: 0,
                bg: "bg-white",
                textColor: "text-gray-900",
                subTextColor: "text-gray-500",
                tagColor: "bg-blue-100 text-blue-800",
                title: "快閃系列",
                subtitle: "Flash Series",
                desc: "基材雙面變色 | 入門高CP首選",
                fontClass: "font-chen"
            },
            {
                id: 1,
                bg: "bg-black",
                textColor: "text-white",
                subTextColor: "text-gray-400",
                tagColor: "bg-gray-800 text-white border border-gray-700",
                title: "快變系列",
                subtitle: "Change Series",
                desc: "旋塗膜層變色 | 高階全場景",
                fontClass: "font-sans"
            }
        ];

        return (
            <div className="relative h-[500px] overflow-hidden bg-gray-900">
                {kuaiSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center justify-center text-center px-4 ${index === currentKuaiSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                            } ${slide.bg}`}
                    >
                        {/* Content */}
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <span className={`inline-block py-1 px-3 rounded-full text-xs font-bold tracking-widest mb-6 ${slide.tagColor}`}>
                                {series.tag}
                            </span>

                            <h1
                                className={`text-6xl md:text-8xl font-bold tracking-tight mb-4 ${slide.textColor} ${slide.fontClass}`}
                                style={slide.fontClass === 'font-chen' ? { fontFamily: 'var(--font-chen)' } : {}}
                            >
                                {slide.title}
                            </h1>

                            <h2 className={`text-3xl md:text-5xl font-light mb-8 ${slide.subTextColor}`}>
                                {slide.subtitle}
                            </h2>

                            <p className={`text-xl md:text-2xl font-light tracking-[0.2em] mb-10 ${slide.subTextColor}`}>
                                {slide.desc}
                            </p>
                        </div>

                        {/* CSS Logo at Bottom Left */}
                        <div className="absolute bottom-8 left-8 z-20 flex flex-col items-start select-none opacity-90">
                            {/* Top Row: Red Box + Chinese Text */}
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-[32px] h-[32px] bg-[#EC1D24] flex items-center justify-center shadow-sm overflow-hidden">
                                    <span className="text-white font-black leading-none text-[1.8rem] mt-[-2px]" style={{ fontFamily: '"Microsoft YaHei", "PingFang SC", "Heiti TC", sans-serif' }}>
                                        快
                                    </span>
                                </div>
                                <span
                                    className={`text-[32px] font-black tracking-tighter leading-none ${slide.textColor}`}
                                    style={{ fontFamily: '"Microsoft YaHei", "PingFang SC", "Heiti TC", sans-serif' }}
                                >
                                    系
                                </span>
                                <span
                                    className={`text-[32px] font-black tracking-tighter leading-none ${slide.textColor}`}
                                    style={{ fontFamily: '"Microsoft YaHei", "PingFang SC", "Heiti TC", sans-serif' }}
                                >
                                    列
                                </span>
                            </div>
                            {/* English Text */}
                            <div className={`flex flex-col items-start font-bold tracking-wider ${slide.textColor}`} style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
                                <span className="text-lg leading-none mb-1">KUAI SERIES</span>
                                <span className="text-lg leading-none">PHOTOCHROMIC LENS</span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Indicators */}
                <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
                    {kuaiSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentKuaiSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentKuaiSlide
                                ? (currentKuaiSlide === 0 ? "bg-gray-900 w-6" : "bg-white w-6")
                                : (currentKuaiSlide === 0 ? "bg-gray-300" : "bg-gray-700")
                                }`}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={`py-20 relative overflow-hidden ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border-b border-gray-200'}`}>
            {/* Background Pattern */}
            <div className={`absolute inset-0 opacity-10 ${isDark ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black' : 'bg-gray-50'}`}></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className={`inline-block py-1 px-3 rounded-full text-xs font-bold tracking-widest mb-6 
          ${isDark ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : tagColors[series.tagColor] || tagColors.blue}
        `}>
                    {series.tag}
                </span>

                {/* Chinese Name */}
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2">
                    {series.name}
                </h1>

                {/* English Name (New Line) */}
                <h2 className={`text-3xl md:text-5xl font-light mb-8 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                    {series.englishName}
                </h2>

                <p className={`text-xl md:text-2xl font-light tracking-[0.2em] mb-10 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {series.desc}
                </p>
            </div>
        </div>
    );
}

// --- Main Page Content ---

function ProductsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const seriesParam = searchParams.get('series');
    const viewParam = searchParams.get('view');

    // Determine current mode
    const isAllView = viewParam === 'all';
    const activeSeriesId = seriesParam;
    const activeSeries = productsData.find(s => s.id === activeSeriesId);

    const handleSeriesClick = (seriesId: string) => {
        router.push(`/products?series=${seriesId}`);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
            <Navbar />

            <main className="flex-grow">

                {/* MODE 1: SINGLE SERIES VIEW (Active when ?series=ID is present) */}
                {activeSeries ? (
                    <div className="animate-fade-in">
                        {/* Sticky Tabs */}
                        <div className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm overflow-x-auto">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-start md:justify-center space-x-4 md:space-x-8 min-w-max px-2">
                                    {productsData.map((series) => (
                                        <button
                                            key={series.id}
                                            onClick={() => router.push(`/products?series=${series.id}`)}
                                            className={`py-4 px-2 border-b-2 font-medium text-base md:text-lg transition-colors duration-200 whitespace-nowrap ${activeSeries.id === series.id
                                                ? 'border-blue-600 text-blue-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                                }`}
                                        >
                                            {series.name}
                                        </button>
                                    ))}
                                    <div className="flex items-center border-l border-gray-200 pl-4 ml-2 space-x-4">
                                        <button
                                            onClick={() => router.push('/products')}
                                            className="py-4 px-2 border-b-2 border-transparent font-medium text-base md:text-lg text-gray-500 hover:text-blue-600 transition-colors whitespace-nowrap"
                                        >
                                            ↶ 返回系列總覽
                                        </button>
                                        <button
                                            onClick={() => router.push('/products?view=all')}
                                            className="py-4 px-2 border-b-2 border-transparent font-medium text-base md:text-lg text-gray-500 hover:text-blue-600 transition-colors whitespace-nowrap"
                                        >
                                            ≡ 所有產品
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Banner */}
                        <HeroBanner series={activeSeries} />

                        {/* Series Content */}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                            {
                                activeSeries.subSeries ? (
                                    <div className="space-y-20">
                                        {activeSeries.subSeries.map((sub) => (
                                            <div key={sub.title}>
                                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gray-200 pb-6">
                                                    <div>
                                                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                                            {sub.title} <span className="text-lg text-gray-500 font-normal ml-2">{sub.subtitle}</span>
                                                        </h2>
                                                        <p className="text-gray-500 font-medium">{sub.desc}</p>
                                                    </div>
                                                    {sub.tag && (
                                                        <div className="mt-4 md:mt-0">
                                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${sub.tag.includes('旗艦') ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                                                                }`}>
                                                                {sub.tag}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className={`grid grid-cols-1 md:grid-cols-2 ${sub.products.length > 2 ? 'lg:grid-cols-3' : ''} gap-8`}>
                                                    {sub.products.map((product) => (
                                                        <ProductCard key={product.name} {...product} />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {activeSeries.products?.map((product) => (
                                            <ProductCard key={product.name} {...product} />
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ) : isAllView ? (
                    // MODE 2: ALL PRODUCTS LIST (Sidebar View)
                    <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <aside className="hidden lg:block w-64 flex-shrink-0">
                                <div className="sticky top-24 space-y-1">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-3">系列導覽</h3>
                                    {productsData.map((series) => (
                                        <a key={series.id} href={`#${series.id}`} className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                            {series.name}
                                        </a>
                                    ))}
                                    <button onClick={() => router.push('/products')} className="mt-8 w-full text-left px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors">← 返回系列總覽</button>
                                </div>
                            </aside>
                            <div className="flex-grow space-y-24">
                                {productsData.map((series) => (
                                    <section key={series.id} id={series.id} className="scroll-mt-28">
                                        <div className="border-b border-gray-200 pb-6 mb-8">
                                            <h2 className="text-3xl font-bold text-gray-900">{series.name}</h2>
                                            <p className="mt-2 text-gray-500">{series.desc}</p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {series.subSeries
                                                ? series.subSeries.flatMap(s => s.products).map(p => <ProductCard key={p.name} {...p} />)
                                                : series.products?.map(p => <ProductCard key={p.name} {...p} />)
                                            }
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    // MODE 3: SERIES OVERVIEW (Default Landing)
                    <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">產品系列總覽</h1>
                            <p className="text-xl text-gray-500">選擇您感興趣的鏡片系列，探索更多細節。</p>
                            <button
                                onClick={() => router.push('/products?view=all')}
                                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                            >
                                查看所有產品列表
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {productsData.map((series) => (
                                <SeriesCard
                                    key={series.id}
                                    series={series}
                                    onClick={() => handleSeriesClick(series.id)}
                                />
                            ))}
                        </div>
                    </div>
                )}

            </main>

            <Footer />
        </div>
    );
}

export default function Products() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
