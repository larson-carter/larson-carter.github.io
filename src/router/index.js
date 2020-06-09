import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home Page',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of Larsons website.'
        },
        {
          property: 'og:description',
          content: 'Larsons home page'
        }
      ]
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home Page',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of Larsons website.'
        },
        {
          property: 'og:description',
          content: 'Larsons home page'
        }
      ]
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'About Page',
      metaTags: [
        {
          name: 'description',
          content: 'The about page of Larsons website'
        },
        {
          property: 'og:description',
          content: 'Larsons About page'
        }
      ]
    }
  }
];

const router = new VueRouter({
  routes
})

export default router
