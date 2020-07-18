import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'IndexSearch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "IndexSearch" */ '../views/home/nextpage/IndexSearch.vue')
  },
  {
    path: '/category',
    name: 'CategoryPage',
    component: () => import(/* webpackChunkName: "CategoryPage" */ '../views/category/index.vue')
  },
  {
    path: '/goods-detail',
    name: 'GoodsDetail',
    component: () => import(/* webpackChunkName: "GoodsDetail" */ '../views/goodsdetail/index.vue')
  },



  {
    path: '/category-goods',
    name: 'SecondCategory',
    component: () => import(/* webpackChunkName: "SecondCategory" */ '../views/category/nextpage/SecondCategory.vue')
  },


  {
    path: '/shopping-car',
    name: 'ShoppingCar',
    component: () => import(/* webpackChunkName: "ShoppingCar" */ '../views/shopcar/index.vue')
  },

  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "Mine" */ '../views/mine/index.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import(/* webpackChunkName: "Address" */ '../views/mine/nextpage/Address.vue')
  },
  {
    path: '/edit-address',
    name: 'EditAddress',
    component: () => import(/* webpackChunkName: "EditAddress" */ '../views/mine/nextpage/EditAddress.vue')
  },


  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "Order" */ '../views/order/index.vue')
  },
  {
    path: '/confirm-order',
    name: 'ConfirmOrder',
    component: () => import(/* webpackChunkName: "ConfirmOrder" */ '../views/order/ConfirmOrder.vue')
  },
  {
    path: '/order-detail',
    name: 'OrderDetail',
    component: () => import(/* webpackChunkName: "OrderDetail" */ '../views/order/OrderDetail.vue')
  },


  {
    path: '/500',
    name: 'Error',
    meta: {
      title: 'Error'
    },
    component: () => import( /* webpackChunkName: "Error" */ '../views/Error.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    meta: {
      title: 'Not Found'
    },
    component: () => import( /* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
