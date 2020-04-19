<template>
  <Card padding="0px" v-if="options">
    <styled-wrapper>
      <CardHeader>
        <CardTitle cardTitle="Area" />
      </CardHeader>
      <ApexComposedChart
        width="100%"
        type="area"
        :series="series"
        :categories="categories"
      />
    </styled-wrapper>
  </Card>
</template>

<script>
import { rgba } from "polished";
import { mapGetters } from "vuex";
import styled from "vue-styled-components";
import { Card, CardHeader, CardTitle } from "../../../../../shared/card";
import { ApexComposedChart } from "../../../../../shared/charts";

const StyledWrapper = styled.div`
  position: relative;
`;

export default {
  components: {
    Card,
    CardHeader,
    CardTitle,
    StyledWrapper,
    ApexComposedChart
  },
  computed: {
    ...mapGetters(["settings"]),
    options: function() {
      if (!this.settings || !this.settings.theme) {
        console.log("settings is null");
        return undefined;
      }

      const { theme } = this.settings;

      const options = {
        colors: [theme.colorChart2, theme.colorChart3, theme.colorChart4],
        grid: {
          position: "front",
          show: true,
          borderColor: theme.colorBorder,
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          padding: {
            top: -20,
            right: 20,
            bottom: 0,
            left: 10
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
            rgba(theme.colorChart2, 0.125),
            rgba(theme.colorChart3, 0.25),
            rgba(theme.colorChart4, 0.25)
          ]
        },
        yaxis: {
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
      categories: ["Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "series2",
          data: [24, 36, 34, 120, 45, 46, 32]
        }
      ]
    };
  }
};
</script>
