<template>
  <styled-wrapper>
    <ChartJsChart :height="300" type="Donut" :chartData="chartData" />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { ChartJsChart } from "../../../../../shared/charts";

const StyledWrapper = styled.div`
  transform: translateY(10px);
`;

export default {
  components: {
    StyledWrapper,
    ChartJsChart
  },
  data: function() {
    return {
      chartData: {
        fillOpacity: 0.4,
        labels: ["Mobile", "Tablet", "Desktop"],
        datasets: [
          {
            data: [31, 40, 28]
          }
        ]
      }
    };
  }
};
</script>
