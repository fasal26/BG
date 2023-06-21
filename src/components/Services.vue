<template>
    <div class="baba-flex-col doc-padding baba-svc-container" id="services">
      <h2 class="baba-flex">Services</h2>
      <div class="baba-flex-col cards-container">
          <div class="baba-flex card">
              <img src="../Assets/gold.png" alt="">
              <div class="svc-cntnt">
                  <h4>{{ selectSer.heading }}</h4>
                  <p v-for="(item,i) in selectSer.content" :key="i">
                    <strong v-if="item.heading"> {{ item.heading }}: </strong> {{ item.desc }} </p>
                  <!-- <div v-html="selectSer.content" class="ctnt"></div> -->
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { servcArr } from "../composables/services.js"
import { useRoute } from "vue-router";

const route = useRoute()

let selectSer = ref({})
const slctSrvc = servcArr.value.find(_ => _.id == route.params.id)
if(slctSrvc) selectSer.value = slctSrvc
</script>

<style scoped>
.card{
    max-width: initial;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.svc-cntnt{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.svc-cntnt > p{
    padding-bottom: 20px;
}

.baba-svc-container{
    padding-top: 100px;
}
</style>