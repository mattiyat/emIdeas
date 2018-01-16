/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LogIdea from '@/components/Idea/LogIdea'
import Idea from '@/components/Idea/Ideas'
import Profile from '@/components/Users/Profile'
import SignIn from '@/components/Users/SignIn'
import SignUp from '@/components/Users/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/idea/new',
      name: 'LogIdea',
      component: LogIdea
    },
    {
      path: '/idea',
      name: 'Idea',
      component: Idea
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Sign In',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: SignUp
    }
  ],
  mode: 'history'
})
