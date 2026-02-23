import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon missing in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapMonitor = () => {
    // Mock Data
    const center = [10.8231, 106.6297]; // Ho Chi Minh City
    const familyMembers = [
        {
            id: 1,
            name: "Bé Ben",
            position: [10.8231, 106.6297],
            type: "child",
            status: "safe",
            battery: 84,
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS5SfUPI9gaA7zOeGqITU3r9DKUspqV33YV7hevkQjqVt7L1JGpr29eug9WtgN2aE26uBOb-w_6E9JfM1ecPjWc2mZZGumsTC01pfaBvf4M5IHGkXjXkSRcOI30-zVu11xo96kNJS9Z4sYxz1whTp4NcSvQco2GEV41AW1RNJt84E_5XmMI8eIE3vvYR-NXceqeFBx3oMTwJ-rzpyT0cfZEiD5to9aGFj1iraKGA_X2N6uQWNajauYVsMbVkQbWKpm7yhIRjTW-yQ"
        },
        {
            id: 2,
            name: "Bà Nội",
            position: [10.8300, 106.6350],
            type: "senior",
            status: "warning",
            battery: 20,
            avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
        }
    ];

    const safeZones = [
        {
            id: 1,
            center: [10.8231, 106.6297],
            radius: 500, // meters
            color: 'green'
        }
    ];

    const [selectedMember, setSelectedMember] = useState(null);

    // Custom Icon Generator
    const createCustomIcon = (url) => new L.Icon({
        iconUrl: url,
        iconSize: [40, 40],
        className: 'rounded-full border-2 border-white shadow-lg',
    });

    return (
        <div className="relative h-screen w-screen flex flex-col">
            {/* Header Overlay */}
            <div className="absolute top-0 left-0 right-0 z-[1000] p-4 flex items-center justify-between pointer-events-none">
                <button className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg pointer-events-auto text-slate-700 dark:text-slate-200">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg pointer-events-auto">
                    <span className="font-bold text-slate-800 dark:text-white">Bản đồ Giám sát</span>
                </div>
                <button className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg pointer-events-auto text-slate-700 dark:text-slate-200">
                     <span className="material-symbols-outlined">settings</span>
                </button>
            </div>

            {/* Map */}
            <MapContainer center={center} zoom={14} scrollWheelZoom={true} className="flex-1 z-0">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Safe Zones */}
                {safeZones.map(zone => (
                    <Circle
                        key={zone.id}
                        center={zone.center}
                        radius={zone.radius}
                        pathOptions={{ color: zone.color, fillColor: zone.color, fillOpacity: 0.1 }}
                    />
                ))}

                {/* Markers */}
                {familyMembers.map(member => (
                    <Marker
                        key={member.id}
                        position={member.position}
                        eventHandlers={{
                            click: () => {
                                setSelectedMember(member);
                            },
                        }}
                    >
                         <Popup>
                            <div className="text-center">
                                <h3 className="font-bold">{member.name}</h3>
                                <p>Pin: {member.battery}%</p>
                            </div>
                         </Popup>
                    </Marker>
                ))}
            </MapContainer>

            {/* Bottom Sheet Detail */}
            {selectedMember && (
                <div className="absolute bottom-0 left-0 right-0 z-[1000] bg-white dark:bg-slate-900 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] p-6 transition-transform duration-300 transform translate-y-0">
                    <div className="w-12 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-4"></div>
                    <div className="flex items-start gap-4">
                        <img src={selectedMember.avatar} alt={selectedMember.name} className="w-16 h-16 rounded-full object-cover border-4 border-slate-50 dark:border-slate-800 shadow-sm" />
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{selectedMember.name}</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs text-green-500">verified_user</span>
                                        Đang trong vùng an toàn
                                    </p>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                                    selectedMember.battery > 20 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}>
                                    <span className="material-symbols-outlined text-[14px]">battery_full</span>
                                    {selectedMember.battery}%
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-bold transition-colors">
                                    <span className="material-symbols-outlined">call</span>
                                    Gọi điện
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 py-3 rounded-xl font-bold transition-colors">
                                    <span className="material-symbols-outlined">history</span>
                                    Lịch sử
                                </button>
                            </div>
                        </div>
                    </div>
                     <button
                        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                        onClick={() => setSelectedMember(null)}
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default MapMonitor;
