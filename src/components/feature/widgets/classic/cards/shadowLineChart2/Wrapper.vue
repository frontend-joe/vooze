<template>
  <Card>
    <CardHeader>
      <CardTitle
        cardTitle="Total Reach"
        cardSubtitle="This month impressions"
      />
      <MatIconButton>
        refresh
      </MatIconButton>
    </CardHeader>
    <StyledCardContent>
      <styled-wrapper>
        <chartist
          id="test"
          v-if="settings && settings.theme && settings.theme.chartColors"
          ratio="ct-double-octave"
          type="Line"
          :event-handlers="eventHandlers"
          :data="chartData"
          :options="chartOptions"
        >
        </chartist>
      </styled-wrapper>
    </StyledCardContent>
  </Card>
</template>

<script>
import { mapGetters } from "vuex";
import { rgba } from "polished";
import styled from "vue-styled-components";
import { MatIconButton } from "../../../../../shared/buttons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../../../../shared/card";
import Vue from "vue";
import Chartist from "chartist";

const StyledWrapper = styled.div`
  max-height: 266px;
  height: 266px;

  & .ct-series .ct-line {
    stroke: url(#shadowLineChartGradient);
    stroke-linecap: round;
  }

  & .ct-grid {
    stroke: ${rgba("black", 0.075)};
    stroke-dasharray: 0;
  }

  & .ct-point {
    display: none;
  }

  & .ct-label.ct-vertical {
    padding-right: 2px;
    color: rgba(0, 0, 0, 0.25);
  }

  & .ct-chart-line {
    filter: drop-shadow(
      0px 35px 5px ${props => rgba(props.theme.colorAccent, 0.25)}
    );
  }

  & .ct-line-marker {
    fill: white;
    stroke: ${props => props.theme.chartColors[0]};
    stroke-width: 4px;
  }
`;

const StyledCardContent = styled(CardContent)`
  padding-bottom: 2.5rem;
`;

export default {
  props: {
    chartTheme: Array
  },
  components: {
    StyledWrapper,
    Card,
    StyledCardContent,
    CardHeader,
    CardTitle,
    MatIconButton
  },
  mounted() {
    this.chartInstance = new Chartist.Line(
      "test",
      this.chartData,
      this.chartOptions
    );
  },
  watch: {
    chartTheme: function(newValue, oldValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        // update chart
        //const element = document.getElementById("test");
        console.log("chartTheme updated", this.chartInstance);

        // this.chartInstance.detach();
        // this.chartInstance.update();
        this.$forceUpdate();
        // element.detach();
      }
    }
  },
  data: function() {
    return {
      chartData: {
        series: [
          {
            name: "series1",
            data: [12, 30, 15, 40, 24, 54, 19, 47, 32]
          }
        ]
      },
      chartOptions: {
        fullWidth: true,
        height: "266px",
        series: {
          series1: {
            showPoint: true
          }
        },
        fixedScaleAxis: true,
        divisor: 4,
        axisX: {
          showGrid: false,
          showLabel: false,
          offset: 0
        },
        axisY: {
          scaleMinSpace: 45,
          showGrid: true,
          labelInterpolationFnc: function(value) {
            return value + "K";
          }
        },
        lineSmooth: Vue.chartist.Interpolation.monotoneCubic({
          tension: 1
        })
      }
    };
  },
  computed: {
    ...mapGetters(["settings"]),
    eventHandlers: function() {
      if (
        !this.settings ||
        !this.settings.theme ||
        !this.settings.theme.chartColors
      ) {
        console.log("settings is null", this.settings);
        return undefined;
      }

      const { theme } = this.settings;

      console.log("settings is there", this.settings);

      return [
        {
          event: "draw",
          fn(ctx) {
            if (ctx.type === "point") {
              if (ctx.index === 5) {
                console.log("ctx", ctx);

                var circle = new Vue.chartist.Svg(
                  "circle",
                  {
                    cx: ctx.x,
                    cy: ctx.y,
                    r: 7
                  },
                  "ct-line-marker"
                );

                ctx.element.replace(circle);
              }
            }
          }
        },
        {
          event: "created",
          fn(ctx) {
            var defs = ctx.svg.elem("defs");
            defs
              .elem("linearGradient", {
                id: "shadowLineChartGradient",
                x1: 0,
                y1: 0,
                x2: 1,
                y2: 0
              })
              .elem("stop", {
                offset: 0,
                "stop-color": "white"
              })
              .parent()
              .elem("stop", {
                offset: 0.05,
                "stop-color": theme.chartColors[0]
              })
              .parent()
              .elem("stop", {
                offset: 0.95,
                "stop-color": theme.chartColors[1]
              })
              .parent()
              .elem("stop", {
                offset: 1,
                "stop-color": "white"
              })
              .parent();
          }
        }
      ];
    }
  }
};
</script>
