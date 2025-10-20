import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import CareerAssessment from '../views/CareerAssessment.vue'
import Results from '../views/Results.vue'
import CareerList from '../views/CareerList.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/assessment', name: 'Assessment', component: CareerAssessment },
  { path: '/results', name: 'Results', component: Results },
  { path: '/careers', name: 'Careers', component: CareerList },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
