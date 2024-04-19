import React from 'react';
import { useForm } from 'react-hook-form';
//========================
import { useStyles } from './styles';
import { Box } from '@mui/material';
import UserName from '../../components/username';
import { IUser } from '../../common/types/home';

const Home: React.FC = (): React.JSX.Element => {
	const { classes } = useStyles();
	const { register, handleSubmit } = useForm();
	const loading = false;

	const handleSubmitForm = async (data: any) => {
		try {
			const response: Response = await fetch(
				`https://api.github.com/users/${data.username}`,
			);
			const userData: IUser = await response.json();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className={classes.root}>
			<form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
				<Box className={classes.container}>
					<UserName register={register} loading={loading} />
				</Box>
			</form>
		</div>
	);
};

export default Home;
