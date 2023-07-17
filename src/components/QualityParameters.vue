<template>
    <div class="quality-container route-padd">
        <h1>Quality Parameters</h1>
        <div class="pdf-container">
            <vue-pdf-embed source="../Assets/ALLOYDOWNFORMULA.pdf" class="pdf-data"/>
        </div>
        <div class="bar-spec-container">
            <div class="bar-head">
                <h2>PURITY SPECIFICATION LIMITS FOR  BARS</h2>
                <h5>Purity / Fineness Acceptance Criteria for Gold Bars</h5>
            </div>
            <table>
                <tr>
                    <th>Gold type</th>
                    <th>Spec</th>
                    <th>Tolerance ppt</th>
                    <th>Min ppt</th>
                    <th>Max ppt</th>
                </tr>
                <tr>
                    <td>GDB</td>
                    <td>999.9</td>
                    <td>0</td>
                    <td>999.90</td>
                    <td>999.99</td>
                </tr>
                <tr>
                    <td>995</td>
                    <td>995.0</td>
                    <td>15</td>
                    <td>994.85</td>
                    <td>995.15</td>
                </tr>
                <tr>
                    <td>999</td>
                    <td>999.0</td>
                    <td>15</td>
                    <td>998.85</td>
                    <td>999.15</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
import VuePdfEmbed from 'vue-pdf-embed'
import { ref } from "vue"

let source1 = ref("src/Assets/ALLOYDOWNFORMULA.pdf")
</script>