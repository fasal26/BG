<template>
    <div class="glry-container">
        <Carousel :autoplay="4000" :wrap-around="true">
            <Slide key="1">
                <div class="carousel__item">
                    <img src="../Assets/quote1.jpg" class="quote-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="2">
                <div class="carousel__item">
                    <img src="../Assets/quote2.jpg" class="quote-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="3">
                <div class="carousel__item">
                    <img src="../Assets/quote3.jpg" class="quote-img" alt="gold" />
                </div>
            </Slide>
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