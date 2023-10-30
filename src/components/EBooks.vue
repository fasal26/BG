<template>
    <div class="baba-flex-col baba-svc-container">
        <h2 class="baba-flex">E-books</h2>
        <strong style="text-align: center;">Click to read</strong>
        <div class="ebook-list">
            <!-- <p class="underline-anim" style="position: relative;"><a href="/BG/assets/pdf2.pdf" target="_blank">The Wyckoff Methodology in Depth</a></p>
            <p class="underline-anim" style="position: relative;"><a href="/BG/assets/pdf3.pdf" target="_blank">Elliott Wave Principle & EW Analysis</a></p>
            <p class="underline-anim" style="position: relative;"><a href="/BG/assets/pdf1.pdf" target="_blank">Master Hurst Cycle Analysis</a></p> -->
            <div class="ebook-item pointer" @click="openPdf('/assets/pdf3.pdf')">
                <img src="../Assets/Elliott.jpg" alt="">
                <p>Elliott Wave Principle & EW Analysis</p>
            </div>
            <div class="ebook-item pointer" @click="openPdf('/assets/pdf1.pdf')">
                <img src="../Assets/MasterHurst.jpg" alt="">
                <p>Master Hurst Cycle Analysis</p>
            </div>
            <div class="ebook-item pointer" @click="openPdf('/assets/pdf2.pdf')">
                <img src="../Assets/thewyckoff.jpg" alt="">
                <p>The Wyckoff Methodology in Depth</p>
            </div>
            <div class="ebook-item pointer" @click="openPdf('/assets/pdf4.pdf')">
                <img src="../Assets/ForexTrading.png" alt="">
                <p>How to Identify a Traversal in Forex Trading</p>
            </div>
        </div>
    </div>
</template>

<script setup>

function openPdf(url){
    window.open(url)
}
</script>