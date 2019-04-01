// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App'
// import AddTask from './components/AddTask.vue'
// import TodoList from './components/TodoList.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
// Vue.use(VueRouter)

// const routes = [
//  {path: 'addtask', component:AddTask},
//  {path: '/', component:TodoList}
// ]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //  router,
  components: { App },
  template: '<App/>'
})
