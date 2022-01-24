import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Profile from '../components/Profile.vue'
import Contact from '../components/Contact.vue'
import Project from '../components/Project.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/projects',
        name: 'Project',
        component: Project
    },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router