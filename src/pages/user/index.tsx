import React, { ReactElement, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
//======================================================
import { getDataUser } from '../../store/thunks/user';
import { getUsersRepositories } from '../../store/thunks/repositories';
import {
	useAppDispatch,
	useAppSelector,
	useTitle,
	useValidName,
} from '../../utils/hook';
import { IUsernameData } from '../../common/types/home';
import { ILanguage, IRepository, IUser } from '../../common/types/user';
import { NAME_APP } from '../../constants';
import { showError } from '../../utils/errors';
import { useStyle } from './styles';
import PercentLanguageComponent from '../../components/percent-langueges';
import ResumeHeaderComponent from '../../components/resume-header';
import ListRepoComponent from '../../components/list-repo';

const User: React.FC<any> = (props: any): ReactElement | null => {
	const { componentRef } = props;
	const { username } = useParams();
	const { userData, isLoading }: { userData: IUser; isLoading: boolean } =
		useAppSelector((state) => state.user);
	const {
		repos,
		languages,
		isLoadingRepos,
	}: {
		repos: IRepository[];
		languages: ILanguage[];
		isLoadingRepos: boolean;
	} = useAppSelector((state) => state.repositories);
	const dispatch = useAppDispatch();
	const validName = useValidName();
	const navigate = useNavigate();
	const { classes } = useStyle();

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
		<Grid className={classes.root}>
			<Grid
				className={classes.resumeBlock}
				container
				spacing={2}
				ref={componentRef}
				padding={1}
			>
				<Grid item xs={12} md={3}>
					<img
						className={classes.photoUrl}
						src={userData.avatar_url}
						alt={'avatar_url'}
					/>
				</Grid>
				<Grid item xs={12} md={9}>
					<ResumeHeaderComponent userData={userData} />
				</Grid>
				<Grid item xs={12} md={3}>
					<PercentLanguageComponent languages={languages} />
				</Grid>
				<Grid item xs={12} md={9}>
					<ListRepoComponent repos={repos} />
				</Grid>
			</Grid>
		</Grid>
	) : (
		<>
			<div>Loading...</div>
		</>
	);
};

export default User;
