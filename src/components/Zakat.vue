<template>
    <div class="baba-flex-col baba-svc-container">
      <!-- <h2 class="baba-flex">Zakat Calculator</h2> -->
      <div class="bar-spec-container">
            <div class="bar-head">
                <h2>Gold Zakat Calculation in AED PER GRAM</h2>
                <!-- <h5>Purity / Fineness Acceptance Criteria for Gold Bars</h5> -->
            </div>
            <table>
                <tr>
                    <th>Gold Karat</th>
                    <th>Purity</th>
                    <th>Gram Price</th>
                    <th>Gold Weight (Gms)</th>
                    <th>Zakat Amount AED</th>
                </tr>
                <tr v-for="(item,i) in list" :key="i">
                    <td>{{ item.gold_karat }}</td>
                    <td>{{ item.purity }}</td>
                    <td contenteditable="false">
                        <input type="number" v-model.number="item.grm_price" @input="clcltZkt(item)"/>
                    </td>
                    <td contenteditable="false">
                        <input type="number" v-model.number="item.gld_wght" @input="clcltZkt(item)"/>
                    </td>
                    <td>
                        <input type="number" readonly v-model="item.zkt_amt" />
                    </td>
                </tr>
                <tr>
                    <td>Sum</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{ total }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from "vue"
    let list = ref([
        {
            gold_karat: 18,
            purity: 750.00,
            grm_price: "",
            gld_wght:"",
            zkt_amt: 0
        },
        {
            gold_karat: 21,
            purity: 875.00,
            grm_price: "",
            gld_wght:"",
            zkt_amt: 0
        },
        {
            gold_karat: 22,
            purity: 916.67,
            grm_price: "",
            gld_wght:"",
            zkt_amt: 0
        },
        {
            gold_karat: 23.88,
            purity: 995.00,
            grm_price: "",
            gld_wght:"",
            zkt_amt: 0
        },
        {
            gold_karat: 24,
            purity: 1000.00,
            grm_price: "",
            gld_wght:"",
            zkt_amt: 0
        },
    ])
    let total = computed(() => {
        let total = 0
        for(let item of list.value){
            total = total + +item.zkt_amt
        }
        return total.toFixed(2)
    })
    function clcltZkt(item){
        let gold_karat_prc = item.purity/1000
        let percConvrt = 2.5/100
        item.zkt_amt = (gold_karat_prc * +item.grm_price * +item.gld_wght * percConvrt).toFixed(2)
    }
</script>