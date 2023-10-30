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
const EBooks = () => import("../components/EBooks.vue")
const GoldBuyingTime = () => import("../components/GoldBuyingTime.vue")
const FunctionalLinks = () => import("../components/FunctionalLinks.vue")
const EconomicRings = () => import("../components/EconomicRings.vue")
const YoutubeVideos = () => import("../components/YoutubeVideos.vue")
const Zakat = () => import("../components/Zakat.vue")
const LiveRate = () => import("../components/LiveRate.vue")
const ContactUS = () => import("../components/ContactUs.vue")
export function createRouter() {
    const router =  _createRouter({
        history: createWebHistory(''),
        // base: '/baba-gold-website/',
        routes: [
            { path: "/", name: 'HomePage', component: HomePage },
            { path: "/about", name: 'About', component: About },
            { path: "/our-vision", name: 'Our Vision', component: Story },
            { path: "/our-mission", name: 'Our Mission', component: Mission },
            { path: "/services", name: 'Services', component: Services },
            { path: "/trading", name: 'Trading', component: Trading },
            { path: "/decision-making", name: 'DecisionMaking', component: DecisionMaking },
            { path: "/platform", name: 'Platform', component: Platform },
            { path: "/factors", name: 'Factors', component: Factors },
            { path: "/key-events", name: 'Fundamental key events', component: KeyEvents },
            { path: "/trading-tips", name: 'Trading tips', component: TradingTips },
            { path: "/account-forum", name: 'Account Opening Forum', component: AccountForum },
            { path: "/policies", name: 'Policies', component: Policies },
            { path: "/quality-params", name: 'Quality Parameters', component: QualityParameters },
            { path: "/e-book", name: 'E books', component: EBooks },
            { path: "/buy-gold", name: 'Auspicious time to buy gold', component: GoldBuyingTime },
            { path: "/functional-links", name: 'Functional Links', component: FunctionalLinks },
            { path: "/economic-rings", name: 'Economic Rings', component: EconomicRings },
            { path: "/videos", name: 'Videos', component: YoutubeVideos },
            { path: "/Zakat", name: 'Zakat Calculator', component: Zakat },
            { path: "/live-rate", name: 'Live rate', component: LiveRate },
            { path: "/contact-us", name: 'Contact Us', component: ContactUS },
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
