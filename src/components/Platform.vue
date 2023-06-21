<template>
  <div class="platfm-container">
    <h1>When and Where to Buy or Sell Gold</h1>
    <p>
      Baba Gold is your trusted destination for buying or selling gold. We provide a
      seamless and reliable experience for customers looking for gold transactions. Here's
      a guide to help you understand when and where to buy or sell gold.We are your
      trusted destination for buying or selling gold. We provide a seamless and reliable
      experience for customers looking for gold transactions. Here's a guide to help you
      understand when and where to buy or sell gold
    </p>
      <div class="platfm-buysell">
          <div class="pltfm-head"><strong>Where to Buy Gold:</strong></div>
          <div class="baba-flex pltfm-list">
          <strong>Visit Our Bullion Dealers :</strong>
          <p>
              Step into our reputable bullion dealers' locations, where you'll find a wide
              selection of gold products. Our knowledgeable team will guide you through the
              process and help you find the right gold coins, bars, or rounds to suit your
              preferences. Experience our exceptional service and explore gold's world in
              person.
          </p>
          </div>
          <div class="baba-flex pltfm-list">
          <strong>Explore Our Online Platform :</strong>
          <p>
              For a convenient and accessible buying experience, visit our online platform.
              Discover an extensive range of gold products at your fingertips. With just a few
              clicks, you can browse through our inventory, compare prices, and make secure
              purchases from the comfort of your home or office. We bring the gold market to
              you.
              <span class="pointer read-more" v-if="$route.path == '/'" @click="$router.push('/platform')" 
                    style="margin-left: 10px">read more</span>
          </p>
          </div>
      </div>
      <template v-if="$route.path == '/platform'">
        <div class="platfm-buysell">
            <div class="pltfm-head"><strong>Where to Sell Gold:</strong></div>
            <div class="baba-flex pltfm-list">
            <strong>Trust Our Bullion Dealers :</strong>
            <p>
                For a convenient and accessible buying experience, visit our online platform.
                Discover an extensive range of gold products at your fingertips. With just a few
                clicks, you can browse through our inventory, compare prices, and make secure
                purchases from the comfort of your home or office. We bring the gold market to
                you.
            </p>
            </div>
            <div class="baba-flex pltfm-list">
            <strong>Utilize Our Online Selling Platform :</strong>
            <p>
                Take advantage of our onlineselling platform to connect with potential buyers.
                List your gold items saleand reach a wide network of interested parties. Our
                platform ensures transparency and facilitates secure transactions, allowing you to
                sell your gold conveniently and with peace of mind.
            </p>
            </div>
        </div>
        <p>
          Baba Gold prioritizes your satisfaction and strive to offer a seamless and secure
          gold transaction experience. We provide competitive prices, expert guidance, and a
          range of options to meet your unique needs. Whether you prefer the personal touch of
          our physical locations or the convenience of our online platform, we invite you to
          come to us for all your gold buying and selling needs.
        </p>
        <p>
          Visit us today and experience the Baba Gold difference. Our knowledgeable team is
          ready to assist you, answer your questions, and guide you through the world of gold.
          Trust in our expertise, reliability, and commitment to customer service. Gold
          transactions at Baba Gold are hassle-free and rewarding.
        </p>
    </template>
  </div>
</template>
