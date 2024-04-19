import * as yup from 'yup';
//===============================
import { AppErrors } from '../../common/errors';

export const UsernameSchema = yup
	.object()
	.shape({
		username: yup.string().min(1, AppErrors.minLength_1),
	})
	.required();
