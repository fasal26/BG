<template>
    <div class="glry-container">
        <Carousel :autoplay="4000" :wrap-around="true">
            <Slide v-for="item in images" :key="item">
                <div class="carousel__item">
                    <img :src="item" class="quote-img" alt="gold" />
                </div>
                <!-- {{ item }}fasal -->
            </Slide>
            <template #addons>
                <!-- <Navigation /> -->
                <!-- <Pagination /> -->
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue';

let images = ref([
    'src/Assets/quote1.jpg',
    'src/Assets/quote2.jpg',
    'src/Assets/quote3.jpg',
])
</script>