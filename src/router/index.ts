import { createWebHashHistory, createRouter } from 'vue-router';

import Home from '../views/Home/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});