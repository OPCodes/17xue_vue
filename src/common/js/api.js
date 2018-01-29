import axios from 'axios';

export function getFtlParams() {
	const COURSE_CENTER_URL = '/api/course/center/index.vpage';
	return axios.get(COURSE_CENTER_URL)
		.then(res => {
			let reg = /var\sparams/;
			let matches = reg.match(res)
			console.log(matches);
		});
}