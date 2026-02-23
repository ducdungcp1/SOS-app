/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Child Mode
        "child-primary": "#ff6b9c",
        "child-secondary": "#4ECDC4",
        "child-bg-light": "#f0fdfc",
        "child-bg-dark": "#1a1625",
        "child-card-light": "#ffffff",
        "child-card-dark": "#2d2438",
        "child-text-main": "#1d0c12",
        "child-text-muted": "#64748b",

        // Senior Mode
        "senior-primary": "#f20d0d",
        "senior-bg-light": "#f8f5f5",
        "senior-bg-dark": "#221010",

        // Countdown
        "count-primary": "#c11010",
        "count-bg-light": "#f8f6f6",
        "count-bg-dark": "#221010",
        "count-warning": "#FFF9E6",
        "count-alert-light": "#FFEBEE",
        "count-alert-dark": "#B71C1C",

        // Parent Dashboard
        "parent-primary": "#2b609c",
        "parent-safe": "#4A9E5E",
        "parent-bg-light": "#f6f7f8",
        "parent-bg-dark": "#13191f",

        // Safe Zone
        "safe-primary": "#13ecc8",
        "safe-bg-light": "#f6f8f8",
        "safe-bg-dark": "#11221f",
        "safe-card-dark": "#1a2c29",
        "safe-text-sec": "#92c9c0",

        // Geofence
        "geo-primary": "#4ba060",
        "geo-bg-light": "#f6f7f7",
        "geo-bg-dark": "#151d17",

        // Emergency
        "emer-primary": "#f4f425",
        "emer-bg-light": "#f8f8f5",
        "emer-bg-dark": "#222210",
        "emer-danger": "#DC2626",
        "emer-danger-dark": "#991B1B",

        // Device/History/Listen/Notif (Shared Teal Theme)
        "teal-primary": "#13ecc8",
        "teal-primary-dark": "#0fb398", // Merged
        "teal-bg-light": "#f6f8f8",
        "teal-bg-dark": "#10221f",
        "teal-surface-light": "#ffffff",
        "teal-surface-dark": "#1a2c29",
        "teal-text-main-light": "#0d1b19",
        "teal-text-main-dark": "#e0f2f1", // Merged
        "teal-text-sec-light": "#4c9a8d",
        "teal-text-sec-dark": "#8bcbc1",
        "teal-border-light": "#e5e7eb",
        "teal-border-dark": "#2d4440",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"],
        "lexend": ["Lexend", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
        "public": ["Public Sans", "sans-serif"],
        "manrope": ["Manrope", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "1.5rem",
        "xl": "2.5rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "full": "9999px"
      },
      boxShadow: {
        'bubbly': '0 8px 0px 0px rgba(0,0,0,0.1)',
        'bubbly-hover': '0 4px 0px 0px rgba(0,0,0,0.1)',
        'glow': '0 0 20px rgba(255, 107, 156, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'sound-wave': 'sound-wave 1.2s ease-in-out infinite',
      },
      keyframes: {
        'sound-wave': {
            '0%, 100%': { height: '20%' },
            '50%': { height: '100%' },
        }
      }
    },
  },
  plugins: [],
}
