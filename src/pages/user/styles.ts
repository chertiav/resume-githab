import { makeStyles } from 'tss-react/mui';
import { tokens } from '../../theme';

export const useStyle = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			padding: '32px',
			margin: 'auto',
			'& a': {
				textDecoration: 'none',
				color: colors.red.DEFAULT,
			},
		},
		resumeBlock: {
			backgroundColor: `${
				theme.palette.mode === 'light'
					? colors.primary.DEFAULT
					: colors.primary[600]
			}`,
			marginBottom: '32px',
			paddingBottom: '32px',
			maxWidth: '980px',
			border: `1px solid ${colors.borderColor}`,
			borderRadius: '12px',
			'& .MuiPaper-root': {
				backgroundColor: 'transparent',
				boxShadow: 'none',
				backgroundImage: 'none',
			},
		},
		photoUrl: {
			width: '15rem',
		},
	};
});
