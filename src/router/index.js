/**
 * @name Router Base File
 * @author Fasal
 * @description Base config file for Vue Router 4
 */
import {
    createRouter as _createRouter,
    createWebHistory
} from 'vue-router'

const HomePage = () => import("../components/HomePage.vue")
const About = () => import("../components/About.vue")
const Story = () => import("../components/Story.vue")
const Services = () => import("../components/Services.vue")
const Mission  = () => import("../components/Mission.vue")
const Trading = () => import("../components/Trading.vue")
const DecisionMaking = () => import("../components/DescisionMaking.vue")
const Platform = () => import("../components/Platform.vue")
const Factors = () => import("../components/Factors.vue")
const KeyEvents = () => import("../components/KeyEvents.vue")
const TradingTips = () => import("../components/TradingTips.vue")
const AccountForum = () => import("../components/AccountForum.vue")
const Policies = () => import("../components/Policies.vue")
const QualityParameters = () => import("../components/QualityParameters.vue")
export function createRouter() {
    const router =  _createRouter({
        history: createWebHistory('/BG/'),
        // base: '/baba-gold-website/',
        routes: [
            { path: "/", name: 'HomePage', component: HomePage },
            { path: "/about", name: 'About', component: About },
            { path: "/our-vision", name: 'Our Vision', component: Story },
            { path: "/our-mission", name: 'Our Mission', component: Mission },
            { path: "/services/:id", name: 'Services', component: Services },
            { path: "/trading", name: 'Trading', component: Trading },
            { path: "/decision-making", name: 'DecisionMaking', component: DecisionMaking },
            { path: "/platform", name: 'Platform', component: Platform },
            { path: "/factors", name: 'Factors', component: Factors },
            { path: "/key-events", name: 'Fundamental key events', component: KeyEvents },
            { path: "/trading-tips", name: 'Trading tips', component: TradingTips },
            { path: "/account-forum", name: 'Account Opening Forum', component: AccountForum },
            { path: "/policies", name: 'Policies', component: Policies },
            { path: "/quality-params", name: 'Quality Parameters', component: QualityParameters },
            // { path: '/:pathMatch(.*)*', redirect: "/" },
        ],
        scrollBehavior() {
            let element = document.getElementById('app')
            element.scrollIntoView({
                behavior: 'smooth'
            })
        }
    })
    return router;
}
