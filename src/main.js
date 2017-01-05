// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Home from './components/routes/Home';
import Portfolio from './components/routes/Portfolio';
import './assets/icons/favicon.ico';

Vue.use(VueRouter);

const routes = [
  {
    path: '/', component: Home
  },
  {
    path: '/portfolio/:id',
    component: Portfolio
  }
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
