/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ['dracula', 'valentine']
	},
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
