<template>
    <div class="baba-flex-col baba-svc-container">
        <h2 class="baba-flex">Live Market Watch</h2>
        <div class="tradingview-widget-container" style="height: 825px;">
            <div class="tradingview-widget-container__widget"></div>
                <div class="tradingview-widget-copyright">
            </div>
        </div>
    </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: 'dark',
      dateRange: '1D',
      showChart: true,
      locale: 'en',
      largeChartUrl: '',
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: '100%',
      height: '660',
      borderRadius: '20',
      plotLineColorGrowing: 'rgba(73, 133, 231, 1)',
      plotLineColorFalling: 'rgba(73, 133, 231, 1)',
      gridLineColor: 'rgba(0, 0, 0, 0)',
      scaleFontColor: 'rgba(106, 109, 120, 1)',
      belowLineFillColorGrowing: 'rgba(204, 0, 0, 0.12)',
      belowLineFillColorFalling: 'rgba(73, 133, 231, 0.12)',
      belowLineFillColorGrowingBottom: 'rgba(66, 66, 66, 0)',
      belowLineFillColorFallingBottom: 'rgba(66, 66, 66, 0)',
      symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
      tabs: [
        {
          title: 'Futures',
          symbols: [
            {
              s: 'FXOPEN:XAUUSD',
              d: 'Gold',
            },
            {
              s: 'FXOPEN:XAGUSD',
              d: 'Silver',
            },
            {
              s: 'OANDA:XPTUSD',
              d: 'Platinum',
            },
            {
              s: 'OANDA:XPDUSD',
              d: 'Palladium',
            },
          ],
          originalTitle: 'Futures',
        },
      ],
    });
    document.querySelector('.tradingview-widget-container__widget').appendChild(script);
  });
</script>


  