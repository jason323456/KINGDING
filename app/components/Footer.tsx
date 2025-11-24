export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">康鼎光學眼鏡有限公司</h3>
                        <p className="text-gray-400 text-sm mb-2">KANG DING OPTICAL</p>
                        <p className="text-gray-400 text-sm">
                            專業鏡片代理經銷，提供高品質光學產品與穩定的供貨服務。
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>電話: 02-82218201</li>
                            <li>地址: 新北市中和區員山路466巷21弄41號</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">快速連結</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="/products" className="hover:text-white">產品目錄</a></li>
                            <li><a href="/about" className="hover:text-white">關於我們</a></li>
                            <li><a href="/contact" className="hover:text-white">成為經銷商</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} KANG DING OPTICAL. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
