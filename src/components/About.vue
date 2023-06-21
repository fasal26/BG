<template>
  <div class="baba-flex baba-abtus" :class="$route.path == '/about' ? 'pt-150' : ''">
    <img src="../Assets/scottsdale-mint2.jpg" alt="" class="abtus-rt" />
    <div class="baba-flex-col abt-cntnt">
      <h2>About Us</h2>
      <p>
        Baba Gold is the trusted name in bullion and impure gold trading. We are committed to
        delivering exceptional service and unrivalled quality to our valued customers. With a
        deep-rooted passion for the precious metal industry, we aim to provide a seamless and
        rewarding gold trading experience for individuals and businesses alike.
      </p>
    </div>
  </div>
  <div class="baba-abtus-desc">
    <p>
      Our team at Baba Gold comprises seasoned professionals with extensive expertise and
      knowledge in the bullion and impure gold market. We stay at the forefront of industry
      trends, diligently analyzing market dynamics and refining our strategies to offer
      valuable insights to our customers. Whether you are a seasoned investor or new to gold
      trading, we are here to guide you on your path to success.
    </p>
    <p>
      At Baba Gold, we take great pride in offering a wide selection of high-quality gold
      products. From meticulously crafted bullion bars and coins to stunning jewelry pieces,
      each item in our collection is carefully sourced and evaluated for its purity,
      authenticity, and craftsmanship. We understand that every customer has unique
      preferences and investment goals, which is why we strive to provide a diverse range of
      options to cater to a wide range of tastes and budgets.
    </p>
    <p>
      Transparency and integrity are our business philosophy cornerstones. We believe in
      providing fair and competitive pricing that accurately reflects current market rates.
      With Baba Gold, you can trade gold with confidence, knowing you are receiving genuine
      value. Our commitment to transparency extends to all aspects of our operations,
      ensuring that you have a clear understanding of our processes and the services we
      provide.
    </p>
    <p>
      We are passionate about building lasting relationships with our customers, and that
      starts with exceptional customer service. Our dedicated team is here to address your
      inquiries, offer personalized recommendations, and provide timely assistance
      throughout your gold trading journey. Your satisfaction and success are our top
      priorities, and we go above and beyond to exceed your expectations.
    </p>
    <p>
      Experience the Baba Gold difference today and unlock gold trading potential. Join our
      community of discerning customers who trust us as their reliable partner in navigating
      the intricacies of the gold market. Let us help you seize opportunities, build wealth,
      and secure your financial future with the timeless allure of gold.
    </p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  let element = document.getElementById("app");
  element.scrollIntoView({
    behavior: "smooth"
  })
})
</script>
