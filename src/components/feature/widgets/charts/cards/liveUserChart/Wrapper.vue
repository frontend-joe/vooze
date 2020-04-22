<template>
  <StyledCard flexVertical>
    <styled-wrapper>
      <StyledTitle>Realtime Users</StyledTitle>
      <StyledChartWindow>
        <StyledChartWrapper>
          <apexchart
            width="300px"
            height="160px"
            type="area"
            :options="options"
            :series="series"
          ></apexchart>
        </StyledChartWrapper>
        <StyledChartWindowLabel>
          275
        </StyledChartWindowLabel>
      </StyledChartWindow>
      <apexchart
        width="100%"
        height="130px"
        type="bar"
        :options="barChartOptions"
        :series="barChartSeries"
      ></apexchart>
    </styled-wrapper>
    <StyledBottomRow>
      <span>12:00AM</span>
      <span>1:00PM</span>
    </StyledBottomRow>
  </StyledCard>
</template>

<script>
import { mapGetters } from "vuex";
import VueApexCharts from "vue-apexcharts";
import styled from "vue-styled-components";
import { rgba } from "polished";
import { Card } from "@/components/shared/card";

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(Card)`
  padding: 2rem 1rem 1.5rem;
  background-image: linear-gradient(
    to bottom,
    ${props => rgba(props.theme.colorGradientLeft, 0.67)},
    ${props => props.theme.colorGradientRight} 100%
  );

  color: #ffffff;
`;

const StyledTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const StyledChartWindow = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #e2e2e2;
`;

const StyledChartWindowLabel = styled.div`
  position: relative;
  z-index: 1;
  font-size: 2rem;
  color: #606060;
`;

const StyledChartWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`;

export default {
  components: {
    StyledWrapper,
    StyledChartWrapper,
    StyledCard,
    StyledTitle,
    apexchart: VueApexCharts,
    StyledChartWindow,
    StyledChartWindowLabel,
    StyledBottomRow
  },
  data: function() {
    return {
      series: [
        {
          name: "series1",
          data: [20, 10, 30, 15, 10, 20, 10, 30, 15, 10]
        }
      ],
      barChartSeries: [
        {
          data: [20, 10, 30, 15, 10, 20, 10, 30, 15, 10]
        }
      ],
      barChartOptions: {
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: -20
          }
        },
        fill: {
          colors: ["#000000"],
          opacity: 0.2
        },
        chart: {
          toolbar: {
            show: false
          },
          parentHeightOffset: 0
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          width: 2,
          colors: "rgba(0,0,0,0)"
        },
        yaxis: {
          min: 0,
          show: false,
          lines: {
            show: false
          },
          labels: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          enabled: false
        }
      }
    };
  },
  methods: {
    updateChart() {
      let newData = this.series[0].data;
      newData.splice(0, 1);

      const lastValue = newData[newData.length - 1];

      const max = 40;
      const min = 1;

      let newDataMin, newDataMax;

      if (lastValue > max / 2) {
        newDataMax = max / 2;
        newDataMin = min + 10;
      } else {
        newDataMax = max - 10;
        newDataMin = max / 2;
      }

      // const newData = this.series[0].data.map(() => {
      //   return ;
      // });

      newData.push(
        Math.floor(Math.random() * (newDataMax - newDataMin + 1)) + newDataMin
      );

      this.series = [
        {
          data: newData
        }
      ];
    }
  },
  mounted() {
    //let timer = 0;
    setInterval(() => {
      //if (timer < 100000) {
      //if (timer > 1000) {
      this.updateChart();
      //}
      // console.log("setInterval");
      //timer = timer + 1000;
      //}
    }, 1000);
  },
  computed: {
    ...mapGetters(["settings"]),
    options: function() {
      //console.log("settings", settings);
      //console.log("this.settings", this.settings);

      if (
        !this.settings ||
        !this.settings.theme ||
        !this.settings.theme.chartColors
      ) {
        console.log("settings is null");
        return undefined;
      }

      const { theme } = this.settings;

      console.log("theme", theme);

      const options = {
        colors: [theme.colorAccent],
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }
        },
        fill: {
          colors: ["#fbc00a"],
          opacity: 0.75,
          type: "solid"
        },
        chart: {
          toolbar: {
            show: false
          },
          parentHeightOffset: 0,
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              enabled: true,
              speed: 1000
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          width: 2,
          colors: theme.colorAccent
        },
        yaxis: {
          min: 0,
          show: false,
          lines: {
            show: false
          },
          labels: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          enabled: false
        }
      };

      return options;
    }
  }
};
</script>
