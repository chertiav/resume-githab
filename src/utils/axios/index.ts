import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://api.github.com/users/',
	headers: {
		'Content-Type': 'application/json',
	},
});
