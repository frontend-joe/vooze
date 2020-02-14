<template
  ><StyledWrapper v-if="this.settings.theme.chartColors">
    <BarChart
      v-if="type === 'Bar'"
      :chartTheme="settings.theme.chartColors"
      :height="height"
      :width="width"
      :chartData="chartDataWithTheme"
      :options="optionsWithTheme"
    />
    <LineChart
      v-if="type === 'Line'"
      :chartTheme="settings.theme.chartColors"
      :height="height"
      :width="width"
      :chartData="chartDataWithTheme"
      :options="optionsWithTheme"
    />
    <AreaChart
      v-if="type === 'Area'"
      :chartTheme="settings.theme.chartColors"
      :height="height"
      :width="width"
      :chartData="chartDataWithTheme"
      :options="optionsWithTheme"
    />
    <HorizontalChart
      v-if="type === 'HorizontalBar'"
      :chartTheme="settings.theme.chartColors"
      :height="height"
      :width="width"
      :chartData="chartDataWithTheme"
      :options="optionsWithTheme"
    />
    <PieChart
      v-if="type === 'Pie'"
      :chartTheme="settings.theme.chartColors"
      :height="height"
      :width="width"
      :chartData="chartDataWithTheme"
      :options="optionsWithTheme"
    />
    <DonutChart
      v-if="type === 'Donut'"
      :chartTheme="settings.theme.chartColors"
      :height="height"
      :width="width"
      :chartData="chartDataWithTheme"
      :options="optionsWithTheme"
    />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { mapGetters } from "vuex";
import { rgba } from "polished";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import HorizontalChart from "./HorizontalChart";
import PieChart from "./PieChart";
import DonutChart from "./DonutChart";

const StyledWrapper = styled.div``;

export default {
  props: {
    id: String,
    height: Number,
    width: Number,
    type: String,
    chartData: Object,
    options: {
      type: Object,
      default: function() {
        return {
          responsive: true,
          legend: {
            display: false
          }
        };
      }
    }
  },
  components: {
    StyledWrapper,
    BarChart,
    LineChart,
    AreaChart,
    HorizontalChart,
    PieChart,
    DonutChart
  },
  data: function() {
    return {
      charts: ["Area", "Line", "Bar", "Horizontal", "Pie", "Donut"]
    };
  },
  computed: {
    ...mapGetters(["settings"]),
    chartDataWithTheme: function() {
      if (
        !this.settings ||
        !this.settings.theme ||
        !this.settings.theme.chartColors
      ) {
        return undefined;
      }

      const { theme } = this.settings;
      const barFillOpacity = 0.7;
      const COLORS = theme.chartColors;

      //console.log("chartDataWithTheme", this.settings.theme.chartColors3);

      // switch (this.settings.chartThemeId) {
      //   case "default":
      //     COLORS = theme.chartColors1;
      //     break;
      //   case "alternative":
      //     COLORS = theme.chartColors2;
      //     break;
      //   case "theme":
      //     COLORS = theme.chartColors3;
      //     break;
      // }

      // if (this.type === "Area") {
      //   console.log("chartDataWithTheme", this.settings.theme.chartColors3);
      // }

      for (let [i, d] of this.chartData.datasets.entries()) {
        switch (this.type.toLowerCase()) {
          case "bar": {
            d.backgroundColor = rgba(COLORS[i], barFillOpacity);
            break;
          }
          case "line": {
            d.borderColor = rgba(COLORS[i], 0.7);
            d.borderWidth = 2;
            d.pointRadius = 6;
            d.pointHitRadius = 12;
            d.pointHoverRadius = 6;
            d.pointBorderWidth = 0;
            d.pointBorderColor = "transparent";
            d.pointHoverBorderColor = "white";
            d.pointHoverBackgroundColor = rgba(COLORS[i], 0.7);
            d.backgroundColor = "transparent";
            break;
          }
          case "area": {
            d.borderColor = rgba(COLORS[i], 0.25);
            d.borderWidth = 2;
            d.backgroundColor = rgba(COLORS[i], 0.2);
            d.pointRadius = 6;
            d.pointHitRadius = 12;
            d.pointHoverRadius = 6;
            d.pointBackgroundColor = "transparent";
            d.pointBorderWidth = 0;
            d.pointBorderColor = "transparent";
            d.pointHoverBorderColor = "white";
            d.pointHoverBackgroundColor = rgba(COLORS[i], 0.7);
            break;
          }
          case "horizontalbar": {
            d.backgroundColor = rgba(COLORS[i], barFillOpacity);
            break;
          }
          case "pie": {
            d.backgroundColor = [
              rgba(COLORS[0], barFillOpacity),
              rgba(COLORS[1], barFillOpacity),
              rgba(COLORS[2], barFillOpacity)
            ];
            break;
          }
          case "donut": {
            d.backgroundColor = [
              rgba(COLORS[0], barFillOpacity),
              rgba(COLORS[1], barFillOpacity),
              rgba(COLORS[2], barFillOpacity)
            ];
            break;
          }
        }
      }

      return this.chartData;
    },
    optionsWithTheme: function() {
      if (!this.settings || !this.settings.theme) {
        return undefined;
      }

      const { theme } = this.settings;

      const layout = {
        padding: {
          left: 16,
          right: 16,
          top: 0,
          bottom: 10
        }
      };

      let scales;
      if (this.type !== "Pie" && this.type !== "Donut") {
        scales = {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: false
              },
              gridLines: {
                color: theme.colorBorder,
                zeroLineColor: theme.colorBorder
              },
              ticks: {
                fontFamily: theme.fontFamily,
                fontSize: 12,
                fontStyle: "normal",
                fontColor: theme.colorLabel
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontFamily: theme.fontFamily,
                fontSize: 10,
                fontStyle: "normal",
                fontColor: theme.colorLabel
              },
              borderColor: theme.colorRed,
              display: true,
              gridLines: {
                color: theme.colorBorder,
                zeroLineColor: theme.colorBorder
              }
            }
          ]
        };
      }

      let cutoutPercentage = 0;
      if (this.type === "Donut") {
        cutoutPercentage = 80;
      }

      let segmentShowStroke = true;
      if (this.type === "Pie" || this.type === "Donut") {
        segmentShowStroke = false;
      }

      const newOptions = {
        ...this.options,
        cutoutPercentage,
        scales,
        layout,
        segmentShowStroke,
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      };

      return newOptions;
    }
  }
};
</script>
