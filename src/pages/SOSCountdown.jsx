import React, { useState, useEffect } from 'react';

const SOSCountdown = () => {
  const [countdown, setCountdown] = useState(5);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      clearInterval(interval);
      // Logic to trigger actual SOS would go here
      console.log('SOS Triggered!');
    }
    return () => clearInterval(interval);
  }, [isActive, countdown]);

  const handleCancel = () => {
    setIsActive(false);
    setCountdown(5); // Reset
    // Navigate back or show cancelled state
    console.log('SOS Cancelled');
  };

  const handleSendNow = () => {
    setCountdown(0);
    console.log('SOS Sent Immediately');
  };

  return (
    <div className="bg-red-50 dark:bg-zinc-900 min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Pulse Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`w-96 h-96 rounded-full bg-red-500 opacity-20 animate-ping ${countdown === 0 ? 'hidden' : ''}`}></div>
        <div className={`w-[500px] h-[500px] rounded-full bg-red-500 opacity-10 animate-ping delay-75 ${countdown === 0 ? 'hidden' : ''}`}></div>
      </div>

      <div className="z-10 text-center space-y-8 w-full max-w-md">

        {/* Header Text */}
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Đang gửi SOS
          </h1>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">
            Cảnh báo sẽ được gửi tới người thân trong
          </p>
        </div>

        {/* Countdown Circle */}
        <div className="relative flex items-center justify-center">
             {/* Progress Ring SVG (Static for MVP, could be animated based on time) */}
            <svg className="transform -rotate-90 w-64 h-64">
                <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-red-200 dark:text-zinc-700" />
                <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="8" fill="transparent"
                    strokeDasharray={2 * Math.PI * 120}
                    strokeDashoffset={2 * Math.PI * 120 * ((5 - countdown) / 5)}
                    className="text-red-600 transition-all duration-1000 ease-linear" />
            </svg>

            {/* Number */}
            <span className="absolute text-8xl font-black text-red-600 dark:text-red-500 tabular-nums">
                {countdown}
            </span>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4 w-full">
            <button
                onClick={handleCancel}
                className="w-full py-4 rounded-xl bg-white dark:bg-zinc-800 border-2 border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white font-bold text-xl shadow-sm hover:bg-slate-50 dark:hover:bg-zinc-700 active:scale-95 transition-all"
            >
                Hủy bỏ
            </button>

            <button
                onClick={handleSendNow}
                className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xl shadow-lg shadow-red-200 dark:shadow-none active:scale-95 transition-all"
            >
                Gửi ngay lập tức
            </button>
        </div>

      </div>
    </div>
  );
};

export default SOSCountdown;
