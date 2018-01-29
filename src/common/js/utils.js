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

export function hasClass(el, className) {
	let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
	return reg.test(el.className)
}

export function addClass(el, className) {
	if (hasClass(el, className)) {
		return;
	}

	let newClass = el.className.split(' ');
	newClass.push(className);
	el.className = newClass.join(' ');
}

export function delClass(el, className) {
	if (!hasClass(el, className)) {
		return;
	}

	let newClass = el.className.split(' ');
	newClass.splice(newClass.indexOf(className), 1);
	el.className = newClass.join(' ');
}