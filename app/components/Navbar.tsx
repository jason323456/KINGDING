"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
    const pathname = usePathname();

    const productLinks = [
        { name: "所有系列 (總覽)", href: "/products" },
        { name: "所有產品 (列表)", href: "/products?view=all" },
        { name: "快系列", href: "/products?series=kuai" },
        { name: "抗撞系列", href: "/products?series=impact" },
        { name: "超完美系列", href: "/products?series=super" },
        { name: "藍將系列", href: "/products?series=blue-general" },
        { name: "藍鑽系列", href: "/products?series=blue-diamond" },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex flex-col items-start justify-center font-sans">
                            <span className="text-2xl font-bold text-[#1e3a8a] leading-none tracking-tight">
                                KANG DING
                            </span>
                            <span className="text-[10px] font-medium text-[#6b7280] tracking-[0.2em] ml-0.5">
                                康鼎光學
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            首頁
                        </Link>

                        {/* Product Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsProductMenuOpen(true)}
                            onMouseLeave={() => setIsProductMenuOpen(false)}
                        >
                            <button
                                type="button"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center focus:outline-none"
                            >
                                產品介紹
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div className={`absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isProductMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                {productLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            關於我們
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            聯絡我們
                        </Link>
                        <Link href="/knowledge" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            光學知識
                        </Link>
                        <Link href="/tools/order-parser" className="text-gray-400 hover:text-gray-600 px-3 py-2 text-xs">
                            內部工具
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-500 hover:text-gray-700 p-2"
                        >
                            <span className="sr-only">Open menu</span>
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            首頁
                        </Link>

                        <div className="px-3 py-2 text-base font-medium text-gray-900">產品介紹</div>
                        <div className="pl-6 space-y-1">
                            {productLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            關於我們
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            聯絡我們
                        </Link>
                        <Link
                            href="/knowledge"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            光學知識
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
