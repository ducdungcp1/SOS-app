import React, { useState } from 'react';

const MissionList = () => {
  const [missions, setMissions] = useState([
    {
      id: 1,
      title: "Đến trường",
      subtitle: "Đã nhận +50 sao",
      icon: "school",
      color: "blue",
      completed: true,
      checkable: false // Already completed and rewarded
    },
    {
      id: 2,
      title: "Ở trong vùng an toàn",
      subtitle: "Tiếp tục phát huy!",
      icon: "security",
      color: "green",
      completed: false,
      checkable: true
    },
    {
      id: 3,
      title: "Pin > 20%",
      subtitle: "Hiện tại: 84%",
      icon: "bolt",
      color: "yellow",
      completed: false,
      checkable: true
    }
  ]);

  const toggleMission = (id) => {
    setMissions(missions.map(mission =>
      mission.id === id && mission.checkable
        ? { ...mission, completed: !mission.completed }
        : mission
    ));
  };

  const getIconBgColor = (color) => {
    switch (color) {
      case 'blue': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-500';
      case 'green': return 'bg-green-100 dark:bg-green-900/30 text-green-600';
      case 'yellow': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600';
      default: return 'bg-gray-100 text-gray-500';
    }
  };

  return (
    <div className="w-full mt-4 flex-1">
      <div className="flex items-center justify-between mb-4 px-2">
        <h3 className="text-lg font-bold text-child-text-main dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-child-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
          Nhiệm vụ hôm nay
        </h3>
        <span className="text-xs font-bold text-child-primary bg-child-primary/10 px-3 py-1 rounded-full">Còn 3</span>
      </div>
      {/* Missions List */}
      <div className="space-y-3 pb-32">
        {missions.map((mission) => (
          mission.checkable ? (
            <label key={mission.id} className="group bg-white dark:bg-child-card-dark rounded-xl p-4 shadow-sm border-b-4 border-gray-100 dark:border-gray-800 flex items-center justify-between cursor-pointer transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${getIconBgColor(mission.color)}`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{mission.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-child-text-main dark:text-white text-base">{mission.title}</h4>
                  <p className="text-xs text-child-text-muted dark:text-gray-400 font-medium">{mission.subtitle}</p>
                </div>
              </div>
              <div className="relative">
                <input
                  className="peer appearance-none w-8 h-8 border-2 border-gray-200 dark:border-gray-600 rounded-full checked:bg-child-secondary checked:border-child-secondary transition-colors cursor-pointer"
                  type="checkbox"
                  checked={mission.completed}
                  onChange={() => toggleMission(mission.id)}
                />
                <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity text-lg font-bold">check</span>
              </div>
            </label>
          ) : (
            <div key={mission.id} className="group bg-white dark:bg-child-card-dark rounded-xl p-4 shadow-sm border-b-4 border-gray-100 dark:border-gray-800 flex items-center justify-between transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${getIconBgColor(mission.color)}`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{mission.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-child-text-main dark:text-white text-base">{mission.title}</h4>
                  <p className="text-xs text-child-text-muted dark:text-gray-400 font-medium">{mission.subtitle}</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-child-secondary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-white text-lg font-bold">check</span>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default MissionList;
