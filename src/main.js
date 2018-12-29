// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/css/comm.css'
import JSEncrypt from 'jsencrypt'
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
import {VTable,VPagination} from 'vue-easytable'

Vue.config.productionTip = false
Vue.prototype.$jsEncrypt = JSEncrypt;

Vue.use(iView)
// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  //NProgress.start();
  console.log("111")
  let token = window.localStorage.getItem('token')
  console.log(to)
  console.log(token)
  if (token === null) {
    if (to.name !== 'login') {
      // window.location.pathname ='/login'
    }
    request.headers.set('Authorization', token)  
  }
  next()
})
Vue.http.interceptors.push((request, next) => {
  let token = window.localStorage.getItem('token')
  console.log("222")
  console.log(token)
  console.log(request)
  if (token !== null) {
      request.headers.set('Authorization', token)
          console.log("yyyy")
           next((response) => {
           if (response.data.status != 200 ) {
            alert(response.data.message)
             window.location.pathname ='/login'
           }
           console.log(response)
          return response
   })
  } else {
    if (request.name !== 'login') {
      console.log("9999")
      console.log(request)
      // 
    }   
    window.location.pathname ='/login'
  }   

})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

