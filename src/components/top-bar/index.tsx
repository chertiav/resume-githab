import React, { ReactElement } from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
//============================================
import { useStyles } from './styles';
import ThemeSwitcherComponent from '../theme-switcer';
import { useNavigate } from 'react-router-dom';

const TopBarComponent: React.FC = (): ReactElement => {
	const { classes } = useStyles();
	const navigate = useNavigate();

	const handleHome = (): void => {
		sessionStorage.removeItem('username');
		navigate('/');
	};

	return (
		<AppBar className={classes.root}>
			<Toolbar className={classes.toolBar}>
				<Button color="inherit" onClick={handleHome}>
					Home
				</Button>
				<Button color="inherit">Print</Button>
				<ThemeSwitcherComponent />
			</Toolbar>
		</AppBar>
	);
};

export default TopBarComponent;
