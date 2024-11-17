/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],  
	theme: {
		extend: {
		  animation: {
			'spin-slow': 'spin 2s linear infinite',
		  },
		  keyframes: {
			spin: {
			  '0%': { transform: 'rotate(0deg)' },
			  '100%': { transform: 'rotate(360deg)' },
			},
		  },
		},
	  },
  plugins: [require("tailwindcss-animate")],
}

