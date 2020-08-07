<template>
  <Card minHeight="472px" flexVertical>
    <CardHeader>
      <CardTitle
        cardTitle="Patel Medical Supplies"
        cardSubtitle="#4 Ranked Customer"
      />
      <CoolButton plain dropdown>
        YTD Vs Previous
      </CoolButton>
    </CardHeader>
    <styled-wrapper v-if="chartOptions">
      <StyledChartWrapper>
        <apexchart
          width="100%"
          height="260px"
          type="radialBar"
          :options="chartOptions"
          :series="chartSeries"
        ></apexchart>
      </StyledChartWrapper>

      <StyledFiguresWrapper>
        <StyledFigureBlock
          v-for="(figure, index) in figures"
          :key="figure.text"
        >
          <Badge :style="{ background: settings.theme.chartColors[index] }" />
          <StyledFigureBlockLabel>
            {{ figure.text }}
          </StyledFigureBlockLabel>
          <StyledFigureBlockValue>
            {{ figure.value }}
          </StyledFigureBlockValue>
          <StyledFigureIcon>
            arrow_drop_down
          </StyledFigureIcon>
          <StyledFigureDifference>
            {{ figure.percentage }}%
          </StyledFigureDifference>
        </StyledFigureBlock>
      </StyledFiguresWrapper>
    </styled-wrapper>
    <StyledBottomRow>
      <MatIcon :style="{ marginRight: '0.75rem' }">info</MatIcon>
      The watch represents 3 comparisons over the selected date range.
    </StyledBottomRow>
  </Card>
</template>

<script>
import { mapGetters } from "vuex";
import styled from "vue-styled-components";
import VueApexCharts from "vue-apexcharts";
import { Card, CardHeader, CardTitle } from "@/components/shared/card";
import { Badge } from "@/components/shared/common";
import { MatIcon } from "@/components/shared/icons";
import { CoolButton } from "@/components/shared/buttons";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;

  @media (min-width: ${props => props.theme.screenWidthXl}) {
    flex-direction: row;
  }
`;

const StyledChartWrapper = styled.div`
  position: relative;
  flex: 0 0 auto;
`;

// const StyledChartLabel = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

const StyledFiguresWrapper = styled.div`
  flex: 1;
  width: 100%;
  padding: 0 1.5rem;

  @media (min-width: ${props => props.theme.screenWidthXl}) {
    width: auto;
    margin-right: 1.5rem;
    padding: 0;
  }

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    margin-right: 4.5rem;
  }
`;

const StyledFigureBlock = styled.div`
  flex: 1 1 100px;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  border-bottom: 1px solid ${props => props.theme.colorBorder};

  &:last-child {
    border: 0;
  }
`;

const StyledFigureBlockLabel = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.colorSubtitle};
  flex: 1 0 auto;
  margin-left: 1rem;
`;

const StyledFigureBlockValue = styled.div`
  flex: 0 0 auto;
  color: ${props => props.theme.colorText};
  font-size: 1.175rem;
  margin-right: 1rem;
`;

const StyledFigureDifference = styled.div`
  color: ${props => props.theme.colorRed};
`;

const StyledFigureIcon = styled(MatIcon)`
  color: ${props => props.theme.colorRed};
`;

const StyledBottomRow = styled.div`
  border-top: 1px solid ${props => props.theme.colorBorder};
  margin: 0 1.5rem;
  color: ${props => props.theme.colorSubtitle};
  font-size: 0.875rem;
  height: 72px;
  display: flex;
  align-items: center;
`;

export default {
  components: {
    StyledWrapper,
    Card,
    CardHeader,
    CardTitle,
    apexchart: VueApexCharts,
    StyledChartWrapper,
    // StyledChartLabel,
    StyledFiguresWrapper,
    StyledFigureBlock,
    StyledFigureBlockLabel,
    StyledFigureBlockValue,
    StyledFigureIcon,
    StyledFigureDifference,
    Badge,
    CoolButton,
    MatIcon,
    StyledBottomRow
  },
  data: function() {
    return {
      figures: [
        {
          text: "Sales",
          value: "84K",
          percentage: "87"
        },
        {
          text: "Line Items",
          value: "32",
          percentage: "56"
        },
        {
          text: "Avg Price",
          value: "203",
          percentage: "12"
        }
      ]
    };
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
              size: "50%"
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
      return [13, 68, 88];
    }
  }
};
</script>
