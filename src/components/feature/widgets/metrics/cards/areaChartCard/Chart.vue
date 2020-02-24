<template>
  <StyledWrapper>
    <apexchart
      width="100%"
      height="100%"
      type="area"
      :options="options"
      :series="series"
    ></apexchart>
  </StyledWrapper>
</template>

<script>
import { rgba } from "polished";
import { mapGetters } from "vuex";
import styled from "vue-styled-components";
import VueApexCharts from "vue-apexcharts";

const StyledWrapper = styled.div`
  position: relative;
  height: 100px;

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    height: 200px;
  }
`;

export default {
  components: {
    StyledWrapper,
    apexchart: VueApexCharts
  },
  computed: {
    ...mapGetters(["settings"]),
    options: function() {
      if (
        !this.settings ||
        !this.settings.theme ||
        !this.settings.theme.chartColors
      ) {
        console.log("settings is null");
        return undefined;
      }

      const { theme } = this.settings;

      const options = {
        colors: [theme.colorChartGreyDark],
        grid: {
          show: true,
          borderColor: theme.colorBorder,
          padding: {
            top: 0,
            right: -20,
            bottom: -10,
            left: 0
          },
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 1,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: false,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: [0, 90, 100],
            colorStops: []
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
        stroke: {
          curve: "smooth",
          width: 2,
          colors: [rgba(theme.colorAccent, 0.5)]
        },
        yaxis: {
          show: false,
          min: 0
        },
        xaxis: {
          show: false,
          axisBorder: {
            show: false
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
          floating: true,
          offsetX: 10,
          categories: ["Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]
        },
        legend: {
          show: false
        }
      };

      return options;
    }
  },
  data: function() {
    return {
      themeLoaded: false,
      series: [
        {
          name: "series1",
          data: [40, 60, 30, 70, 40, 90, 50]
        }
      ]
    };
  }
};
</script>
