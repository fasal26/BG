<template>
    <div class="baba-flex-col baba-svc-container">
      <h2 class="baba-flex">{{ $route.name }}</h2>
      <strong style="text-align: center;">Click to view</strong>
        <div class="ebook-list">
            <p class="underline-anim" style="position: relative;"><a href="https://www.usdebtclock.org/" target="_blank">US National Debt Clock</a></p>
            <p class="underline-anim" style="position: relative;"><a href="https://www.usdebtclock.org/world-debt-clock.html" target="_blank">World Debt Clock</a></p>
            <p class="underline-anim" style="position: relative;"><a href="https://tradingeconomics.com/country-list/inflation-rate " target="_blank">Trading Economic</a></p>
        </div>
    </div>
</template>

<style scoped>
@media only screen and (max-width: 700px), only screen and (max-device-width: 700px) {
  .ebook-list {
    padding: 25px;
    flex-direction: column;
    background: #ffffff;
  }
}
</style>