import React, { ReactElement, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//======================================================
import { getDataUser } from '../../store/thunks/user';
import {
	useAppDispatch,
	useAppSelector,
	useTitle,
	useValidName,
} from '../../utils/hook';
import { showError } from '../../utils/errors';
import { IUsernameData } from '../../common/types/home';
import { NAME_APP } from '../../constants';
import { IUser } from '../../common/types/user';
import { getUsersRepositories } from '../../store/thunks/repositories';

const User: React.FC = (): ReactElement | null => {
	const { username } = useParams();
	const { userData, isLoading }: { userData: IUser; isLoading: boolean } =
		useAppSelector((state) => state.user);
	const {
		repos,
		languages,
		isLoadingRepos,
	}: {
		repos: any[];
		languages: any[];
		isLoadingRepos: boolean;
	} = useAppSelector((state) => state.repositories);
	const dispatch = useAppDispatch();
	const validName = useValidName();
	const navigate = useNavigate();

	useEffect((): void => {
		const fetchUserData = async (): Promise<void> => {
			try {
				await dispatch(getDataUser({ username } as IUsernameData));
				if (userData?.repos_url) {
					await dispatch(getUsersRepositories(userData.repos_url));
				}
			} catch (e) {
				showError(e);
			}
		};
		fetchUserData();
	}, [username, dispatch, userData?.repos_url]);

	useEffect((): void => {
		if (!validName) navigate('/');
	}, [validName, navigate]);

	useTitle(NAME_APP + `${userData?.login ? `: ${userData?.login}` : ''}`);

	return validName && !isLoading ? (
		<>
			<div>name: {userData?.name}</div>
			<div>avatar_url: {userData?.avatar_url}</div>
			<div>public_repos: {userData?.public_repos}</div>
			<div>created_at: {userData?.created_at}</div>
		</>
	) : (
		<>
			<div>Loading...</div>
		</>
	);
};

export default User;
