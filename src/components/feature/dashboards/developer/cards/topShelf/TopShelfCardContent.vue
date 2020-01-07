<template>
  <StyledWrapper>
    <StyledLeft>
      <StyledValue>
        {{ card.value }}
      </StyledValue>
      <StyledUpDownWrapper :down="card.upDown.down" v-if="card.upDown">
        <StyledUpDownText>
          {{ card.upDown.text }}
        </StyledUpDownText>
        <StyledUpDownIcon iconSize="32px">{{
          card.upDown.down ? "arrow_drop_down" : "arrow_drop_up"
        }}</StyledUpDownIcon>
      </StyledUpDownWrapper>
    </StyledLeft>
    <StyledRight>
      <apexchart
        v-if="chartOptions && card.series"
        width="100%"
        height="130px"
        type="line"
        :options="chartOptions"
        :series="card.series"
      ></apexchart>
    </StyledRight>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import VueApexCharts from "vue-apexcharts";
import { mapGetters } from "vuex";
import { rgba } from "polished";
import { MatIcon } from "../../../../../shared/icons";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 80px;
`;

const StyledLeft = styled.div`
  width: 50%;
  flex: 0 0 50%;
`;

const StyledRight = styled.div`
  top: -40px;
  right: 0;
  width: 100px;
  position: absolute;
`;

const StyledValue = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${props => props.theme.colorText};
`;

const upDownProps = { down: Boolean };
const StyledUpDownWrapper = styled("div", upDownProps)`
  display: flex;
  align-items: center;
  font-size: 14px;

  color: ${props => props.theme.colorSubtitle};

  & > i {
    color: ${props =>
      !props.down ? props.theme.colorRed : props.theme.colorGreen} !important;
  }
`;

const StyledUpDownText = styled.div``;

const StyledUpDownIcon = styled(MatIcon)``;

export default {
  props: {
    card: Object
  },
  components: {
    StyledWrapper,
    StyledLeft,
    StyledRight,
    StyledValue,
    StyledUpDownWrapper,
    StyledUpDownIcon,
    StyledUpDownText,
    apexchart: VueApexCharts
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

      let stroke = {
        curve: "smooth",
        width: 3,
        lineCap: "round",
        borderRadius: 20
      };

      const colors = [rgba(theme[`color${this.card.color}`], 0.5)];

      const options = {
        colors,
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        chart: {
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.15
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: stroke,
        yaxis: {
          show: false,
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
          show: false,
          axisBorder: {
            show: false
          },
          labels: {
            show: false,
            style: {
              fontFamily: theme.fontFamily,
              colors: theme.colorLabel
            }
          },
          axisTicks: {
            show: false
          },
          offsetX: 0
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
