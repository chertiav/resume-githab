import { createAsyncThunk } from '@reduxjs/toolkit';
//=====================================================
import { IUsernameData } from '../../../common/types/home';
import { IUser } from '../../../common/types/user';
import { instance } from '../../../utils/axios';
import { showError } from '../../../utils/errors';

export const getDataUser = createAsyncThunk(
	'/',
	async (userNameData: IUsernameData) => {
		try {
			const { data }: { data: IUser } = await instance.get(
				userNameData.username,
			);
			sessionStorage.setItem('username', data.login);
			return data;
		} catch (e: any) {
			sessionStorage.removeItem('username');
			showError(e);
		}
	},
);
