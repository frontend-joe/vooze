<template>
  <Card>
    <styled-wrapper>
      <CardHeader>
        <CardTitle cardTitle="Pie" />
      </CardHeader>
      <ChartJsChart :height="350" type="Pie" :chartData="chartData" />
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
        labels: ["Mobile", "Tablet", "Desktop"],
        datasets: [
          {
            label: "series1",
            data: [31, 40, 28]
          }
        ]
      }
    };
  }
};
</script>
