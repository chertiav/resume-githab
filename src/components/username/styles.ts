import { makeStyles } from 'tss-react/mui';
//========================================
import { tokens } from '../../theme';

export const useStyles = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			textAlign: 'center',
			fontFamily: 'Popins',
			fontSize: '32px',
		},
		description: {
			marginBottom: '16px',
			fontFamily: 'Popins',
			textAlign: 'center',
		},
		input: {
			'& label.Mui-focused': {
				color: colors.secondary.DEFAULT,
			},
			'& .MuiOutlinedInput-root': {
				'&.Mui-focused fieldset': {
					borderColor: colors.secondary.DEFAULT,
				},
			},
		},
		button: {
			margin: '16px 0',
			fontFamily: 'Popins',
			width: '60%',
		},
	};
});
