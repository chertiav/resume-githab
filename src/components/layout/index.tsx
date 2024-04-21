import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
//=============================================
import { useStyles } from './styles';
import TopBarComponent from '../top-bar';

const LayoutComponent: React.FC = (): ReactElement => {
	const location = useLocation();
	const { classes } = useStyles();

	return location.pathname === '/' ? (
		<Outlet />
	) : (
		<Box display={'flex'} className={classes.root}>
			<Box className={classes.mainSection}>
				<TopBarComponent />
				<Outlet />
			</Box>
		</Box>
	);
};

export default LayoutComponent;
