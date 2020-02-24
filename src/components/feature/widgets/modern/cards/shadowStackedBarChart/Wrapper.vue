<template>
  <Card>
    <CardHeader>
      <CardTitle cardTitle="Conversion Ratio" />
      <MatIconButton>more_vert</MatIconButton>
    </CardHeader>
    <CardContent>
      <styled-wrapper>
        <StyledChartWrapper>
          <chartist
            v-if="settings && settings.theme && settings.theme.chartColors"
            type="Bar"
            ratio="ct-double-octave"
            :event-handlers="eventHandlers"
            :data="chartData"
            :options="chartOptions"
          >
          </chartist>
        </StyledChartWrapper>
        <TitleStack centered label="This month conversion ratio" value="60%" />
      </styled-wrapper>
    </CardContent>
  </Card>
</template>

<script>
import { mapGetters } from "vuex";
import { lighten, rgba } from "polished";
import styled from "vue-styled-components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../../../../shared/card";
import { MatIconButton } from "../../../../../shared/buttons";
import { TitleStack } from "../../../../../shared/common";

const StyledChartWrapper = styled.div`
  height: 200px;
  max-height: 200px;
`;

const StyledWrapper = styled.div`
  & .ct-label {
    color: ${props => props.theme.colorChartLabel};
  }

  & .ct-label.ct-horizontal {
    font-size: 14px;
    padding: 0.5rem 0;
  }

  & .ct-chart-bar {
    filter: drop-shadow(
      0px 15px 15px ${props => rgba(props.theme.colorAccent, 0.25)}
    );
  }

  & .ct-bar {
    stroke-width: 40px;
  }

  & .ct-series-a .ct-bar {
    stroke: url(#gradientA);
  }

  & .ct-series-b .ct-bar {
    stroke: url(#gradientB);
  }

  & .ct-series-c .ct-bar {
    stroke: url(#gradientC);
  }
`;

export default {
  components: {
    StyledWrapper,
    StyledChartWrapper,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    MatIconButton,
    TitleStack
  },
  data: function() {
    return {
      chartData: {
        labels: ["Jul"],
        series: [[5], [2], [3]]
      },
      chartOptions: {
        fullWidth: true,
        height: "200px",
        stackBars: true,
        axisX: {
          padding: 20,
          showGrid: false,
          showLabel: false
        },
        axisY: {
          showGrid: false,
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
            if (ctx.type === "bar") {
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
                id: "gradientA",
                x1: 0,
                y1: 1,
                x2: 0,
                y2: 0
              })
              .elem("stop", {
                offset: 0,
                "stop-color": lighten(0.175, theme.chartColors[0])
              })
              .parent()
              .elem("stop", {
                offset: 1,
                "stop-color": theme.chartColors[0]
              });

            defs
              .elem("linearGradient", {
                id: "gradientB",
                x1: 0,
                y1: 1,
                x2: 0,
                y2: 0
              })
              .elem("stop", {
                offset: 0,
                "stop-color": lighten(0.175, theme.chartColors[1])
              })
              .parent()
              .elem("stop", {
                offset: 1,
                "stop-color": theme.chartColors[1]
              });

            defs
              .elem("linearGradient", {
                id: "gradientC",
                x1: 0,
                y1: 1,
                x2: 0,
                y2: 0
              })
              .elem("stop", {
                offset: 0,
                "stop-color": lighten(0.1, theme.chartColors[2])
              })
              .parent()
              .elem("stop", {
                offset: 1,
                "stop-color": theme.chartColors[2]
              });
          }
        }
      ];
    }
  }
};
</script>
