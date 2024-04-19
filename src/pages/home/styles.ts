import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()({
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
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		maxWidth: '640px',
		margin: 'auto',
		padding: '40px',
		borderRadius: '20px',
		boxShadow: '-3px -2px 20px 1px #202020',
	},
});
