import React from 'react';
import { Link } from 'react-router-dom';

const SeniorHome = () => {
  return (
    <div className="bg-senior-bg-light dark:bg-senior-bg-dark font-display antialiased min-h-screen flex flex-col overflow-hidden select-none transition-colors duration-300">
      {/* Header Status Bar */}
      <header className="flex-none pt-12 pb-4 px-6 bg-senior-bg-light dark:bg-senior-bg-dark z-10">
        <div className="flex items-center justify-center space-x-3 bg-white dark:bg-zinc-800 rounded-full py-3 px-6 shadow-sm border border-slate-100 dark:border-zinc-700 mx-auto w-fit">
          <div className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 animate-[blink_2s_infinite]"></span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-wide uppercase">Đang giám sát</h2>
        </div>
      </header>

      {/* Main Content Area - Centered SOS Button */}
      <main className="flex-1 flex flex-col items-center justify-center w-full px-6 py-4 relative">
        {/* Instructional Text above button */}
        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium mb-8 text-center max-w-[280px]">
          Trong trường hợp khẩn cấp, nhấn và giữ nút màu đỏ bên dưới.
        </p>

        {/* Giant SOS Button Container */}
        <div className="relative w-full aspect-square max-w-[340px] max-h-[340px] flex items-center justify-center">
          {/* Pulse Animation Background */}
          <div className="absolute w-full h-full rounded-3xl bg-senior-primary opacity-20 animate-[pulse-slow_2s_infinite] -z-10"></div>

          <Link to="/sos" className="relative w-full h-full bg-senior-primary hover:bg-red-600 active:scale-95 transition-transform duration-100 rounded-3xl shadow-xl flex flex-col items-center justify-center group overflow-hidden border-4 border-red-500/50 dark:border-red-400/30">
            {/* Inner decoration circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
            <span className="material-symbols-outlined text-white text-[80px] mb-2 drop-shadow-md">
              campaign
            </span>
            <h1 className="text-white text-6xl font-extrabold tracking-tighter drop-shadow-sm">SOS</h1>
            <span className="text-white/90 text-xl font-bold mt-2 tracking-widest uppercase bg-black/10 px-4 py-1 rounded-full">Nhấn để gọi</span>
          </Link>
        </div>
      </main>

      {/* Bottom Actions Grid */}
      <footer className="flex-none p-6 pb-10 bg-senior-bg-light dark:bg-senior-bg-dark">
        <div className="grid grid-cols-2 gap-4 h-32">
          {/* Call Family Button */}
          <button className="flex flex-col items-center justify-center h-full bg-white dark:bg-zinc-800 border-2 border-slate-200 dark:border-zinc-700 rounded-2xl active:bg-slate-50 dark:active:bg-zinc-700 transition-colors shadow-sm group">
            <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full mb-2 group-active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-4xl">
                call
              </span>
            </div>
            <span className="text-slate-900 dark:text-white text-xl font-bold">Gọi người thân</span>
          </button>
          {/* I am OK Button */}
          <button className="flex flex-col items-center justify-center h-full bg-white dark:bg-zinc-800 border-2 border-slate-200 dark:border-zinc-700 rounded-2xl active:bg-slate-50 dark:active:bg-zinc-700 transition-colors shadow-sm group">
            <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-full mb-2 group-active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-4xl">
                check_circle
              </span>
            </div>
            <span className="text-slate-900 dark:text-white text-xl font-bold">Tôi ổn</span>
          </button>
        </div>
        {/* Simple Navigation/Info */}
        <div className="flex justify-center mt-6 opacity-60">
          <button className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
            <span className="material-symbols-outlined text-2xl">
              settings
            </span>
            <span className="text-sm font-medium">Cài đặt</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SeniorHome;
