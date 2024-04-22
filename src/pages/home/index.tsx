import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
//========================
import { useStyles } from './styles';
import UserNameComponent from '../../components/username';
import { UsernameSchema } from '../../utils/yup';
import { showError } from '../../utils/errors';
import { useAppDispatch, useAppSelector, useTitle } from '../../utils/hook';
import { getDataUser } from '../../store/thunks/user';
import ThemeSwitcherComponent from '../../components/theme-switcer';
import { NAME_APP } from '../../constants';

const Home: React.FC = (): ReactElement => {
	const { classes } = useStyles();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(UsernameSchema),
	});
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.user.isLoading);

	const handleSubmitForm = async (data: any) => {
		try {
			await dispatch(getDataUser(data));
			if (!loading) {
				navigate(data.username);
			}
		} catch (e) {
			showError(e);
		}
	};
	useTitle(NAME_APP);

	return (
		<div className={classes.root}>
			<form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
				<Box className={classes.container}>
					<Box className={classes.header}>
						<ThemeSwitcherComponent />
					</Box>
					<UserNameComponent
						register={register}
						errors={errors}
						loading={loading}
					/>
				</Box>
			</form>
		</div>
	);
};

export default Home;
