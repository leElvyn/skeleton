const path = require('path');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const config = {
	plugins: [
		require('postcss-import'),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(path.resolve(__dirname, './tailwind.config.cjs')),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};

module.exports = config;
