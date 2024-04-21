import { createSlice } from '@reduxjs/toolkit';
//========================================================
import { getUsersRepositories } from '../../thunks/repositories';
import {
	ILanguage,
	IRepository,
	IRepositoriesState,
} from '../../../common/types/user';

const initialState: IRepositoriesState = {
	repos: [] as IRepository[],
	languages: [] as ILanguage[],
	isLoadingRepos: false,
};

export const repositoriesSlice = createSlice({
	name: 'repos',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUsersRepositories.pending, (state) => {
			state.isLoadingRepos = true;
		});
		builder.addCase(getUsersRepositories.fulfilled, (state, action) => {
			state.repos = action.payload?.repositories as IRepository[];
			state.languages = action.payload?.languages as ILanguage[];
			state.isLoadingRepos = false;
		});
		builder.addCase(getUsersRepositories.rejected, (state) => {
			state.isLoadingRepos = false;
		});
	},
});

export default repositoriesSlice.reducer;
