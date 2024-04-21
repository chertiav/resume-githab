import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//===============================================
import LayoutComponent from './components/layout';
import User from './pages/user';
import Home from './pages/home';
import PrivateRoute from './utils/router/privateRoute';

function App(): React.JSX.Element {
	return (
		<>
			<ToastContainer
				position={'bottom-right'}
				hideProgressBar={false}
				closeOnClick
				rtl={false}
				limit={1}
			/>
			<Routes>
				<Route element={<LayoutComponent />}>
					<Route element={<PrivateRoute />}>
						<Route path=":username" element={<User />} />
					</Route>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
