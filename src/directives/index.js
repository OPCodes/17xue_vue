export default {
	'url': {
		bind(el, {value}) {
			try {
				let { host, path } = JSON.parse(value);
				switch(el.tagName.toLowerCase()) {
					case 'img':
						el.src = `${host}/${path}`;
						break;
					case 'a':
						el.href = `${host}/${path}`;
						break;
					default:
						break;
				}
			} catch(e) {
				throw('error: ', 2);
			}
		}
	}
}