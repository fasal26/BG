<template>
    <div class="sa-dialog" id="dlg">
        <div class="sa-dialog-body sa-fixed-right">
            <p>BG</p>
            <div class="dialog-items-container" ref="target">
                <div class="dialog-items doc-flex" @click="handleRoute('/')">
                    <img src="../Assets/home.svg" alt="">
                    <p>Home</p>
                </div>
                <div class="dialog-items doc-flex" @click="handleRoute('/about')">
                    <img src="../Assets/about.svg" alt="">
                    <p>About Us</p>
                </div>
                <div class="dialog-items doc-flex" @click="hndlDrpDwn('isTrading')">
                    <img src="../Assets/blog.svg" alt="">
                    <p>Trading</p>
                    <img src="../Assets/down-arrow-wh.png" alt="">
                </div>
                <div class="drp-dwn-container" :style="getColor('background')" v-if="isTrading">
                    <ul>
                        <li @click.self="handleRoute('/key-events')" :style="getColor('events')" class="pointer" >Key events</li>
                        <li @click.self="handleRoute('/trading-tips')" :style="getColor('trading')" class="pointer">Trading tips</li>
                        <li @click.self="handleRoute('/account-forum')" :style="getColor('account')" class="pointer">Account Opening</li>
                        <li @click.self="handleRoute('/policies')" :style="getColor('policies')" class="pointer">Fiscial & Monetary Policy</li>
                        <li @click.self="handleRoute('/quality-params')" :style="getColor('params')" class="pointer">Quality Parameter</li>
                    </ul>
                </div>
                <div class="dialog-items doc-flex" @click="scrollInto('footer')">
                    <img src="../Assets/contact-mail.svg" alt="">
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { onClickOutside } from '@vueuse/core'
const router = useRouter()
const route = useRoute()

const target = ref(null)
let isTrading = ref(false)
onClickOutside(target, (event) => {
    let displayFlg = document.getElementById('dlg')
    displayFlg.style.display = 'none'
    document.body.style.overflow = 'auto'
})

// function closeNav(evt){
//     console.log(evt,'evt');
//     let displayFlg = document.getElementById('dlg')
//     if(evt.target.classList.contains('sa-dialog')){
//         displayFlg.style.display = 'none'
//         document.body.style.overflow = 'auto'
//     }
// }
function handleRoute(path){
    router.push(path)
    let displayFlg = document.getElementById('dlg')
        displayFlg.style.display = 'none'
        document.body.style.overflow = 'auto'
}
function hndlDrpDwn(flg){
    if(flg == 'isTrading'){
        isTrading.value = !isTrading.value
    }
}
function getColor(type){
    if(route.path != '/'){
        if(route.path.includes(type)){
            return 'background-color:#ccd5d5;color:black'
        }
        return 'color:#ffffff;'
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