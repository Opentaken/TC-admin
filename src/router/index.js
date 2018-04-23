import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Classify from '@/components/product/classifyList'
import ProductList from '@/components/product/productList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/classifyList',
      name: 'classify',
      component: Classify
    },
    {
      path: '/productList',
      name: 'productList',
      component: ProductList
    }
  ]
})
