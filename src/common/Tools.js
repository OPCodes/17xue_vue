import axios from 'axios';

export function ajax({
	url,
	type = 'get',
	data = {},
	success,
	error
}) {
	data = type.toLowerCase() === 'get' ? { params: data } : data;
	return axios[type](url, data)
	.then(res => {
		return Promise.resolve(res.data);
	})
	.catch(err => {
		return Promise.reject(err);
	});
}