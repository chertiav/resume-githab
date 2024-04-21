import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//=========================================================
import { AppDispatch, RootState } from '../../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useValidName = () => {
	return !!sessionStorage.getItem('username');
};

// @ts-ignore
export const useTitle = (title: string): void => {
	useEffect((): (() => void) => {
		const prevTitle = document.title;
		document.title = title;
		return () => (document.title = prevTitle);
	}, [title]);
};
