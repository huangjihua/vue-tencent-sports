import Vue from 'vue'
import Router from 'vue-router'

// require.ensure():分模块打包,想要组合在一起的组件打包到一个chunk块中去
const Index = r => require.ensure([], () => r(require('../page/index')), 'index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
