/**
 * Created by LQ on 2018/11/30.
 */
/*路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Basket from '../pages/Basket/Basket.vue'
import Profile from '../pages/Profile/Profile.vue'
import Category from '../pages/Category/Category.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/basket',
      component: Basket,
    }
  ]
})
