import React from 'react';
import { Link } from 'react-router-dom';

const ShieldButton = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 z-10">
      <Link to="/sos" className="relative group cursor-pointer active:scale-95 transition-transform duration-200 block">
        {/* Outer Ripple Effect Hint */}
        <div className="absolute inset-0 bg-child-primary/20 rounded-full scale-110 animate-ping opacity-20 group-hover:opacity-40"></div>
        {/* Shield Button Container */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-child-primary to-[#ff4785] rounded-full flex items-center justify-center shadow-glow shadow-child-primary/40 border-8 border-white dark:border-child-card-dark">
          {/* Shield Icon */}
          <span className="material-symbols-outlined text-white text-[80px] md:text-[100px] drop-shadow-md" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>shield</span>
          {/* Shine Effect */}
          <div className="absolute top-4 right-8 w-8 h-4 bg-white/30 rounded-full rotate-[-45deg]"></div>
        </div>
        {/* Helper Text */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-child-card-dark px-4 py-1 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 whitespace-nowrap">
          <span className="text-xs font-bold text-child-primary uppercase tracking-wide">Nhấn để gọi giúp đỡ</span>
        </div>
      </Link>
      <h2 className="mt-8 text-3xl font-black text-child-text-main dark:text-white bubbly-text tracking-tight text-center">Siêu Khiên</h2>
      <p className="text-child-text-muted dark:text-gray-400 text-sm font-medium text-center max-w-[200px] leading-snug mt-1">
        Nhấn và giữ khiên nếu bạn cần giúp đỡ nhé!
      </p>
    </div>
  );
};

export default ShieldButton;
