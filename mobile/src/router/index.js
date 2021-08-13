import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Activity from '../views/nav/Activity.vue'
import Articles from '../views/nav/Articles.vue'
import ArticlesIn from '../views/nav/ArticlesIn.vue'
import Mook from '../views/nav/Mook.vue'
import Others from '../views/nav/Others.vue'
import Contact from '../views/nav/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Main,
    children:[
      {
        path: '/',
        component: Home,
        meta:{
          logoshow: false
        }
        
      },
      {
        path: '/activity',
        component: Activity,
        meta:{
          logoshow: true
        }
      },
      {
        path: '/articles',
        component: Articles,
        meta:{
          logoshow: true
        }
      },
      {
        path: '/articlesIn/:_id',
        component: ArticlesIn,
        props: true,
        meta:{
          logoshow: true
        }
      },
      {
        path: '/mook',
        component: Mook,
        meta:{
          logoshow: true
        }
      },
      {
        path: '/others',
        component: Others,
        meta:{
          logoshow: true
        }
      },
      {
        path: '/contact',
        component: Contact,
        meta:{
          logoshow: true
        }
      }
    ]
  },
 
]
const router = new VueRouter({
  routes,
})

export default router
