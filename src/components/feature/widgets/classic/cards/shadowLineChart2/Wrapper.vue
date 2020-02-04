<template>
  <Card>
    <CardHeader>
      <CardTitle
        cardTitle="Total Reach"
        cardSubtitle="This month impressions"
      />
    </CardHeader>
    <CardContent>
      <styled-wrapper>
        <chartist
          v-if="settings && settings.theme && settings.theme.chartColors"
          type="Line"
          ratio="ct-major-second"
          :event-handlers="eventHandlers"
          :data="chartData"
          :options="chartOptions"
        >
        </chartist>
      </styled-wrapper>
    </CardContent>
  </Card>
</template>

<script>
import { mapGetters } from "vuex";
import { rgba } from "polished";
import styled from "vue-styled-components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../../../../shared/card";

const StyledWrapper = styled.div`
  & .ct-major-second {
    height: 266px;
    max-height: 266px;
  }

  & .ct-series .ct-line {
    stroke: url(#shadowLineChartGradient);
  }

  & .ct-grid {
    stroke: ${rgba("black", 0.075)};
    stroke-dasharray: 0;
  }

  & .ct-label.ct-vertical {
    padding-right: 2px;
  }

  & .ct-series {
    filter: drop-shadow(
      5px 5px 5px ${props => rgba(props.theme.colorAccent, 0.15)}
    );
  }
`;

export default {
  components: {
    StyledWrapper,
    Card,
    CardContent,
    CardHeader,
    CardTitle
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
        series: {
          series1: {
            showPoint: false
          }
        },
        fixedScaleAxis: true,
        divisor: 4,
        axisX: {
          padding: 20,
          showGrid: false
        },
        axisY: {
          scaleMinSpace: 45,
          showLabels: false,
          showGrid: true,
          labelInterpolationFnc: function(value) {
            return value + "K";
          }
        }
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
            console.log("type", ctx.type);

            if (ctx.type === "line") {
              ctx.element.attr({
                x1: ctx.x1 + 0.001
              });
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
