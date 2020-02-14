<template>
  <Card padding="0.5rem 1.5rem 0.75rem">
    <styled-wrapper v-if="chartOptions">
      <StyledChartWrapper>
        <apexchart
          width="120px"
          height="190px"
          type="radialBar"
          :options="chartOptions"
          :series="chartSeries"
        ></apexchart>
      </StyledChartWrapper>

      <StyledFigureBlock>
        <StyledFigureBlockValue>
          8
        </StyledFigureBlockValue>
        <StyledFigureBlockLabel>
          Tasks
        </StyledFigureBlockLabel>

        <Badge :style="{ background: settings.theme.chartColors[0] }" />
      </StyledFigureBlock>

      <StyledFigureBlock>
        <StyledFigureBlockValue>
          6
        </StyledFigureBlockValue>
        <StyledFigureBlockLabel>
          Bugs
        </StyledFigureBlockLabel>

        <Badge :style="{ background: settings.theme.chartColors[1] }" />
      </StyledFigureBlock>

      <StyledFigureBlock>
        <StyledFigureBlockValue>
          10
        </StyledFigureBlockValue>
        <StyledFigureBlockLabel>
          Issues
        </StyledFigureBlockLabel>

        <Badge :style="{ background: settings.theme.chartColors[2] }" />
      </StyledFigureBlock>
    </styled-wrapper>
  </Card>
</template>

<script>
import { mapGetters } from "vuex";
import styled from "vue-styled-components";
import VueApexCharts from "vue-apexcharts";
import { Card } from "../../../shared/card";
import { Badge } from "../../../shared/common";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledChartWrapper = styled.div`
  position: relative;
  flex: 0 0 auto;
  margin: 0 1rem;
`;

// const StyledChartLabel = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

const StyledFigureBlock = styled.div`
  flex: 1;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 1rem;
  margin-right: 1rem;
  border-right: 1px solid ${props => props.theme.colorBorder};

  &:last-child {
    border: 0;
    margin-right: 0;
  }
`;

const StyledFigureBlockLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colorSubtitle};
  margin-bottom: 1rem;
`;

const StyledFigureBlockValue = styled.div`
  color: ${props => props.theme.colorText};
  font-size: 26px;
  margin-bottom: 0.925rem;
`;

export default {
  components: {
    StyledWrapper,
    Card,
    apexchart: VueApexCharts,
    StyledChartWrapper,
    // StyledChartLabel,
    StyledFigureBlock,
    StyledFigureBlockLabel,
    StyledFigureBlockValue,
    Badge
  },
  computed: {
    ...mapGetters(["settings"]),
    chartOptions: function() {
      if (
        !this.settings ||
        !this.settings.theme ||
        !this.settings.theme.chartColors
      ) {
        return undefined;
      }

      const { theme } = this.settings;

      return {
        grid: {
          show: false,
          padding: {
            left: 0
          }
        },
        stroke: {
          lineCap: "round",
          colors: theme.chartColors
        },
        fill: {
          colors: theme.chartColors
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "30%"
            },
            track: {
              background: theme.colorProgressBackground
            },
            dataLabels: {
              show: true,
              name: {
                show: false
              },
              value: {
                show: false
              },
              total: {
                show: false,
                color: "#373d3f",
                fontSize: "16px",
                formatter: function(w) {
                  return (
                    w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0) /
                      w.globals.series.length +
                    "%"
                  );
                }
              }
            }
          }
        },
        labels: ["Apples", "Oranges", "Bananas"]
      };
    },
    chartSeries: function() {
      return [44, 55, 67];
    }
  }
};
</script>
