import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUsernameData } from '../../../common/types/home';
import { instance } from '../../../utils/axios';

export const getDataUser = createAsyncThunk(
	'/',
	async (userNameData: IUsernameData, { rejectWithValue }) => {
		try {
			const data = await instance.get(userNameData.username);
			return data.data;
		} catch (error: any) {
			if (error.response && error.data.message) {
				return rejectWithValue(error.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	},
);
