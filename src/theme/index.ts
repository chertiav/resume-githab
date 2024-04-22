import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material';

export const tokens = (mode: string) => ({
	...(mode === 'dark'
		? {
				primary: {
					DEFAULT: '#000000',
					600: '#232323',
				},
				secondary: {
					DEFAULT: '#7C7C7C',
				},
				black: {
					DEFAULT: '#000000',
					500: '#0F0E0E',
				},
				white: {
					DEFAULT: '#FFFFFF',
					100: '#F7F7F7',
				},
				gray: {
					DEFAULT: '#3C3C3C',
				},
				red: {
					DEFAULT: '#9c042a',
				},
				accentMain: '#0F0E0E',
				borderColor: '#3C3C3C',
			}
		: {
				white: {
					DEFAULT: '#FFFFFF',
					100: '#F7F7F7',
					200: '#D1D1D1',
				},
				primary: {
					DEFAULT: '#FFFFFF',
					600: '#F7F7F7',
				},
				secondary: {
					DEFAULT: '#7C7C7C',
				},
				black: {
					DEFAULT: '#000000',
					500: '#000000',
				},
				gray: {
					DEFAULT: '#3C3C3C',
				},
				red: {
					DEFAULT: '#9c042a',
				},
				accentMain: '#F7F7F7',
				borderColor: '#D1D1D1',
			}),
});

export const themeSettings: any = (mode: string) => {
	const colors = tokens(mode);
	return {
		palette: {
			mode: mode,
			...(mode === 'dark'
				? {
						primary: {
							main: colors.primary.DEFAULT,
						},
						secondary: {
							main: colors.secondary.DEFAULT,
						},
						neutral: {
							dark: colors.black['500'],
							light: colors.white['100'],
						},
					}
				: {
						primary: {
							main: colors.primary.DEFAULT,
						},
						secondary: {
							main: colors.gray.DEFAULT,
						},
						neutral: {
							dark: colors.black['500'],
							light: colors.white['100'],
						},
					}),
		},
		typography: {
			fontFamily: ['Poppins', 'sans-serif'].join(','),
			fontSize: 14,
			fontWeight: 'bold',
			h1: {
				fontFamily: ['Poppins', 'sans-serif'].join(','),
				fontSize: 28,
				fontWeight: 'bold',
			},
			h2: {
				fontFamily: ['Poppins', 'sans-serif'].join(','),
				fontSize: 20,
				fontWeight: 'bold',
			},
			h3: {
				fontFamily: ['Poppins', 'sans-serif'].join(','),
				fontSize: 18,
				fontWeight: 'bold',
			},
			h4: {
				fontFamily: ['Poppins', 'sans-serif'].join(','),
				fontSize: 14,
				fontWeight: 500,
			},
		},
	};
};

export const ColorModeContext: any = createContext({
	toggleColorMode: () => {},
});

export const useMode = () => {
	const [mode, setMode] = useState('dark');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
		}),
		[],
	);
	const theme: any = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return [theme, colorMode];
};
