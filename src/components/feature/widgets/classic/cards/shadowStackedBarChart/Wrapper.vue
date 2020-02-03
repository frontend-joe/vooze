<template>
  <Card>
    <CardHeader>
      <CardTitle cardTitle="Conversion Ratio" cardSubtitle="Todays audience" />
    </CardHeader>
    <CardContent>
      <styled-wrapper>
        <ChartJsBarChartStacked :chartData="chartData" />
        <!-- <apexchart
          v-if="chartOptions && series"
          width="100%"
          type="bar"
          :options="chartOptions"
          :series="series"
        ></apexchart> -->
      </styled-wrapper>
    </CardContent>
  </Card>
</template>

<script>
//import { mapGetters } from "vuex";
//import { rgba } from "polished";
// import VueApexCharts from "vue-apexcharts";
import styled from "vue-styled-components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../../../../shared/card";
import { ChartJsBarChartStacked } from "../../../../../shared/charts";

const StyledWrapper = styled.div`
  & > div {
    height: 215px;
    max-height: 215px;
  }
`;

export default {
  components: {
    StyledWrapper,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    ChartJsBarChartStacked
    // apexchart: VueApexCharts
  },
  data: function() {
    const barPercentage = 0.5;

    return {
      chartData: {
        fillOpacity: 0.4,
        datasets: [
          {
            barPercentage: barPercentage,
            label: "series1",
            data: [21],
            stack: "test"
          },
          {
            barPercentage: barPercentage,
            label: "series2",
            data: [13],
            stack: "test"
          },
          {
            barPercentage: barPercentage,
            label: "series2",
            data: [5],
            stack: "test"
          }
        ]
      }
    };
  }
};
</script>
