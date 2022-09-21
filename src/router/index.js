import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import aboutVuetifyView from '../views/aboutVuetifyView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'
import quizapp from "../components/quizapp.vue"
import modal from "../components/modal.vue"
import RegisterView from "../views/RegisterView.vue"
import SignInView from "../views/SignInView.vue"
import MatchHistory from "../views/MatchHistory.vue"
import AxiosView from "../views/AxiosView.vue"

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'Home',
            component: HomeView
        },

        {
            path: '/stringApp',
            name: 'StringAppView',
            component: StringAppView
        },

        {
            path: '/basicMath',
            name: 'basicMath',
            component: BasicMathView
        },

        {
            path: '/aboutMe',
            name: 'AboutMeView',
            component: AboutMeView,

        },

        {
            path: '/aboutVuetifyView',
            name: 'aboutvuetify',
            component: aboutVuetifyView,

        },

        {
            path: '/QuizView',
            name: 'QuizView',
            component: QuizView,

        },

        {
            path: '/quizapp',
            name: 'quizapp',
            component: quizapp,

        },

        {
            path: '/modal',
            name: 'modal',
            component: modal,

        },

        {
            path: '/RegisterView',
            name: 'register',
            component: RegisterView,

        },

        {
            path: '/SignInView',
            name: 'signin',
            component: SignInView,

        },

        {
            path: '/MatchHistory',
            name: 'history',
            component: MatchHistory,

        },
        {
            path: '/AxiosView',
            name: 'axios',
            component: AxiosView,

        },
    ]
})

export default router