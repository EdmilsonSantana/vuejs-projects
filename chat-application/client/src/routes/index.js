import Join from './../pages/join/index';
import Room from './../pages/room/index';

export default [
  {
    path: '/join',
    name: 'join.index',
    component: Join,
    meta: {
      guest: true,
    },
  },
  {
    path: '/room',
    name: 'room.index',
    component: Room,
    meta: {
      joined: true,
    },
  },
  {
    path: '/',
    redirect: '/room',
  },
  {
    path: '/*',
    redirect: '/room',
  },
];
