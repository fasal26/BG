<template>
  <div class="banner-container">
    <h1>Unlock the Power of Gold with <strong>Baba Gold</strong></h1>
        <!-- <video width="100%" height="550px" autoplay loop muted playsinline style="object-fit: cover;width: 100%;height: 550px;">
            <source src="../Assets/pexels-crazy-motions-8733007-3840x2160-30fps.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video> -->
        <video src="../Assets/pexels-crazy-motions-8733007-3840x2160-30fps.mp4" width="100%" height="550px" autoplay loop muted playsinline style="object-fit: cover;width: 100%;height: 550px;">
        </video>
  </div>
  <div class="baba-abtus-conatiner">
      <div class="baba-flex baba-abtus">
          <img src="../Assets/scottsdale-mint2.jpg" alt="">
          <div class="baba-flex-col abt-cntnt">
              <h2>About Us</h2>
              <p>
                Baba Gold is the trusted name in bullion and impure gold trading. We are committed to delivering exceptional service and unrivalled quality to our valued customers. With a deep-rooted passion for the precious metal industry, we aim to provide a seamless and rewarding gold trading experience for individuals and businesses alike
              </p>
              <p>
                Our team at Baba Gold comprises seasoned professionals with extensive expertise and knowledge in the bullion and impure gold market
              </p>
              <span class="pointer read-more" @click="handleRoute('/about')">read more</span>
          </div>
      </div>
  </div>
  <Gallery/>
  <!-- <div class="baba-abtus-conatiner baba-abtus-mob">
      <div class="baba-flex baba-abtus">
          <img src="../Assets/our-story.jpg" alt="">
          <div class="baba-flex-col abt-cntnt">
              <h2>Our Vision</h2>
              <p>
                Baba Gold's vision is to be the leading authority and trusted partner in the global bullion and impure gold trading industry. We strive to set the gold standard for excellence, innovation, and customer satisfaction. We shape the future of gold trading with our unwavering commitment to integrity, reliability, and personalized service
              </p>
              <p>
                  Join us on our remarkable journey as we continue to redefine the possibilities of bullion and gold trading
              </p>
              <span class="pointer read-more" @click="handleRoute('/our-vision')">read more</span>
          </div>
      </div>
  </div>
  <div class="baba-abtus-conatiner baba-abtus-mob">
      <div class="baba-flex baba-abtus">
          <img src="../Assets/scottsdale-mint2.jpg" alt="">
          <div class="baba-flex-col abt-cntnt">
              <h2>Our Mission</h2>
              <p>
                Baba Gold empowers individuals and businesses to navigate the world of bullion and impure gold trading with confidence. We are dedicated to providing exceptional service, offering the highest quality gold products, and fostering lasting relationships built on trust and integrity.
              </p>
              <p>
                Guided by our passion for the precious metal industry, we strive to be the premier destination for gold trading. We serve as a reliable and knowledgeable partner for our customers. Our mission is rooted in three key pillars:
              </p>
              <span class="pointer read-more" @click="handleRoute('/our-mission')">read more</span>
          </div>
      </div>
  </div> -->
  <!-- <div class="baba-flex-col doc-padding baba-svc-container" id="services">
      <h2 class="baba-flex">Services</h2>
      <div class="baba-flex cards-container">
          <div class="baba-flex card">
              <img src="../Assets/gold.png" alt="">
              <div class="svc-cntnt">
                  <h4>Designing the Gold and Silver Refinery</h4>
                  <p>Our team of experts designs gold and silver refineries tailored to meet our clients' specific needs and requirements. We consider factors such as processing capacity, desired output quality, and cost-efficiency to create a refinery design that maximizes operational effectiveness
                  <span class="pointer read-more" @click="handleServices('ser1')" style="margin-left: 10px">read more</span>
                  </p>
              </div>
          </div>
          <div class="baba-flex card">
              <img src="../Assets/gold.png" alt="">
              <div class="svc-cntnt">
                  <h4>Designing the Gold and Silver Assay Lab</h4>
                  <p>Baba Gold understands the importance of a well-designed and efficient assay lab for accurate and reliable gold and silver testing. Our gold and silver assay lab is designed to meet industry standards, ensuring precision, safety, and confidentiality throughout the testing process. Here is an overview of the key elements in our assay lab design
                  <span class="pointer read-more" @click="handleServices('ser2')" style="margin-left: 10px">read more</span>
                  </p>
              </div>
          </div>
          <div class="baba-flex card">
              <img src="../Assets/gold.png" alt="">
              <div class="svc-cntnt">
                  <h4>Designing the Value Addition Plant for Ingot Bars</h4>
                  <p>At Baba Gold, our value addition plant is designed to cater to a wide range of ingot bar requirements. We understand the importance of offering diverse options to meet our clients' specific needs and preferences. Here are some of the types of ingot bars produced in our value addition plant
                  <span class="pointer read-more" @click="handleServices('ser3')" style="margin-left: 10px">read more</span>
                  </p>
              </div>
          </div>
          <div class="baba-flex card">
              <img src="../Assets/gold.png" alt="">
              <div class="svc-cntnt">
                  <h4>Advanced Trading Tools</h4>
                  <p>We provide you with advanced trading platforms equipped with powerful tools and features. Analyze market trends, execute trades with precision, and monitor your positions in real-time. Our platforms are designed to enhance your trading experience & help you seize opportunities.</p>
              </div>
          </div>
      </div>
  </div> -->
  <div class="prd-container">
    <h1> Our Products </h1>
        <img src="../Assets/right.png" alt="" class="pointer" @click="handleSlide('prd-img-id')">
    <div class="prd-img-container" id="prd-img-id" style="scroll-behavior: smooth;">
        <div class="prd-img baba-flex-col">
            <img src="../Assets/prd1.png" alt="gold bar">
            <small>50 gm 999.9</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/prd2.png" alt="gold bar">
            <small>100 gm 999.9</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/prd3.png" alt="gold bar">
            <small>250 gm 999.9</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/prd4.png" alt="gold bar">
            <small>500 gm 99.9</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/prd5.jpg" alt="gold bar">
            <small>Kilo bar 995</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/prd6.png" alt="gold bar">
            <small>Kilo bar 999.9</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/prd7.png" alt="gold bar">
            <small>Ten tola bar 999.9</small>
        </div>
    </div>
  </div>
  <!-- <Platform/> -->
  <!-- <Factors/> -->
  <!-- <Trading/> -->
  <Quotes/>
  <div class="baba-abtus-conatiner">
      <div class="baba-flex baba-abtus">
          <div class="srvc-img">
            <Carousel :items-to-show="1" :autoplay="2000" :wrap-around="true">
                <Slide key="1">
                    <div class="carousel__item pointer" @click="handleRoute('/services?id=1')">
                        <img src="/assets/assay2.jpg" class="sv-img" alt="gold" />
                        <p>Designing the Gold and Silver Refinery Feasibility and Setup</p>
                    </div>
                </Slide>
                <Slide key="2">
                    <div class="carousel__item pointer" @click="handleRoute('/services?id=2')">
                        <img src="/assets/refinary.jpg" class="sv-img" alt="gold" />
                        <p>Designing the Gold and Silver Assay Lab</p>
                    </div>
                </Slide>
                <Slide key="3">
                    <div class="carousel__item pointer" @click="handleRoute('/services?id=3')">
                        <img src="/assets/valueaddedplant.jpg" class="sv-img" alt="gold" />
                        <p>Designing the Value Addition Plant for Ingot Bars</p>
                    </div>
                </Slide>
            </Carousel>
          </div>
          <div class="baba-flex-col abt-cntnt abt-cntnt-srvc">
              <h2>Services</h2>
              <p>
                At Baba Gold, we offer a comprehensive range of services to cater to all your gold trading needs. With years of experience in the industry and a team of expert professionals, we are dedicated to providing you with a seamless and rewarding trading experience. Whether you are a seasoned investor or a first-time trader, we have tailored services to assist you in achieving your financial goals.
              </p>
              <span class="pointer read-more" @click="handleRoute('/services')">read more</span>
          </div>
      </div>
  </div>
  <!-- <DescisionMaking/> -->
  <!-- <div class="baba-flex-col doc-padding desc-container">
    <h2 class="baba-flex">Why Choose Baba Gold?</h2>
    <p>Experience the power of gold: Discover the timeless allure and wealth-building potential of gold, a precious metal that has stood the test of time as a reliable investment.
        Expertise you can trust: Our team of seasoned professionals brings years of industry experience and knowledge to help you make informed trading decisions.
        Tailored solutions for you: We understand that every investor is unique, which is why we offer personalized services tailored to your specific needs, risk tolerance, and financial goals.
        Transparent and ethical: At Baba Gold, we uphold the highest ethical standards, ensuring transparency in our pricing, information, and reporting.
        Education and empowerment: We believe in equipping our clients with the knowledge and tools they need to succeed. Benefit from our educational resources, market insights, and expert guidance.
        Discover the World of Bullion and Forex Trading</p>
    <ul class="baba-flex">
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Store of Value</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Diversification</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Hedge against Inflation</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Jewelry and Ornamental Use</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Industrial Applications</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Historical Significance</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Limited Supply</li>
        <li class="baba-flex"><img src="../Assets/001-correct.png" alt="">Investment Asset</li>
    </ul>
  </div> -->
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Gallery from './Gallery.vue';
import Quotes from './Quotes.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import DescisionMaking from './DescisionMaking.vue';
import Platform from './Platform.vue';
import Factors from './Factors.vue'
import Trading from './Trading.vue'
const router = useRouter()

onMounted(() => {
    carousel('prd-img-id')
})

let settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
})

function handleRoute(path){
    router.push(path)
}
const carousel = (id) => {
    const slider = document.getElementById(id);
    if(id && slider){
        let isdown
        let startX
        let scrollLeft
        slider.addEventListener('mousedown', e => {
            isdown = true
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
        })
        document.addEventListener('mouseup', e => {
            isdown = false
        })
        slider.addEventListener('mousemove', e => {
            document.getElementById(id).style.scrollBehavior = "auto"
            e.preventDefault()
            if(!isdown) return
            const x = e.pageX - slider.offsetLeft
            const walk = x - startX
            slider.scrollLeft = scrollLeft - walk
        })
    }
}
function handleSlide(id){
    const slider = document.getElementById(id);
    slider.style.scrollBehavior = "smooth"
    slider.scrollLeft = slider.scrollLeft + 200
}
function handleServices(id){
    router.push(`/services/${id}`)
}

</script>