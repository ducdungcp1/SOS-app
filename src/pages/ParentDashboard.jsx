import React from 'react';
import { Link } from 'react-router-dom';

const ParentDashboard = () => {
  const familyMembers = [
    {
      id: 1,
      name: "Bé Ben",
      type: "child",
      status: "safe", // safe, warning, danger
      location: "Trường Tiểu học",
      lastUpdate: "2 phút trước",
      battery: 84,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS5SfUPI9gaA7zOeGqITU3r9DKUspqV33YV7hevkQjqVt7L1JGpr29eug9WtgN2aE26uBOb-w_6E9JfM1ecPjWc2mZZGumsTC01pfaBvf4M5IHGkXjXkSRcOI30-zVu11xo96kNJS9Z4sYxz1whTp4NcSvQco2GEV41AW1RNJt84E_5XmMI8eIE3vvYR-NXceqeFBx3oMTwJ-rzpyT0cfZEiD5to9aGFj1iraKGA_X2N6uQWNajauYVsMbVkQbWKpm7yhIRjTW-yQ"
    },
    {
      id: 2,
      name: "Bà Nội",
      type: "senior",
      status: "warning",
      location: "Công viên",
      lastUpdate: "15 phút trước",
      battery: 20,
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen font-display antialiased pb-20">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm px-6 pt-12 pb-4 sticky top-0 z-10">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Tổng quan</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Chào mừng trở lại, Bố!</p>
          </div>
          <button className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">notifications</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-6 space-y-6">

        {/* Quick Stats / Alerts */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/50 rounded-2xl p-4 flex items-start gap-3">
           <span className="material-symbols-outlined text-orange-500 mt-1">warning</span>
           <div>
             <h3 className="font-bold text-orange-800 dark:text-orange-200 text-sm">Cảnh báo pin yếu</h3>
             <p className="text-xs text-orange-600 dark:text-orange-300 mt-1">Pin điện thoại của Bà Nội dưới 20%. Hãy nhắc nhở sạc pin.</p>
           </div>
        </div>

        {/* Family Members List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
             <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200">Thành viên gia đình</h2>
             <button className="text-sm font-semibold text-teal-600 dark:text-teal-400">+ Thêm mới</button>
          </div>

          {familyMembers.map((member) => (
            <Link to={`/map?id=${member.id}`} key={member.id} className="block group">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 transition-all active:scale-[0.98]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img src={member.avatar} alt={member.name} className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 dark:border-slate-600" />
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center ${
                        member.status === 'safe' ? 'bg-green-500' : member.status === 'warning' ? 'bg-orange-500' : 'bg-red-500'
                      }`}>
                        <span className="material-symbols-outlined text-white text-[10px] font-bold">
                          {member.status === 'safe' ? 'check' : member.status === 'warning' ? 'priority_high' : 'close'}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">{member.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        <span>{member.location}</span>
                        <span className="mx-1">•</span>
                        <span>{member.lastUpdate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
                      member.battery > 20 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      <span className="material-symbols-outlined text-[14px] rotate-90">battery_full</span>
                      {member.battery}%
                    </div>
                    <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions Grid */}
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Tiện ích</h2>
          <div className="grid grid-cols-2 gap-4">
             <Link to="/map" className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 border border-teal-100 dark:border-teal-800 active:bg-teal-100 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-teal-100 dark:bg-teal-800 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-300">
                  <span className="material-symbols-outlined">map</span>
                </div>
                <span className="font-semibold text-teal-900 dark:text-teal-100 text-sm">Bản đồ</span>
             </Link>
             <Link to="/geofence" className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 border border-purple-100 dark:border-purple-800 active:bg-purple-100 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300">
                  <span className="material-symbols-outlined">zone_person</span>
                </div>
                <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm">Vùng an toàn</span>
             </Link>
             <Link to="/map" className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 border border-blue-100 dark:border-blue-800 active:bg-blue-100 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300">
                  <span className="material-symbols-outlined">history</span>
                </div>
                <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Lịch sử</span>
             </Link>
             <Link to="/parent" className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 active:bg-slate-100 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined">settings</span>
                </div>
                <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Cài đặt</span>
             </Link>
          </div>
        </div>
      </main>

      {/* Protector Bottom Nav - Different from Child/Senior */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 px-6 py-3 flex justify-around items-center z-50">
        <Link to="/parent" className="flex flex-col items-center gap-1 text-teal-600 dark:text-teal-400">
           <span className="material-symbols-outlined filled">home</span>
           <span className="text-[10px] font-bold">Trang chủ</span>
        </Link>
        <Link to="/map" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-teal-600 transition-colors">
           <span className="material-symbols-outlined">map</span>
           <span className="text-[10px] font-bold">Bản đồ</span>
        </Link>
        <button className="relative flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-teal-600 transition-colors">
           <span className="material-symbols-outlined">notifications</span>
           <span className="text-[10px] font-bold">Thông báo</span>
           <span className="absolute top-0 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
         <button className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-teal-600 transition-colors">
           <span className="material-symbols-outlined">person</span>
           <span className="text-[10px] font-bold">Tài khoản</span>
        </button>
      </nav>
    </div>
  );
};

export default ParentDashboard;
