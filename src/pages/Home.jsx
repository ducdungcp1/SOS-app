import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-6 font-display">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Family Guardian</h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg">Chọn vai trò của bạn để bắt đầu</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Child Card */}
        <Link to="/child" className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-pink-200 dark:hover:border-pink-900 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-pink-400"></div>
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-500 mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-5xl">face</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Trẻ em</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Giao diện vui nhộn, dễ sử dụng với các nhiệm vụ và phần thưởng.</p>
                <span className="mt-4 px-6 py-2 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-300 font-bold rounded-full text-sm group-hover:bg-pink-500 group-hover:text-white transition-colors">Chọn</span>
            </div>
        </Link>

        {/* Senior Card */}
        <Link to="/senior" className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-teal-200 dark:hover:border-teal-900 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-teal-500"></div>
             <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-5xl">elderly</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Người cao tuổi</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Giao diện đơn giản, chữ lớn, tập trung vào tính năng gọi khẩn cấp.</p>
                <span className="mt-4 px-6 py-2 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-300 font-bold rounded-full text-sm group-hover:bg-teal-600 group-hover:text-white transition-colors">Chọn</span>
            </div>
        </Link>

        {/* Parent Card */}
        <Link to="/parent" className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-900 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>
             <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-5xl">admin_panel_settings</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Người giám hộ</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Theo dõi vị trí, thiết lập vùng an toàn và nhận cảnh báo.</p>
                <span className="mt-4 px-6 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 font-bold rounded-full text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">Chọn</span>
            </div>
        </Link>
      </div>

      <footer className="mt-16 text-slate-400 text-sm font-medium">
        &copy; 2024 Family Guardian App
      </footer>
    </div>
  );
};

export default Home;
