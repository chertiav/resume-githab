import React from 'react';
import { TextField, Typography } from '@mui/material';
//========================================
import { useStyles } from './styles';
import { IPropsUserName } from '../../common/types/home';
import AppLoadingButton from '../loading-button';

const UserName: React.FC<IPropsUserName> = (
	props: IPropsUserName,
): React.JSX.Element => {
	const { register, loading } = props;
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
				fullWidth={true}
				margin="normal"
				label="username"
				variant="outlined"
				placeholder="Enter your username"
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

export default UserName;
