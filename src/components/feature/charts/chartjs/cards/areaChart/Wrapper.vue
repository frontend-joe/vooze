<template>
  <Card>
    <styled-wrapper class="test" id="testmom">
      <CardHeader>
        <CardTitle cardTitle="Area" />
      </CardHeader>
      <ChartJsChart :height="350" type="Area" :chartData="chartData" />
    </styled-wrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card, CardHeader, CardTitle } from "../../../../../shared/card";
import { ChartJsChart } from "../../../../../shared/charts";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    Card,
    CardHeader,
    CardTitle,
    ChartJsChart
  },
  data: function() {
    return {
      chartData: {
        fillOpacity: 0.4,
        labels: ["Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
          {
            label: "series1",
            data: [31, 40, 28, 51, 42, 109, 100]
          },
          {
            label: "series2",
            data: [11, 32, 45, 32, 34, 52, 41]
          },
          {
            label: "series2",
            data: [24, 36, 34, 120, 45, 46, 32]
          }
        ]
      }
    };
  }
};
</script>
