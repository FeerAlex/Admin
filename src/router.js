import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: require('./views/about.vue')
    },
    {
        path: '/works',
        component: require('./views/works.vue')
    },
    {
        path: '/blog',
        component: require('./views/blog.vue')
    }
];

export default new VueRouter({
    routes,
    mode: 'history'
})