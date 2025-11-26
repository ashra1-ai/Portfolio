/** @type {import('tailwindcss').Config} */

// Helper to flatten nested color objects (so you can use bg-accent-teal/30)
function flattenColors(obj, prefix = '') {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === 'object') {
      Object.assign(acc, flattenColors(value, `${prefix}${key}-`));
    } else {
      acc[`${prefix}${key}`] = value;
    }
    return acc;
  }, {});
}

const colorGroups = {
  dark: {
    bg: '#1a1a1a',        // Matte grey background
    surface: '#242424',    // Matte grey surface
    'surface-1dp': '#2a2a2a',  // Matte grey elevated
    'surface-6dp': '#2f2f2f',  // Matte grey more elevated
    'surface-8dp': '#333333',  // Matte grey even more elevated
    'surface-12dp': '#383838', // Matte grey highest
    border: '#2a2a2a',
  },
  accent: {
    primary: '#3b82f6',   // Blue (primary)
    secondary: '#10b981',  // Green (secondary)
    tertiary: '#f59e0b',  // Amber (tertiary)
    quaternary: '#8b5cf6', // Purple (quaternary)
  },
  neutral: {
    text: '#e5e5e5',      // Whitish grey text
    'text-medium': 'rgba(229,229,229,0.80)', // Medium emphasis
    'text-disabled': 'rgba(229,229,229,0.40)', // Disabled
    subtext: 'rgba(229,229,229,0.70)',
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        ...colorGroups,
        ...flattenColors(colorGroups), // auto generate accent-teal, accent-cyan, etc.
      },

      fontFamily: {
        sans: ['Roboto', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Roboto', 'Inter', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        // Material Design elevation shadows
        'elevation-1dp': '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        'elevation-6dp': '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        'elevation-8dp': '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
        'elevation-12dp': '0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)',
        'accent-glow': '0 0 20px rgba(229,229,229,0.1), 0 0 40px rgba(229,229,229,0.05)',
        'matte': '0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },

      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'rotate-in': 'rotateIn 0.3s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.8', transform: 'scale(1.05)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
        },
        shimmer: {
          '0%': { 'background-position': '-1000px 0' },
          '100%': { 'background-position': '1000px 0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'animated-gradient': 'linear-gradient(-45deg, #e5e5e5, #d4d4d4, #a3a3a3, #e5e5e5)',
      },
    },
  },
  plugins: [],
};
