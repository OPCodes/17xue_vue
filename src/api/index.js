import axios from 'axios';

export function testApi() {
	return axios.post('/api/indexlist.vpage');
}