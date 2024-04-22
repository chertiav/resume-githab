import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
//=============================================
import { useStyles } from './styles';
import TopBarComponent from '../top-bar';

const LayoutComponent: React.FC<any> = (props: any): ReactElement => {
	const location = useLocation();
	const { classes } = useStyles();
	const { handlePrint } = props;

	return location.pathname === '/' ? (
		<Outlet />
	) : (
		<Box display={'flex'} className={classes.root}>
			<Box className={classes.mainSection}>
				<TopBarComponent handlePrint={handlePrint} />
				<Outlet />
			</Box>
		</Box>
	);
};

export default LayoutComponent;
