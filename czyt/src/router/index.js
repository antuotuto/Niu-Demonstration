import Vue from 'vue'
import Router from 'vue-router'

import App from '~/App.vue'
import Home from '~/components/home.vue'
import Admin from '~/components/admin.vue'
import page1 from '~/components/page1.vue'
import page2 from '~/components/page2.vue'
import page3 from '~/components/page3.vue'
import page4 from '~/components/page4.vue'
import page5 from '~/components/page5.vue'
import page6 from '~/components/page6.vue'
import page7 from '~/components/page7.vue'
import page8 from '~/components/page8.vue'
import page9 from '~/components/page9.vue'
import page10 from '~/components/page10.vue'
import page11 from '~/components/page11.vue'
import page12 from '~/components/page12.vue'
import page13 from '~/components/page13.vue'
import page14 from '~/components/page14.vue'
import page15 from '~/components/page15.vue'
import page16 from '~/components/page16.vue'
import page17 from '~/components/page17.vue'
import page18 from '~/components/page18.vue'
import page19 from '~/components/page19.vue'
import page20 from '~/components/page20.vue'
import page21 from '~/components/page21.vue'
import page22 from '~/components/page22.vue'
import page23 from '~/components/page23.vue'
import page24 from '~/components/page24.vue'
import page25 from '~/components/page25.vue'
import NotFoundComponent from '~/pages/404.vue'

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: Home,
  children: [{
      path: '',
      redirect: '1-1'
    },
    {
      path: '1-1',
      component: page1
    }, {
      path: '1-2',
      component: page2
    }, {
      path: '1-3',
      component: page3
    }, {
      path: '1-4',
      component: page4
    }, {
      path: '2-1',
      component: page5
    }, {
      path: '2-2',
      component: page6
    }, {
      path: '2-3',
      component: page7
    }, {
      path: '2-4',
      component: page8
    }, {
      path: '3-1',
      component: page9
    }, {
      path: '3-2',
      component: page10
    }, {
      path: '3-3',
      component: page11
    }, {
      path: '3-4',
      component: page12
    }, {
      path: '4-1',
      component: page13
    }, {
      path: '4-2',
      component: page14
    }, {
      path: '4-3',
      component: page15
    }, {
      path: '4-4',
      component: page16
    }, {
      path: '5-1',
      component: page17
    }, {
      path: '5-2',
      component: page18
    }, {
      path: '5-3',
      component: page19
    }, {
      path: '5-4',
      component: page20
    }, {
      path: '6-1',
      component: page21
    }, {
      path: '6-2',
      component: page22
    }, {
      path: '6-3',
      component: page23
    }, {
      path: '6-4',
      component: page24
    },{
      path: '*',
      component: NotFoundComponent
    }
  ]
}, {
  path: '*',
  component: NotFoundComponent
}]

export default new Router({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return false
  }
})
