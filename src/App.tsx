import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutComponent from './components/layout';
import User from './pages/user';
import Home from './pages/home';

function App(): React.JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutComponent />}>
					<Route path="/" element={<Home />} />
					<Route path=":userName" element={<User />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
