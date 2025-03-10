/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        'sigma-green': '#00ff88',
        'cyber-blue': '#00f7ff',
        'neon-pink': '#ff006e',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'neon-pulse': 'neonPulse 1.5s ease-in-out infinite',
        'hologram': 'hologram 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glitch': 'glitch 0.5s ease-in-out',
      },
      keyframes: {
        neonPulse: {
          '0%, 100%': { textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #00ff88, 0 0 82px #00ff88, 0 0 92px #00ff88' },
          '50%': { textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 13px #fff, 0 0 25px #00ff88, 0 0 50px #00ff88, 0 0 60px #00ff88' },
        },
        hologram: {
          '0%': { borderImage: 'linear-gradient(45deg, #00ff88, #00f7ff) 1' },
          '50%': { borderImage: 'linear-gradient(180deg, #00f7ff, #ff006e) 1' },
          '100%': { borderImage: 'linear-gradient(315deg, #ff006e, #00ff88) 1' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
};