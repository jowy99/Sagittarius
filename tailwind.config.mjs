/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
import typography from 'tailwindcss/typography';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
                "neutral": {
                    "50": "#d3d4d6",
                    "100": "#b9bbbd",
                    "200": "#9fa1a3",
                    "300": "#85878a",
                    "400": "#6b6d70",
                    "500": "#484a4f", // Base
                    "600": "#3a3b3e",
                    "700": "#2d2d30",
                    "800": "#1f2022",
                    "900": "#121314"
                },
                "soft": {
                    "50": "#f4f5f4",
                    "100": "#e9ebe9",
                    "200": "#dee1de",
                    "300": "#d3d6d3",
                    "400": "#c7ccc8",
                    "500": "#d7dcd8", // Base
                    "600": "#a7aba6",
                    "700": "#787c79",
                    "800": "#4a4e4c",
                    "900": "#1c1f1d"
                },
                "light": {
                    "50": "#ffffff",
                    "100": "#fafafa",
                    "200": "#f5f5f5", // Base
                    "300": "#e3e3e3",
                    "400": "#d1d1d1",
                    "500": "#c0c0c0",
                    "600": "#9f9f9f",
                    "700": "#7e7e7e",
                    "800": "#5e5e5e",
                    "900": "#3d3d3d"
                },
                "warm": {
                    "50": "#f5f3e6",
                    "100": "#ece8d1",
                    "200": "#e3ddbc",
                    "300": "#dad2a6",
                    "400": "#d1c791",
                    "500": "#c3ba69", // Base
                    "600": "#a39a55",
                    "700": "#827a41",
                    "800": "#62592d",
                    "900": "#413919"
                },
                corefeatures: '#c2e0c6',
                inprogress: '#fbca04',
                done: '#2cbe4e',
                unfinished: '#e11d21',
                rework: '#6f42c1',
                laravel: '#F05340',
            },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
