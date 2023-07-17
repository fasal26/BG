<template>
    <div class="doc-banner-container" id="doc-banner">
            <!-- <img src="../Assets/WhatsApp Image 2023-06-06 at 14.10.30.jpg" alt=""> -->
        <div class="docdet-mob doc-padding" @click="openMenu">
            <img src="../Assets/bars-staggered.png" alt="menu" class="navbar_menu" id="burger">
        </div>
        <img src="../Assets/babagoldtrans.png" alt="" class="logo">
        <div class="doc-flex nav-container">
            <p class="pointer underline-anim" :class="$route.name && $route.name.includes('HomePage') ? 'route-active' : ''" @click="handleRoute('/')" 
                :style="getColor() ">Home</p>
            <p class="pointer underline-anim" :class="$route.name && $route.name.includes('About') ? 'route-active' : ''" @click="handleRoute('/about')" 
                :style="getColor()">About Us</p>
            <div class="nav-itm-container" @mouseover="handleMouse('mouseover','trading')" @mouseleave="handleMouse('mouseleave','trading')">
                <p class="pointer underline-anim" :style="getColor()"
                    :class="($route.name && $route.name.includes('events')) ? 'route-active' : ''"
                    @click="hndlDrpDwn('isTrading')">Trading</p>
                    <img src="../Assets/down-arrow-wh.png" alt="">
                <div class="drp-dwn-container" :style="getColor('background')" v-if="isTrading">
                    <ul>
                        <li @click.self="handleRoute('/key-events')" :style="getColor('events')" class="pointer" >Key events</li>
                        <li @click.self="handleRoute('/trading-tips')" :style="getColor('trading')" class="pointer">Trading tips</li>
                        <li @click.self="handleRoute('/account-forum')" :style="getColor('account')" class="pointer">Account Opening</li>
                        <li @click.self="handleRoute('/policies')" :style="getColor('policies')" class="pointer">Fiscial & Monetary Policy</li>
                        <li @click.self="handleRoute('/quality-params')" :style="getColor('params')" class="pointer">Quality Parameter</li>
                    </ul>
                </div>
            </div>
            <p class="pointer underline-anim" @click="scrollInto('footer')" 
                :style="getColor()">Contact Us</p>
        </div>
    </div>
    <MobileNavbar/>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from "vue"
import MobileNavbar from './MobileNavbar.vue';
const route = useRoute()
const router = useRouter()

let isMounted = ref(false)
onMounted(() => {
    // isMounted.value = true
})

function openMenu(evt){
    let displayFlg = document.getElementById('dlg')
    let menu = document.getElementById('burger')
    if(evt.target == menu){
        displayFlg.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }
}
function getColor(type){
    if(route.path != '/'){
        if(type == 'background'){
            return 'background-color:#ffffff;'
        }else if(route.path.includes(type)){
            return 'background-color:#ccd5d5;color:black'
        }
        return 'color:initial;'
    }
}
function handleRoute(path){
    isTrading.value = false
    router.push(path)
}

let isTrading = ref(false)
function handleMouse(type,val){
    switch (val) {
        case 'trading':
            isTrading.value = type == 'mouseover' ? true : false
            break;
        // case 'service':
        //     srvcFlg.value = type == 'mouseover' ? true : false
        //     break;
        // case 'eservice':
        //     EsrvcFlg.value = type == 'mouseover' ? true : false
        //     break;
    
        default:
            break;
    }
}
function hndlDrpDwn(flg){
    if(flg == 'isTrading'){
        isTrading.value = !isTrading.value
    }
}

function scrollInto(id){
    let displayFlg = document.getElementById('dlg')
    if(id){
        if(displayFlg) displayFlg.style.display = 'none'
        document.body.style.overflow = 'auto'
        let element = document.getElementById(id)
        if(element)
            element.scrollIntoView({
                behavior: 'smooth'
            })
    }
}
</script>

<style scoped>
.route-active:after{
    width: 100%;
}
.logo{
    height: 120px;
    width: 100px;
    position: absolute;
    top: 2px;
    left: 23px;
}
</style>