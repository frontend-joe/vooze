<template>
  <styled-wrapper>
    <apexchart :options="options" :series="series"></apexchart>
  </styled-wrapper>
</template>

<script>
import { mapGetters } from "vuex";
import styled from "vue-styled-components";
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";

Vue.component("apexchart", VueApexCharts);

const StyledWrapper = styled.div`
  transform: translateY(12px);
`;

export default {
  components: {
    StyledWrapper
  },
  computed: {
    ...mapGetters(["settings"]),
    options: function() {
      if (
        !this.settings ||
        !this.settings.theme ||
        !this.settings.theme.chartColors
      ) {
        return undefined;
      }

      const { theme } = this.settings;

      //const colors = theme.chartColors.concat(theme.chartColors);

      return {
        colors: theme.chartColors,
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          pie: {
            customScale: 1,
            donut: {
              size: "80%"
            }
          }
        },
        chart: {
          height: "auto",
          id: "vuechart-example",
          type: "donut"
        }
      };
    }
  },
  data: function() {
    return {
      series: [44, 55, 32]
    };
  }
};
</script>

<style>
.apexcharts-series.apexcharts-pie-series > path {
  stroke: transparent;
}
</style>
