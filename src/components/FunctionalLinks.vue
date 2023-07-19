<template>
    <div class="baba-flex-col baba-svc-container" id="services">
        <h2 class="baba-flex">{{$route.name}}</h2>
        <div class="links-container pointer">
            <div class="links" @click="handleWindow('https://www.dmcc.ae/ ')">
                <img src="../Assets/link1.png" alt="">
                <p class="underline-anim" style="position: relative;">Dubai Multi Commodities Centre</p>
            </div>
            <div class="links" @click="handleWindow('https://www.lbma.org.uk/ ')">
                <img src="../Assets/link2.jpg" alt="">
                <p class="underline-anim" style="position: relative;">The London Bullion Market Association</p>
            </div>
            <div class="links" @click="handleWindow('https://www.gold.org/ ')">
                <img src="../Assets/link3.jpg" alt="">
                <p class="underline-anim" style="position: relative;">World Gold Council</p>
            </div>
        </div>
    </div>
</template>

<script setup>

function handleWindow(path){
    window.open(path)
}
</script>