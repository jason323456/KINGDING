"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
    {
        id: 1,
        image: "/images/model-hero-1.png",
        title: "智能變色，隨光而動",
        subtitle: "Smart Photochromic Technology",
        desc: "室內透明清晰，戶外秒變墨鏡。全天候的視覺守護者。",
        color: "from-blue-900/80 to-transparent",
        align: "left"
    },
    {
        id: 2,
        image: "/images/model-sport.png",
        title: "戶外運動，極致防護",
        subtitle: "Ultimate Protection for Sports",
        desc: "快速響應光線變化，讓您在烈日下也能保持最佳視野。",
        color: "from-orange-900/80 to-transparent",
        align: "right"
    },
    {
        id: 3,
        image: "/images/model-cafe.png",
        title: "時尚穿搭，自在隨行",
        subtitle: "Fashion & Functionality",
        desc: "不僅是眼鏡，更是您的時尚配件。完美融入日常穿搭。",
        color: "from-purple-900/80 to-transparent",
        align: "left"
    },
    {
        id: 4,
        image: "/images/model-urban.png",
        title: "城市街頭，自信展現",
        subtitle: "Urban Style",
        desc: "在城市的光影間自由穿梭，展現獨特的個人風格。",
        color: "from-gray-900/80 to-transparent",
        align: "right"
    }
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full h-[550px] md:h-[700px] overflow-hidden bg-gray-900">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Image Container */}
                    <div className="relative w-full h-full">
                        {/* 1. Blurred Background */}
                        <div className="absolute inset-0 overflow-hidden">
                            <Image
                                src={slide.image}
                                alt=""
                                fill
                                className="object-cover blur-2xl scale-110 opacity-50"
                                priority={index === 0}
                            />
                        </div>

                        {/* 2. Main Image (Top Aligned, Contained) */}
                        <div className="absolute inset-0">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-contain object-top drop-shadow-2xl"
                                priority={index === 0}
                            />
                        </div>

                        {/* Overlay Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent md:${slide.color} mix-blend-multiply opacity-60`}></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-end md:items-center pb-12 md:pb-0">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className={`max-w-xl ${slide.align === "right" ? "md:ml-auto md:text-right" : ""} text-center md:text-left`}>
                                <h2 className="text-xs md:text-xl font-bold text-white/90 mb-1 md:mb-2 tracking-wider uppercase animate-fade-in-up shadow-sm">
                                    {slide.subtitle}
                                </h2>
                                <h1 className="text-2xl md:text-6xl font-bold text-white mb-2 md:mb-6 leading-tight animate-fade-in-up delay-100 drop-shadow-lg whitespace-nowrap md:whitespace-normal">
                                    {slide.title}
                                </h1>
                                <p className="text-sm md:text-xl text-gray-100 mb-4 md:mb-8 leading-relaxed animate-fade-in-up delay-200 drop-shadow-md line-clamp-2 md:line-clamp-none px-4 md:px-0">
                                    {slide.desc}
                                </p>
                                <div className={`animate-fade-in-up delay-300 flex justify-center ${slide.align === "right" ? "md:justify-end" : "md:justify-start"}`}>
                                    <Link
                                        href="/products"
                                        className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-2 px-6 md:py-4 md:px-8 text-sm md:text-base rounded-full transition-all transform hover:scale-105 shadow-lg inline-block"
                                    >
                                        探索全系列
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
