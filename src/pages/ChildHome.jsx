import React, { useState } from 'react';
import Header from '../components/Header';
import ShieldButton from '../components/ShieldButton';
import MissionList from '../components/MissionList';
import BottomNav from '../components/BottomNav';

const ChildHome = () => {
  return (
    <div className="min-h-screen bg-child-bg-light dark:bg-child-bg-dark font-display antialiased flex flex-col transition-colors duration-300">
      <Header />
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center px-6 relative overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-10 left-[-50px] w-64 h-64 bg-child-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-40 right-[-50px] w-72 h-72 bg-child-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

        <ShieldButton />
        <MissionList />
      </main>
      <BottomNav />
    </div>
  );
};

export default ChildHome;
