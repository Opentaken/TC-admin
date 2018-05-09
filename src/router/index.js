import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Classify from '@/components/product/classifyList';
import ProductList from '@/components/product/productList';
import orderList from '@/components/order/orderList';
import product from '@/components/product/product';
import order from '@/components/order/order';
import memberList from '@/components/management/memberList';
import member from '@/components/management/member';

Vue.use(Router);

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
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/memberList',
      name: 'memberList',
      component: memberList
    },
    {
      path: '/member',
      name: 'member',
      component: member
    }
  ]
});
