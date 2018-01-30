// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '@/common/styles/base.scss';
import directives from '@/directives';
import 'hotcss';
import VConsole from 'vconsole';

if(process.env.NODE_ENV === 'development') {
	new VConsole();
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});

// inject directives
Object.keys(directives).forEach(key => {
	Vue.directive(key, directives[key]);
});
