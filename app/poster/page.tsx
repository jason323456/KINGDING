"use client";

import React from "react";

export default function PosterPreview() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900">產品雜誌海報設計提案</h1>
                    <p className="mt-2 text-gray-600">Digital Poster Mockups (A3 Size Ratio)</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center">
                    {/* Poster 1: Fast Change (Kuai Bian) - Calligraphy Impact */}
                    <div className="relative w-full max-w-[500px] aspect-[1/1.414] bg-black shadow-2xl overflow-hidden flex flex-col group">
                        {/* Background Texture (Simulated Ink) */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-80"></div>
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-900 rounded-full mix-blend-difference filter blur-3xl opacity-50 animate-pulse"></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
                            {/* Header Text */}
                            <div className="text-white space-y-2">
                                <h3 className="text-xl font-bold tracking-widest border-b-2 border-red-600 inline-block pb-1">膜變工藝</h3>
                                <p className="text-sm text-gray-300 tracking-[0.2em]">全天候・不凡眼界</p>
                                <p className="text-xs text-gray-500">抗藍光 × 低反射 × 高效變色</p>
                            </div>

                            {/* Main Visual: Calligraphy Character (Simulated) */}
                            <div className="flex-grow flex items-center justify-center relative">
                                <span className="text-[12rem] md:text-[16rem] leading-none font-black text-white mix-blend-overlay opacity-90 select-none transform scale-150" style={{ fontFamily: '"Times New Roman", serif' }}>
                                    變
                                </span>
                                {/* Ink Splash Effect (CSS Shapes) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-white/10 rounded-full blur-xl"></div>
                            </div>

                            {/* Footer / Logo */}
                            <div className="flex items-end justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-red-700 flex items-center justify-center text-white text-2xl font-bold">快</div>
                                    <div className="text-white">
                                        <p className="text-lg font-bold leading-none">快系列 <span className="text-xs font-light opacity-70">TM</span></p>
                                        <p className="text-[0.6rem] tracking-wider opacity-70">KUAI SERIES PHOTOCHROMIC LENS</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <h2 className="text-3xl font-bold text-white italic tracking-tighter">快變・澈</h2>
                                </div>
                            </div>
                        </div>

                        {/* Side Label */}
                        <div className="absolute top-8 right-4 text-[0.6rem] text-gray-600 tracking-widest" style={{ writingMode: 'vertical-rl' }}>
                            康鼎光學眼鏡有限公司 KANG DING
                        </div>
                    </div>

                    {/* Poster 2: Fast Flash (Kuai Shan) - Japanese Fresh */}
                    <div className="relative w-full max-w-[500px] aspect-[1/1.414] bg-white shadow-2xl overflow-hidden flex flex-col">
                        {/* Background Visual (Simulated Outdoor) */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white"></div>
                        {/* Abstract Sky/Cloud */}
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-60"></div>
                        {/* Abstract Grass/Nature */}
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-green-50/50 to-transparent"></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col p-12 items-center text-center">

                            {/* Main Title */}
                            <div className="mt-12 mb-20 transform -rotate-2">
                                <h1 className="text-6xl md:text-7xl text-blue-500 font-light tracking-tight" style={{ fontFamily: '"Brush Script MT", "Comic Sans MS", cursive' }}>
                                    快閃・澈
                                </h1>
                                <div className="w-24 h-1 bg-blue-200 mx-auto mt-4 rounded-full"></div>
                            </div>

                            {/* Keywords Vertical Layout */}
                            <div className="flex-grow flex flex-col justify-center gap-12 text-gray-600 font-medium text-lg tracking-[0.5em]">
                                <span className="transform hover:scale-110 transition-transform duration-300">變色</span>
                                <span className="transform hover:scale-110 transition-transform duration-300">快速</span>
                                <span className="transform hover:scale-110 transition-transform duration-300">戶外</span>
                            </div>

                            {/* Footer / Logo */}
                            <div className="w-full flex items-center justify-between mt-auto pt-12 border-t border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-red-600 flex items-center justify-center text-white text-xl font-bold">快</div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold text-gray-800 leading-none">KUAI SERIES</p>
                                        <p className="text-[0.5rem] text-gray-500 tracking-wider">PHOTOCHROMIC LENS</p>
                                    </div>
                                </div>
                                <div className="text-right text-gray-400 text-xs">
                                    <p>Japanese Technology</p>
                                    <p>Outdoor Lifestyle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
