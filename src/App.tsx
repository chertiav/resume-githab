import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//===============================================
import LayoutComponent from './components/layout';
import User from './pages/user';
import Home from './pages/home';
import PrivateRoute from './utils/router/privateRoute';
import { ColorModeContext, useMode } from './theme';

function App(): React.JSX.Element {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<ToastContainer
					position={'bottom-right'}
					hideProgressBar={false}
					closeOnClick
					rtl={false}
					limit={1}
					theme={theme.palette.mode === 'dark' ? 'light' : 'dark'}
				/>
				<CssBaseline />
				<Routes>
					<Route element={<LayoutComponent />}>
						<Route element={<PrivateRoute />}>
							<Route path=":username" element={<User />} />
						</Route>
						<Route path="/" element={<Home />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
