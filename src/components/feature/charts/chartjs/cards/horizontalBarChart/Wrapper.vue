<template>
  <Card>
    <styled-wrapper>
      <CardHeader>
        <CardTitle cardTitle="Horizontal" />
      </CardHeader>
      <ChartJsChart :height="200" type="HorizontalBar" :chartData="chartData" />
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
        labels: ["Aug", "Sep", "Oct", "Nov"],
        datasets: [
          {
            label: "series1",
            data: [51, 42, 109, 100]
          },
          {
            label: "series2",
            data: [32, 34, 52, 41]
          },
          {
            label: "series2",
            data: [120, 45, 46, 32]
          }
        ]
      }
    };
  }
};
</script>
