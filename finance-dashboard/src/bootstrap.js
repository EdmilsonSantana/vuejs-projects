import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV != 'production';

/*let autobahn = require('autobahn');

let socket = new autobahn.Connection({
  url: process.env.SOCKET_ENDPOINT,
  realm: "realm1"
});

socket.onclose = () => {
  console.log("Websocket connection closed");
}
		
Object.defineProperty(Vue.prototype, '$socket', {
  get() {
    return socket;
  },
}); */

import Axios from 'axios';

Axios.defaults.baseURL = process.env.API_LOCATION;

Object.defineProperty(Vue.prototype, '$http', {
	get() {
		return Axios;
	}
});

import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.use(VueRouter);

export const router = new VueRouter({
	routes,
});

import VuexRouterSync from 'vuex-router-sync';
import store from './store';

import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
	primary: 'deep-orange',
	accent: 'blue',
});

/*
	Styling
*/
import './assets/sass/app.scss';
