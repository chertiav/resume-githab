import { makeStyles } from 'tss-react/mui';
import { tokens } from '../../theme';

export const useStyles = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			background: colors.primary.DEFAULT,
			borderBottom: `1px solid ${colors.borderColor}`,
			position: 'static',
			boxShadow: 'none',
		},
		toolBar: {
			padding: '24px',
			justifyContent: 'flex-end',
		},
	};
});
