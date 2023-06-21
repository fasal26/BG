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
                <div class="dialog-items doc-flex" @click="handleRoute('/our-mission')">
                    <img src="../Assets/blog.svg" alt="">
                    <p>Our Mission</p>
                </div>
                <div class="dialog-items doc-flex" @click="handleRoute('/trading')">
                    <img src="../Assets/blog.svg" alt="">
                    <p>Trading</p>
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

const target = ref(null)
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