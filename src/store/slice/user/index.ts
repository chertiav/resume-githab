import { createSlice } from '@reduxjs/toolkit';
//========================================================
import { getDataUser } from '../../thunks/user';
import { IUser, IUserState } from '../../../common/types/user';

const initialState: IUserState = {
	userData: {} as IUser,
	isLoading: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataUser.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getDataUser.fulfilled, (state, action) => {
			state.userData = action.payload as IUser;
			state.isLoading = false;
		});
		builder.addCase(getDataUser.rejected, (state) => {
			state.isLoading = false;
		});
	},
});

export default userSlice.reducer;
