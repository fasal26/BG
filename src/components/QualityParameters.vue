<template>
    <div class="quality-container route-padd">
        <h1>Quality Parameters</h1>
        <div class="pdf-container">
            <vue-pdf-embed source="/assets/ALLOYDOWNFORMULA.pdf" class="pdf-data"/>
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
        <div class="bar-spec-container">
            <div class="bar-head">
                <h2>MELTING POINTS & DENSITIES OF ELEMENTS</h2>
            </div>
            <table>
                <tr>
                    <th>Element</th>
                    <th>Symbol</th>
                    <th>Melting Point</th>
                    <th>Density gms/cc</th>
                </tr>
                <tr>
                    <td>Tin</td>
                    <td>Sn</td>
                    <td>232</td>
                    <td>7.31</td>
                </tr>
                <tr>
                    <td>Cadmium</td>
                    <td>Cd</td>
                    <td>322</td>
                    <td>8.65</td>
                </tr>
                <tr>
                    <td>Lead</td>
                    <td>Pb</td>
                    <td>328</td>
                    <td>11.34</td>
                </tr>
                <tr>
                    <td>Zinc</td>
                    <td>Zn</td>
                    <td>420</td>
                    <td>7.14</td>
                </tr>
                <tr>
                    <td>Aluminum</td>
                    <td>Al</td>
                    <td>660</td>
                    <td>2.70</td>
                </tr>
                <tr style="background-color: #a8a3a3;">
                    <td>Silver</td>
                    <td>Ag</td>
                    <td>962</td>
                    <td>10.49</td>
                </tr>
                <tr style="background-color: #ffb100;">
                    <td>Gold </td>
                    <td>Au</td>
                    <td>1064</td>
                    <td>19.3</td>
                </tr>
                <tr style="background-color: #7a45c2;">
                    <td>Copper</td>
                    <td>Cu</td>
                    <td>1085</td>
                    <td>8.92</td>
                </tr>
                <tr>
                    <td>Manganese</td>
                    <td>Mn</td>
                    <td>1246</td>
                    <td>7.47</td>
                </tr>
                <tr>
                    <td>Nickel</td>
                    <td>Ni</td>
                    <td>1455</td>
                    <td>8.908</td>
                </tr>
                <tr>
                    <td>Iron</td>
                    <td>Fe</td>
                    <td>1538</td>
                    <td>7.874</td>
                </tr>
                <tr>
                    <td>Palladium</td>
                    <td>Pd</td>
                    <td>1555</td>
                    <td>12.083</td>
                </tr>
                <tr>
                    <td>Platinum</td>
                    <td>Pt</td>
                    <td>1768</td>
                    <td>21.09</td>
                </tr>
                <tr>
                    <td>Rhodium</td>
                    <td>Rh</td>
                    <td>1964</td>
                    <td>12.45</td>
                </tr>
                <tr>
                    <td>Iridium</td>
                    <td>Ir</td>
                    <td>2266</td>
                    <td>22.56</td>
                </tr>
                <tr>
                    <td>Ruthenium</td>
                    <td>Ru</td>
                    <td>2334</td>
                    <td>12.37</td>
                </tr>
                <tr>
                    <td>Tungsten</td>
                    <td>W</td>
                    <td>3422</td>
                    <td>19.25</td>
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