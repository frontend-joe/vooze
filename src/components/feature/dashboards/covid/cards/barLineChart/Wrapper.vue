<template>
  <Card>
    <CardHeader>
      <CardTitle cardTitle="Sales vs Customers" cardSubtitle="Last 20 days" />
      <Legend />
    </CardHeader>
    <StyledChartWrapper>
      <Chart
        v-if="settings && settings.theme && settings.theme.chartColors"
        :chartData="chartDataWithTheme"
        :chartTheme="settings.theme.chartColors"
        :theme="settings.theme"
        :options="optionsWithTheme"
      />
    </StyledChartWrapper>
  </Card>
</template>

<script>
import { mapGetters } from "vuex";
import styled from "vue-styled-components";
import { rgba } from "polished";
import { Card, CardHeader, CardTitle } from "../../../../../shared/card";
import Chart from "./Chart";
import Legend from "./Legend";

const StyledChartWrapper = styled.div`
  width: 100%;
  height: 400px;
  min-height: 400px;
  bottom: 0;
  padding: 0 1rem 0;
`;

export default {
  components: {
    StyledChartWrapper,
    Card,
    CardHeader,
    CardTitle,
    Chart,
    Legend
  },
  computed: {
    ...mapGetters(["settings"]),
    chartDataWithTheme: function() {
      if (
        !this.settings ||
        !this.settings.theme ||
        !this.settings.theme.chartColorsLoads
      ) {
        return undefined;
      }

      const { theme } = this.settings;

      let data = {
        fillOpacity: 0.4,
        labels: Array(20)
          .fill()
          .map((_, index) => index + 1),
        datasets: [
          {
            type: "line",
            label: "Customers",
            yAxisID: "A",
            data: [
              200,
              239,
              239,
              240,
              239,
              278,
              343,
              348,
              356,
              358,
              360,
              360,
              365,
              348,
              356,
              358,
              360,
              360,
              365,
              365
            ],
            borderColor: theme.colorChartLineDark,
            borderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 12,
            pointHoverRadius: 6,
            pointBorderColor: theme.colorChartLineDark,
            pointBackgroundColor: theme.colorCardBackground,
            pointBorderWidth: 2,
            pointHoverBorderColor: theme.colorChartLineDark,
            pointHoverBackgroundColor: theme.colorCardBackground,
            backgroundColor: "transparent",
            lineTension: 0
          },
          {
            type: "bar",
            label: "Sales",
            yAxisID: "B",
            backgroundColor: rgba(theme.colorAccent, 0.625),
            data: [
              2500,
              3000,
              2800,
              3200,
              2500,
              3000,
              2800,
              3200,
              400,
              700,
              500,
              400,
              200,
              250,
              400,
              700,
              500,
              400,
              200,
              250
            ]
          }
        ]
      };

      return data;
    },
    optionsWithTheme: function() {
      if (!this.settings || !this.settings.theme) {
        return undefined;
      }

      const { theme } = this.settings;

      const layout = {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      };

      let scales = {
        xAxes: [
          {
            offset: true,
            display: true,
            scaleLabel: {
              display: true
            },
            gridLines: {
              color: theme.colorBorder,
              zeroLineColor: theme.colorBorder,
              offsetGridLines: true
            },
            ticks: {
              display: true,
              fontFamily: theme.fontFamily,
              fontSize: 12,
              fontStyle: "normal",
              fontColor: theme.colorLabel
            }
          }
        ],
        yAxes: [
          {
            id: "A",
            position: "right",
            ticks: {
              suggestedMax: 50,
              display: true,
              beginAtZero: true,
              fontFamily: theme.fontFamily,
              fontSize: 10,
              fontStyle: "normal",
              fontColor: theme.colorLabel
            },
            gridLines: {
              display: true,
              color: theme.colorBorder,
              zeroLineColor: theme.colorBorder
            }
          },
          {
            id: "B",
            position: "left",
            ticks: {
              suggestedMax: 5000,
              display: true,
              beginAtZero: true,
              fontFamily: theme.fontFamily,
              fontSize: 10,
              fontStyle: "normal",
              fontColor: theme.colorLabel
            },
            gridLines: {
              display: false,
              color: theme.colorBorder,
              zeroLineColor: theme.colorBorder
            }
          }
        ]
      };

      const newOptions = {
        scales,
        layout,
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        id: "myChart"
      };

      return newOptions;
    }
  }
};
</script>
