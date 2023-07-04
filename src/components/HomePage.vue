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
  <div class="baba-abtus-conatiner baba-abtus-mob">
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
  </div>
  <div class="baba-flex-col doc-padding baba-svc-container" id="services">
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
          <!-- <div class="baba-flex card">
              <img src="../Assets/gold.png" alt="">
              <div class="svc-cntnt">
                  <h4>Advanced Trading Tools</h4>
                  <p>We provide you with advanced trading platforms equipped with powerful tools and features. Analyze market trends, execute trades with precision, and monitor your positions in real-time. Our platforms are designed to enhance your trading experience & help you seize opportunities.</p>
              </div>
          </div> -->
      </div>
  </div>
  <div class="prd-container">
    <h1> Our Products </h1>
        <img src="../Assets/right.png" alt="" class="pointer" @click="handleSlide('prd-img-id')">
    <div class="prd-img-container" id="prd-img-id" style="scroll-behavior: smooth;">
        <div class="prd-img baba-flex-col">
            <img src="../Assets/1kg.jpg" alt="gold bar">
            <small>Gold bar 1 kg</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/goldbar1KD999.jpg" alt="gold bar">
            <small>Gold bar 1 KD 999</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/goldbar1KG995.jpg" alt="gold bar">
            <small>Gold bar 1 KG 995</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/goldbar500GM.jpg" alt="gold bar">
            <small>Gold bar 500 GM</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/goldbarblank10TOLA.jpg" alt="gold bar">
            <small>Gold bar 10 TOLA</small>
        </div>
        <!-- <div class="prd-img baba-flex-col">
            <img src="../Assets/Single-Gold-Bar-PNG-Photos.png" alt="gold bar">
            <small>Emirates 1 Gram 999.9 Purity Gold Bar</small>
        </div>
        <div class="prd-img baba-flex-col">
            <img src="../Assets/Single-Gold-Bar-PNG-Photos.png" alt="gold bar">
            <small>Emirates 1 Gram 999.9 Purity Gold Bar</small>
        </div> -->
    </div>
  </div>
  <Platform/>
  <Factors/>
  <Trading/>
  <DescisionMaking/>
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
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Platform from './Platform.vue';
import Factors from './Factors.vue'
import Trading from './Trading.vue'
import DescisionMaking from './DescisionMaking.vue';
const router = useRouter()

onMounted(() => {
    carousel('prd-img-id')
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