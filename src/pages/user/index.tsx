import React, { ReactElement, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//======================================================
import { getDataUser } from '../../store/thunks/user';
import { useAppDispatch, useAppSelector, useValidName } from '../../utils/hook';
import { showError } from '../../utils/errors';
import { IUsernameData } from '../../common/types/home';

const User: React.FC = (): ReactElement => {
	const { username } = useParams();
	const { userData } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const validName = useValidName();
	const navigate = useNavigate();

	useEffect((): void => {
		const fetchUserData = async (): Promise<void> => {
			try {
				await dispatch(getDataUser({ username } as IUsernameData));
			} catch (e) {
				showError(e);
			}
		};
		fetchUserData();
	}, [username, dispatch]);

	useEffect((): void => {
		if (!validName) navigate('/');
	}, [validName, navigate]);

	return <div>{userData?.login}</div>;
};

export default User;
