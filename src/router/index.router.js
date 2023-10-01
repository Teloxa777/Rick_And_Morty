import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
				
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/Home.vue'),
        },
        {
          path: '/location',
          name: 'Location',
          component: () => import('../views/Location.vue'),
        },
        {
				  path: "/:catchAll(.*)",
				  redirect: { name: "Home" },
        },
    ]
})

export default router