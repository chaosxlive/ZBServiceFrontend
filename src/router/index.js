import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    redirect: {
      name: 'Home',
    },
    meta: {
      title: 'ZBService'
    },
    component: () => import('@/views/auth/auth.vue'),
    children: [{
      path: 'register',
      name: 'AuthRegister',
      meta: {
        title: '會員註冊'
      },
      component: () => import('@/views/auth/register.vue')
    }, {
      path: 'register_done',
      name: 'AuthRegisterDone',
      meta: {
        title: '註冊完成'
      },
      component: () => import('@/views/auth/register_done.vue')
    }, {
      path: 'login',
      name: 'AuthLogin',
      meta: {
        title: '會員登入'
      },
      component: () => import('@/views/auth/login.vue')
    },{
      path: 'logout',
      name: 'AuthLogout',
      meta: {
        title: '會員登出'
      },
      component: () => import('@/views/auth/logout.vue')
    }, ]
  },
  {
    path: '/acgl',
    name: 'ACGL',
    redirect: {
      name: 'Home',
    },
    component: () => import('@/views/acgl/index.vue'),
    meta: {
      title: 'ZBService'
    },
    children: [{
      path: 'anime',
      name: 'ACGLAnime',
      meta: {
        title: '動漫',
      },
      redirect: {
        name: 'ACGLAnimeIndex',
      },
      component: () => import('@/views/acgl/anime.vue'),
      children: [{
        path: 'index',
        name: 'ACGLAnimeIndex',
        meta: {
          title: '列表',
        },
        component: () => import('@/views/acgl/anime/index.vue'),
      }, {
        path: 'detail/:uuid',
        name: 'ACGLAnimeDetail',
        component: () => import('@/views/acgl/anime/detail.vue'),
        meta: {
          title: '{NAMELOADING}',
        }
      }]
    }]
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// const DEFAULT_TITLE = 'ZBService'

router.beforeEach((to, from, next) => {
  document.title = to.matched.map(item => {
      return item.meta && item.meta.title
    }).filter(item => {
      return !!item
    }).reverse()
    .join(' - ')

  next()
})

export default router