<template>
  <StyledCard v-if="options" padding="0" overflowHidden>
    <CardHeader floating>
      <CardTitle cardTitle="Revenue" cardSubtitle="This year" />
      <Legend />
    </CardHeader>
    <styled-wrapper>
      <apexchart
        width="100%"
        height="100%"
        type="area"
        :options="options"
        :series="series"
      ></apexchart>
    </styled-wrapper>
  </StyledCard>
</template>

<script>
import { rgba } from "polished";
import { mapGetters } from "vuex";
import styled from "vue-styled-components";
import VueApexCharts from "vue-apexcharts";
import { Card, CardHeader, CardTitle } from "../../../../../shared/card";

import Legend from "./Legend";

const StyledWrapper = styled.div`
  position: relative;
  height: 300px;

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    height: 400px;
  }
`;

const StyledCard = styled(Card)`
  height: 300px;

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    height: 400px;
  }
`;

export default {
  components: {
    StyledCard,
    CardHeader,
    CardTitle,
    StyledWrapper,
    Legend,
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
        colors: theme.chartColors,
        grid: {
          show: true,
          borderColor: theme.colorBorder,
          padding: {
            top: 40,
            right: -20,
            bottom: 40,
            left: -25
          },
          xaxis: {
            lines: {
              show: true
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
          colors: [
            rgba(theme.chartColors[0], 0.5),
            rgba(theme.chartColors[1], 0.5)
          ]
        },
        yaxis: {
          show: false
        },
        xaxis: {
          show: true,
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
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      };

      return options;
    }
  },

  // watch: {
  //   settings: {
  //     handler: function(val, oldVal) {
  //       console.log("settings changed", val, oldVal);
  //       this.getOptions();
  //     },
  //     deep: true
  //   }
  // },
  data: function() {
    return {
      themeLoaded: false,
      series: [
        {
          name: "series1",
          data: [5, 40, 5, 40, 12, 25, 20]
        },
        {
          name: "series2",
          data: [11, 24, 13, 32, 18, 52, 41]
        }
      ]
    };
  }
};
</script>
