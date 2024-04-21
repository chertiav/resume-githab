import { makeStyles } from 'tss-react/mui';
//========================================
import { tokens } from '../../theme';

export const useStyles = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100vw',
			height: '100vh',
			padding: '20px',
		},
		form: {
			flex: 1,
		},
		header: {
			display: 'flex',
			width: '100%',
			justifyContent: 'flex-end',
		},
		container: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			maxWidth: '640px',
			margin: 'auto',
			padding: '40px',
			borderRadius: '20px',
			boxShadow: `-3px -2px 20px 1px ${colors.secondary.DEFAULT}`,
		},
	};
});
