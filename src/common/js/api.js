import axios from 'axios';

export function getFtlParams() {
	const COURSE_CENTER_URL = '/api/course/center/index.vpage';
	return axios.get(COURSE_CENTER_URL)
		.then(res => {
			let reg = /var\sparams\s=\s(.+)\|\|\s\{\}/;
			let match = res.data.match(reg);
			return Promise.resolve(JSON.parse(match[1]));
		})
		.catch(err => {
			throw(err);
		});
}