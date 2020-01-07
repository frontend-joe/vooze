<template>
  <Card v-if="chartOptions && series">
    <CardHeader>
      <CardTitle cardTitle="Efficiency" />
      <CoolButton plain dropdown>
        Yearly
      </CoolButton>
    </CardHeader>
    <apexchart
      :width="width"
      :height="height"
      type="line"
      :options="chartOptions"
      :series="series"
      :categories="categories"
    ></apexchart>
  </Card>
</template>

<script>
import { mapGetters } from "vuex";
import { Card, CardHeader, CardTitle } from "../../../../../shared/card";
import { CoolButton } from "../../../../../shared/buttons";
import VueApexCharts from "vue-apexcharts";
import { rgba } from "polished";

export default {
  props: {
    data: Array
  },
  components: {
    Card,
    CardHeader,
    CardTitle,
    apexchart: VueApexCharts,
    CoolButton
  },
  data: function() {
    return {
      width: "100%",
      height: 337,
      type: "line",
      categories: ["Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      series: [
        {
          name: "actual",
          type: "line",
          data: [31, 40, 34, 51, 42, 109, 100]
        },
        {
          name: "potential",
          type: "area",
          data: [11, 32, 23, 32, 26, 52, 41]
        }
      ]
    };
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

      let stroke = {
        curve: "smooth",
        width: [3, 2],
        lineCap: "round",
        borderRadius: 20,
        dashArray: [6, 0],
        colors: [theme.colorChartGreyDark, rgba(theme.chartColors[0], 0.5)]
      };

      const colors = [theme.colorChartGreyDark, theme.chartColors[0]];

      const options = {
        plotOptions,
        colors,
        fill: {
          colors: colors,
          opacity: [1, 0.25]
        },
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
              show: false
            }
          },
          padding: {
            top: -20,
            right: 20,
            bottom: 0,
            left: 20
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
          display: false,
          show: false,
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
        }
      };

      return options;
    }
  }
};
</script>
