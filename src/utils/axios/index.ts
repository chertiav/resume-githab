import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://api.github.com/users/',
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json',
	},
});
