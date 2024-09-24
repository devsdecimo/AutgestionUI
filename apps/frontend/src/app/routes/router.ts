import { createMemoryHistory, createRouter } from 'vue-router'

// Pages
import HomePage from '../pages/home/home.vue'

const routes = [
  { path: '/', component: HomePage }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
