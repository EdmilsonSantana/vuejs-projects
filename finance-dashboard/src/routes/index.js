import Portfolio from  './../pages/portfolio/Portfolio.vue';

export const routes = [ 
	{ path: '/portfolio',name: 'portfolio', component: Portfolio },
	{ path: '/', redirect: '/portfolio'},
	{ path: '/*', redirect: '/portfolio'}

];