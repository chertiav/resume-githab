import React, { useRef } from 'react';
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
import { useReactToPrint } from 'react-to-print';

function App(): React.JSX.Element {
	const [theme, colorMode] = useMode();
	const componentRef = useRef(null);
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

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
					<Route element={<LayoutComponent handlePrint={handlePrint} />}>
						<Route element={<PrivateRoute />}>
							<Route
								path=":username"
								element={<User componentRef={componentRef} />}
							/>
						</Route>
						<Route path="/" element={<Home />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
