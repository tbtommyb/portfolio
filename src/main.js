// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

Vue.use(VueRouter);

const routes = [
  {
    path: '/', component: App,
    children: [
      {path: '', component: Home},
      {path: '/portfolio/:id', component: Portfolio}
    ]
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
