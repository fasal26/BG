<template>
    <div class="glry-container">
        <h1>Gallery</h1>
        <Carousel :items-to-show="3" :autoplay="2000" :wrap-around="true">
            <Slide key="1">
                <div class="carousel__item">
                    <img src="../Assets/gallery1.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="2">
                <div class="carousel__item">
                    <img src="../Assets/gallery2.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="3">
                <div class="carousel__item">
                    <img src="../Assets/gallery3.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="4">
                <div class="carousel__item">
                    <img src="../Assets/gallery4.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="5">
                <div class="carousel__item">
                    <img src="../Assets/gallery5.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="6">
                <div class="carousel__item">
                    <img src="../Assets/gallery6.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="7">
                <div class="carousel__item">
                    <img src="../Assets/gallery7.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="8">
                <div class="carousel__item">
                    <img src="../Assets/gallery8.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="9">
                <div class="carousel__item">
                    <img src="../Assets/gallery9.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="10">
                <div class="carousel__item">
                    <img src="../Assets/gallery10.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="11">
                <div class="carousel__item">
                    <img src="../Assets/gallery11.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="12">
                <div class="carousel__item">
                    <img src="../Assets/gallery12.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="13">
                <div class="carousel__item">
                    <img src="../Assets/gallery13.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="14">
                <div class="carousel__item">
                    <img src="../Assets/gallery14.jpg" class="glry-img" alt="gold" />
                </div>
            </Slide>
            <Slide key="15">
                <div class="carousel__item">
                    <img src="../Assets/gallery15.jpg" class="glry-img" alt="gold" />
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