import React from 'react';

const Header = () => {
  return (
    <header className="pt-12 px-6 pb-4 flex justify-between items-center z-10">
      <div className="flex items-center gap-3">
        <div className="relative group cursor-pointer">
          <div className="w-14 h-14 rounded-full border-4 border-white dark:border-child-card-dark shadow-md overflow-hidden bg-gray-200">
            <img
              alt="Ảnh đại diện"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS5SfUPI9gaA7zOeGqITU3r9DKUspqV33YV7hevkQjqVt7L1JGpr29eug9WtgN2aE26uBOb-w_6E9JfM1ecPjWc2mZZGumsTC01pfaBvf4M5IHGkXjXkSRcOI30-zVu11xo96kNJS9Z4sYxz1whTp4NcSvQco2GEV41AW1RNJt84E_5XmMI8eIE3vvYR-NXceqeFBx3oMTwJ-rzpyT0cfZEiD5to9aGFj1iraKGA_X2N6uQWNajauYVsMbVkQbWKpm7yhIRjTW-yQ"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-child-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white dark:border-child-card-dark">
            Lvl 5
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-child-text-muted dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Chào mừng trở lại</span>
          <h1 className="text-child-text-main dark:text-white text-xl font-extrabold leading-tight">Siêu Nhân Ben!</h1>
        </div>
      </div>
      {/* Score Badge */}
      <div className="bg-child-secondary/10 dark:bg-child-secondary/20 border-2 border-child-secondary/20 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
        <span className="material-symbols-outlined text-yellow-500 text-2xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        <span className="text-child-secondary dark:text-child-secondary font-black text-xl">150</span>
      </div>
    </header>
  );
};

export default Header;
