<template>
  <Card overflowHidden fixedHeight="200px">
    <StyledTopRow>
      <div>
        <StyledLabel>
          Balance
        </StyledLabel>
        <StyledValue>
          24,345
        </StyledValue>
      </div>
      <Chip isGradient hasShadow>+ $800</Chip>
    </StyledTopRow>
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
//import { rgba } from "polished";
import { Card } from "../../../../../shared/card";
import { Chip } from "../../../../../shared/chip";
import Chart from "./Chart";

// const StyledWrapper = styled.div`
//   position: relative;
//   height: 100px;
//   max-height: 100px;
// `;

const StyledChartWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  transform: translateY(10px);
`;

const StyledTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 0;
`;

const StyledLabel = styled.div`
  font-size: 0.85rem;
  color: ${props => props.theme.colorLabel};
  margin-bottom: 0.325rem;
`;

const StyledValue = styled.div`
  font-size: 24px;
`;

export default {
  components: {
    //StyledWrapper,
    StyledChartWrapper,
    StyledTopRow,
    StyledLabel,
    StyledValue,
    Card,
    Chart,
    Chip
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

      let data = {
        fillOpacity: 0.4,
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
          {
            label: "series1",
            backgroundColor: theme.chartColors[0],
            data: [24, 18, 20, 30, 40, 43]
          }
        ]
      };

      return data;
    },
    optionsWithTheme: function() {
      if (!this.settings || !this.settings.theme) {
        return undefined;
      }

      //const { theme } = this.settings;

      const layout = {
        padding: {
          left: -10,
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
              display: false
            },
            gridLines: {
              color: "rgba(0,0,0,0)",
              zeroLineColor: "rgba(0,0,0,0)"
            },
            ticks: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              display: false,
              beginAtZero: true
            },
            gridLines: {
              color: "rgba(0,0,0,0)",
              zeroLineColor: "rgba(0,0,0,0)"
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
