import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            meta: { requiresAuth: true },
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/views/Home.vue')
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/views/About.vue')
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/views/Contact.vue')
                },
                {
                    path: '/pricing',
                    name: 'pricing',
                    component: () => import('@/views/Pricing.vue')
                }
            ]
        }
    ]
});

export default router;
