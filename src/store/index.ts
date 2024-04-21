import { configureStore } from '@reduxjs/toolkit';
//===================================================
import userSlice from './slice/user';
import repositoriesSlice from './slice/repositories';

const store = configureStore({
	reducer: {
		user: userSlice,
		repositories: repositoriesSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
