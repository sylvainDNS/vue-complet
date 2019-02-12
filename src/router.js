import Vue from 'vue'
import Router from 'vue-router'
import Blog from './views/Blog.vue'
import Post from './views/Post.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Blog,
    },
    {
      path: '/:wp/:id',
      component: Post,
    },
  ],
})
