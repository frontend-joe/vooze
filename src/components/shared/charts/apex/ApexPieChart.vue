<template>
  <div v-if="chartOptions">
    <apexchart
      :width="width"
      :height="height"
      :type="type"
      :options="chartOptions"
      :series="series"
      :showCenterLabel="showCenterLabel"
      :donutSize="donutSize"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapGetters } from "vuex";

export default {
  props: {
    width: String,
    height: String,
    series: Array,
    type: String,
    showCenterLabel: Boolean,
    donutSize: String
  },
  components: {
    apexchart: VueApexCharts
  },
  computed: {
    ...mapGetters(["settings"]),
    chartOptions: function() {
      if (
        !this.settings ||
        !this.settings.theme ||
        !this.settings.theme.chartColors
      ) {
        return undefined;
      }

      const { theme } = this.settings;
      const colors = theme.chartColors;

      const options = {
        colors,
        plotOptions: {
          pie: {
            donut: {
              size: this.donutSize || "80%",
              labels: {
                show: this.showCenterLabel || false,
                name: {
                  show: false
                },
                value: {
                  fontFamily: theme.fontFamily,
                  fontSize: "32px",
                  color: theme.colorText
                },
                total: {
                  show: true
                }
              }
            }
          }
        },
        stroke: {
          show: false,
          width: 0
        },
        legend: {
          show: false
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        }
      };

      return options;
    }
  }
};
</script>
