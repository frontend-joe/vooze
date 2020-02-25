<template>
  <StyledWrapper>
    <apexchart
      width="100%"
      height="100%"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </StyledWrapper>
</template>

<script>
// import { rgba } from "polished";
import { mapGetters } from "vuex";
import styled from "vue-styled-components";
import VueApexCharts from "vue-apexcharts";

const StyledWrapper = styled.div`
  position: relative;
  height: 100px;
  padding: 0 1rem 1rem;

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    height: 100px;
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
        color: [theme.colorAccent],
        grid: {
          show: true,
          borderColor: theme.colorBorder,
          padding: {
            top: -10,
            right: 0,
            bottom: 0,
            left: 10
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
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 4,
          strokeColors: theme.colorAccent,
          colors: [theme.colorCardBackground],
          hover: {
            size: 5
          }
        },
        stroke: {
          curve: "straight",
          width: 2,
          colors: [theme.colorAccent]
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
          axisTicks: {
            show: false
          },
          floating: true,
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
