import { Navigate, Outlet } from 'react-router-dom';
//=================================================
import { useValidName } from '../hook';

const PrivateRoute = () => {
	const isValidName = useValidName();

	return isValidName ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
