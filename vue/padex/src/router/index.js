import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/MailIn',
        name: 'MailIn',
        component: () =>
            import ('../components/MailIn.vue')
    },
    {
        path: '/MailOut',
        name: 'MailOut',
        component: () =>
            import ('../components/MailOut.vue')
    },
    {
        path: '/Trash',
        name: 'Trash',
        component: () =>
            import ('../components/Trash.vue')
    },
    {
        path: '/NewMail',
        name: 'NewMail',
        component: () =>
            import ('../components/NewMail.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router