import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
            <Navbar />

            <main className="flex-grow py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">聯絡我們</h1>
                        <p className="text-xl text-gray-500">
                            有任何需求或想成為經銷夥伴，歡迎隨時與我們聯繫。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">公司資訊</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">公司名稱</h3>
                                    <p className="text-lg font-medium text-gray-900">康鼎光學眼鏡有限公司</p>
                                    <p className="text-gray-500">KANG DING OPTICAL</p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">聯絡電話</h3>
                                    <p className="text-lg font-medium text-gray-900">02-82218201</p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">公司地址</h3>
                                    <p className="text-lg font-medium text-gray-900">新北市中和區員山路466巷21弄41號</p>
                                </div>
                            </div>

                            <div className="mt-10 pt-10 border-t border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">營業時間</h3>
                                <p className="text-gray-600">週一至週五: 09:00 - 18:00</p>
                                <p className="text-gray-600">週六、週日: 休息</p>
                            </div>

                            {/* Google Maps Embed */}
                            <div className="mt-8 rounded-xl overflow-hidden shadow-sm border border-gray-200 h-64">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.002746646966!2d121.4829!3d25.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a820c7499999%3A0x1234567890abcdef!2zMjM15paw5YyX5biC5Lit5ZKM5Y2A5ZOh5bGx6LevNDY25be3MjHlvIQ0MeiZnw!5e0!3m2!1szh-TW!2stw!4v1620000000000!5m2!1szh-TW!2stw"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">傳送訊息</h2>
                            <form className="space-y-6">
                                {/* Row 1: Name & Company */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-1 tracking-wide">聯絡人姓名</label>
                                        <input type="text" id="name" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border text-gray-900 placeholder-gray-400" placeholder="例：王小明" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-500 mb-1 tracking-wide">公司 / 門市名稱</label>
                                        <input type="text" id="company" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border text-gray-900 placeholder-gray-400" placeholder="例：〇〇眼鏡 / 〇〇光學" />
                                    </div>
                                </div>

                                {/* Row 2: Email & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1 tracking-wide uppercase">Email</label>
                                        <input type="email" id="email" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border text-gray-900 placeholder-gray-400" placeholder="example@yourmail.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-500 mb-1 tracking-wide">聯絡電話</label>
                                        <input type="tel" id="phone" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border text-gray-900 placeholder-gray-400" placeholder="例：09xx-xxx-xxx" />
                                    </div>
                                </div>

                                {/* Row 3: Cooperation Type */}
                                <div>
                                    <label htmlFor="type" className="block text-sm font-medium text-gray-500 mb-1 tracking-wide">合作類型（選填）</label>
                                    <select id="type" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border text-gray-900 bg-white">
                                        <option value="">請選擇</option>
                                        <option value="dealer">申請經銷 (眼鏡店/通路)</option>
                                        <option value="product">產品諮詢</option>
                                        <option value="other">其他合作</option>
                                    </select>
                                </div>

                                {/* Row 4: Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-1 tracking-wide">需求說明 / 想了解的產品</label>
                                    <textarea id="message" rows={5} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border text-gray-900 placeholder-gray-400" placeholder="簡單說明您目前的情況與想要了解的產品（例如：快閃澈、快變曜、清庫專案規劃等）"></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button type="button" className="w-full md:w-auto bg-blue-600 text-white font-bold py-3 px-12 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                        送出 (示意按鈕，尚未串接)
                                    </button>
                                    <p className="mt-4 text-xs text-gray-400">
                                        ※ 正式網站可串接 Email、後台表單或 LINE 官方帳號，讓表單能實際送達負責窗口。
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
