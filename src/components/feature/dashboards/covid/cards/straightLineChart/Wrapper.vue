<template>
  <Card>
    <CardHeader>
      <CardTitle cardTitle="New Cases" cardSubtitle="Last 20 days" />
      <CoolButton dropdown>
        Logarithmic
      </CoolButton>
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
import { Card, CardHeader, CardTitle } from "../../../../../shared/card";
import Chart from "./Chart";
import { CoolButton } from "@/components/shared/buttons";

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
    CoolButton
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
              0,
              123,
              126,
              167,
              183,
              187,
              223,
              187,
              247,
              2000,
              3000,
              2750,
              3200,
              3000,
              3500,
              3400,
              3900,
              3875,
              4000,
              3800
            ],
            borderColor: theme.colorGradientLeft,
            borderWidth: 2,
            pointRadius: 0,
            lineTension: 0
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
            display: true,
            scaleLabel: {
              display: true
            },
            gridLines: {
              color: theme.colorBorder,
              zeroLineColor: theme.colorBorder
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
