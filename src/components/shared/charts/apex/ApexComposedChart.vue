<template>
  <div v-if="chartOptions">
    <apexchart
      :width="width"
      :height="height"
      :type="type"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { rgba } from "polished";
import { mapGetters } from "vuex";

export default {
  props: {
    width: String,
    height: String,
    options: Object,
    series: Array,
    categories: Array,
    type: String,
    horizontal: Boolean
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

      const plotOptions = {
        bar: {
          horizontal: this.horizontal
        }
      };

      let colors = [];
      let stroke = {
        curve: "smooth",
        width: 2,
        lineCap: "round",
        borderRadius: 20
      };

      const CHARTCOLORS = theme.chartColors;

      if (this.type === "area") {
        colors = CHARTCOLORS;
        stroke = {
          ...stroke,
          colors: [
            rgba(CHARTCOLORS[0], 0.125),
            rgba(CHARTCOLORS[1], 0.25),
            rgba(CHARTCOLORS[2], 0.25)
          ]
        };
      } else if (this.type === "line") {
        colors = CHARTCOLORS;
        stroke = {
          ...stroke,
          colors: [
            rgba(CHARTCOLORS[0], 0.65),
            rgba(CHARTCOLORS[1], 0.65),
            rgba(CHARTCOLORS[2], 0.65)
          ]
        };
      } else if (this.type === "bar") {
        colors = [
          rgba(CHARTCOLORS[0], 0.7),
          rgba(CHARTCOLORS[1], 0.7),
          rgba(CHARTCOLORS[2], 0.7)
        ];
        stroke = {
          ...stroke,
          show: false
        };
      }

      const options = {
        plotOptions,
        colors,
        grid: {
          position: "back",
          show: true,
          borderColor: theme.colorBorder,
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          padding: {
            top: -20,
            right: 20,
            bottom: 0,
            left: 10
          }
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: stroke,
        yaxis: {
          axisBorder: {
            show: true,
            color: theme.colorBorder
          },
          labels: {
            style: {
              fontSize: "10px",
              fontFamily: theme.fontFamily,
              color: theme.colorLabel
            }
          }
        },
        xaxis: {
          axisBorder: {
            show: true,
            color: theme.colorBorder
          },
          labels: {
            style: {
              fontFamily: theme.fontFamily,
              colors: theme.colorLabel
            }
          },
          axisTicks: {
            show: false
          },
          offsetX: 0,
          categories: this.categories
        },
        legend: {
          show: false
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      };

      return options;
    }
  }
};
</script>
