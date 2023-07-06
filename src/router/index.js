import DemoOne from '../components/DemoOne.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        name:'DemoOne',
        path: '/', 
        component: DemoOne
    },
]

const router = createRouter({
        history: createWebHashHistory,
        routes
    })

export default router