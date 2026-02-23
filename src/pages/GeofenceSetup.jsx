import React, { useState, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Circle, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon missing in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationMarker = ({ position, setPosition }) => {
    const map = useMapEvents({
        click(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position}></Marker>
    );
};

const GeofenceSetup = () => {
    const [position, setPosition] = useState({ lat: 10.8231, lng: 106.6297 }); // Default HCMC
    const [radius, setRadius] = useState(500); // meters
    const [name, setName] = useState('');
    const [alertType, setAlertType] = useState('entry_exit'); // entry, exit, entry_exit

    const handleSave = () => {
        const geofenceData = {
            name,
            center: position,
            radius,
            alertType
        };
        console.log('Saving Geofence:', geofenceData);
        alert('Đã lưu Vùng an toàn: ' + name);
        // Navigate back or clear form
    };

    return (
        <div className="flex flex-col h-screen bg-white dark:bg-slate-900">
             {/* Header */}
             <header className="flex-none bg-white dark:bg-slate-800 shadow-sm z-10 p-4 flex items-center gap-4">
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h1 className="text-xl font-bold text-slate-800 dark:text-white">Thêm Vùng an toàn</h1>
            </header>

            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Map Area */}
                <div className="flex-1 relative z-0">
                    <MapContainer center={position} zoom={14} scrollWheelZoom={true} className="h-full w-full">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationMarker position={position} setPosition={setPosition} />
                        {position && (
                            <Circle
                                center={position}
                                radius={radius}
                                pathOptions={{ color: 'purple', fillColor: 'purple', fillOpacity: 0.2 }}
                            />
                        )}
                    </MapContainer>
                     <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur px-4 py-2 rounded-lg shadow-md z-[400] text-xs font-medium text-slate-600 dark:text-slate-300 max-w-[200px] text-center">
                        Chạm vào bản đồ để đặt tâm vùng an toàn
                    </div>
                </div>

                {/* Controls Sidebar */}
                <div className="w-full md:w-96 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-6 overflow-y-auto shadow-xl z-10">

                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Tên vùng an toàn</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ví dụ: Nhà, Trường học..."
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                             <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Bán kính</label>
                             <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">{radius}m</span>
                        </div>
                        <input
                            type="range"
                            min="100"
                            max="2000"
                            step="50"
                            value={radius}
                            onChange={(e) => setRadius(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                        />
                        <div className="flex justify-between text-xs text-slate-400 mt-1">
                            <span>100m</span>
                            <span>2km</span>
                        </div>
                    </div>

                    <div>
                         <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Cảnh báo khi</label>
                         <div className="grid grid-cols-3 gap-2">
                             <button
                                onClick={() => setAlertType('entry')}
                                className={`py-2 px-1 rounded-lg text-sm font-medium border ${alertType === 'entry' ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 text-purple-700 dark:text-purple-300' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                             >
                                Vào vùng
                             </button>
                             <button
                                onClick={() => setAlertType('exit')}
                                className={`py-2 px-1 rounded-lg text-sm font-medium border ${alertType === 'exit' ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 text-purple-700 dark:text-purple-300' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                             >
                                Ra khỏi vùng
                             </button>
                             <button
                                onClick={() => setAlertType('entry_exit')}
                                className={`py-2 px-1 rounded-lg text-sm font-medium border ${alertType === 'entry_exit' ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 text-purple-700 dark:text-purple-300' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                             >
                                Cả hai
                             </button>
                         </div>
                    </div>

                    <div className="mt-auto pt-6">
                        <button
                            onClick={handleSave}
                            disabled={!name}
                            className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg shadow-lg shadow-purple-200 dark:shadow-none transition-all active:scale-[0.98]"
                        >
                            Lưu Vùng an toàn
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GeofenceSetup;
