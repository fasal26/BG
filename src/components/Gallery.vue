<template>
    <div class="glry-container">
        <h1>Gallery</h1>
        <Carousel :items-to-show="3" :autoplay="2000" :wrap-around="true">
            <Slide v-for="item in images" :key="item">
                <div class="carousel__item">
                    <img :src="item" class="glry-img" alt="gold" />
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
    'src/Assets/gallery1.jpg',
    'src/Assets/gallery2.jpg',
    'src/Assets/gallery3.jpg',
    'src/Assets/gallery4.jpg',
    'src/Assets/gallery5.jpg',
    'src/Assets/gallery6.jpg',
    'src/Assets/gallery7.jpg',
    'src/Assets/gallery8.jpg',
    'src/Assets/gallery9.jpg',
    'src/Assets/gallery10.jpg',
    'src/Assets/gallery11.jpg',
    'src/Assets/gallery12.jpg',
    'src/Assets/gallery13.jpg',
    'src/Assets/gallery14.jpg',
    'src/Assets/gallery15.jpg',
])
</script>