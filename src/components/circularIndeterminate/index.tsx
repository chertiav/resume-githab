import React, { ReactElement } from 'react';
import { CircularProgress, Stack } from '@mui/material';
//============================================================
import { useStyle } from './styles';

const CircularIndeterminate: React.FC = (): ReactElement => {
	const { classes } = useStyle();

	return (
		<Stack className={classes.root} spacing={4} direction="row">
			<CircularProgress />
		</Stack>
	);
};

export default CircularIndeterminate;
