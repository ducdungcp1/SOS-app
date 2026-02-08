import React from 'react';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-6 left-6 right-6 h-20 bg-white dark:bg-child-card-dark rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 dark:border-gray-800 flex justify-around items-center px-2 z-50">
      {/* Nav Item: Home (Active) */}
      <button className="flex flex-col items-center justify-center w-16 h-full gap-1 text-child-primary">
        <div className="w-12 h-12 rounded-2xl bg-child-primary/10 flex items-center justify-center transition-all">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        </div>
        <span className="text-[10px] font-bold">Trang chủ</span>
      </button>
      {/* Nav Item: Map */}
      <button className="flex flex-col items-center justify-center w-16 h-full gap-1 text-gray-400 hover:text-child-secondary transition-colors group">
        <div className="w-12 h-12 rounded-2xl group-hover:bg-child-secondary/10 flex items-center justify-center transition-all">
          <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 0" }}>map</span>
        </div>
        <span className="text-[10px] font-bold group-hover:text-child-secondary">Bản đồ</span>
      </button>
      {/* Nav Item: Rewards */}
      <button className="flex flex-col items-center justify-center w-16 h-full gap-1 text-gray-400 hover:text-yellow-500 transition-colors group">
        <div className="w-12 h-12 rounded-2xl group-hover:bg-yellow-500/10 flex items-center justify-center transition-all">
          <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 0" }}>emoji_events</span>
        </div>
        <span className="text-[10px] font-bold group-hover:text-yellow-500">Phần thưởng</span>
      </button>
    </nav>
  );
};

export default BottomNav;
