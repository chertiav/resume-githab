import React, { ReactElement } from 'react';
import { TextField, Typography } from '@mui/material';
//========================================
import { useStyles } from './styles';
import { IPropsUserName } from '../../common/types/home';
import AppLoadingButton from '../loading-button';

const UserNameComponent: React.FC<IPropsUserName> = (
	props: IPropsUserName,
): ReactElement => {
	const { register, errors, loading } = props;
	const { classes } = useStyles();

	return (
		<>
			<Typography variant="h2" className={classes.root}>
				Create GitHub resume
			</Typography>
			<Typography variant="body1" className={classes.description}>
				Enter GitHub username
			</Typography>
			<TextField
				className={classes.input}
				error={!!errors.username}
				fullWidth={true}
				margin="normal"
				label="username"
				variant="outlined"
				placeholder="Enter your username"
				helperText={errors.username ? `${errors.username.message}` : ''}
				{...register('username')}
			/>
			<AppLoadingButton
				loading={loading}
				type="submit"
				variant="contained"
				className={classes.button}
			>
				Create
			</AppLoadingButton>
		</>
	);
};

export default UserNameComponent;
