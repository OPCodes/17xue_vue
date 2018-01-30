import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/components/welcome';
import CourseCenter from '@/components/course-center';

Vue.use(Router);

export default new Router({
    routes: [
    	{
    		path: '/',
    		component: Welcome,
    		alias: '/welcome'
    	}, {
    		path: '/courseCenter/:subject',
    		component: CourseCenter
    	}
    ]
});
