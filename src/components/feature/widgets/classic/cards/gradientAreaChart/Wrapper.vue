<template>
  <Card overflowHidden fixedHeight="300px">
    <styled-wrapper>
      <StyledChartWrapper>
        <apexchart
          width="110%"
          type="area"
          :options="options"
          :series="series"
        ></apexchart>
      </StyledChartWrapper>
    </styled-wrapper>
  </Card>
</template>

<script>
import { mapGetters } from "vuex";
import VueApexCharts from "vue-apexcharts";
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";

const StyledWrapper = styled.div``;

const StyledChartWrapper = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(10px);
`;

export default {
  components: {
    StyledWrapper,
    StyledChartWrapper,
    Card,
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      series: [
        {
          name: "series1",
          data: [20, 10, 30, 15, 10]
        }
      ]
    };
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
        markers: {
          size: 5,
          colors: "white",
          strokeColors: theme.colorAccent,
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
          radius: 2,
          offsetX: 0,
          offsetY: 0,
          onClick: undefined,
          onDblClick: undefined,
          hover: {
            size: undefined,
            sizeOffset: 3
          }
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: false,
            opacityFrom: 0.8,
            opacityTo: 0,
            colorStops: [
              {
                offset: 0,
                color: theme.colorGradientLeft,
                opacity: 1
              },
              {
                offset: 100,
                color: theme.colorGradientRight,
                opacity: 50
              }
            ]
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
          labels: {
            show: false
          },
          axisTicks: {
            show: false
          }
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
