
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const route = (path, name, component) => ({
  path,
  name,
  component: () => import(`@/components/${component}`)
})

export default new Router({
  mode: 'history',
  routes: [
    route('/', 'home', 'Home'),
    route('/checkout', 'Checkout', 'Checkout')
  ]
});
