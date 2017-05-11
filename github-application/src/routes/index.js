import Repositories from  './../pages/repositories/Repositories.vue';
import User from  './../pages/user/User.vue';

export const routes = [ 
	{ path: '/repositories',name: 'repositories', component: Repositories },
	{ path: '/user',name: 'user', component: User },
	{ path: '/', redirect: '/repositories'},
	{ path: '/*', redirect: '/repositories'}

];