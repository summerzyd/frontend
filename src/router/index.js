import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import View1 from '@/components/View1'
import View2 from '@/components/View2'
import Home from '@/components/admin/Home'
import Base from '@/components/admin/Base'
import Person from '@/components/admin/Person'
import Store from '@/components/admin/Store'
import Login from '@/components/admin/Login'
import Tabledit from '@/components/admin/Tabledit'
import Vtable from '@/components/admin/Vtable'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode : 'history',
  routes: [
    {
      path:'/layout',
      name: 'Layout',
      component: Layout
    },
    { path: '/', component: Base, name: 'admin', redirect: '/home',
      children: [
        { path: '/home', component: Home, name: 'home' },
        { path: '/view1', component: View1, name: 'view1' },
        { path: '/person', component: Person, name: 'person' },
        { path: '/store', component: Store, name: 'store' },
        { path: '/tabledit', component: Tabledit, name: 'tabledit' },
        { path: '/vtable', component: Vtable, name: 'vtable' },
      ]
    },
    { path: '/login', component: Login, name: 'login' },
  ]
})