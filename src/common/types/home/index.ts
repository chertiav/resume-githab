import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IPropsUserName<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any,
> {
	loading: boolean;
	register: UseFormRegister<TFieldValues>;
	errors: FieldErrors<TFieldValues>;
}

export interface IUsernameData {
	username: string;
}
