import { makeStyles } from 'tss-react/mui';
import { tokens } from '../../theme';

export const useStyle = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			justifyContent: 'center',
			'& .MuiCircularProgress-root': {
				color: `${
					theme.palette.mode === 'light'
						? colors.black.DEFAULT
						: colors.white.DEFAULT
				}`,
			},
		},
	};
});
