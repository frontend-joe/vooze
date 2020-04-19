<template>
  <Card>
    <CardHeader>
      <CardTitle cardTitle="User Statistics" />
      <MatIconButton>refresh</MatIconButton>
    </CardHeader>
    <CardContent>
      <styled-wrapper>
        <StyledFiguresRow class="row">
          <div class="col-6">
            <StyledStatBlock>
              <BadgeIcon color="Primary">trending_up</BadgeIcon>
              <StyledTitleStack label="This year" value="60%" />
            </StyledStatBlock>
          </div>
          <div class="col-6">
            <StyledStatBlock>
              <BadgeIcon color="Secondary">trending_down</BadgeIcon>
              <StyledTitleStack label="Last year" value="40%" />
            </StyledStatBlock>
          </div>
        </StyledFiguresRow>
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
import { BadgeIcon } from "../../../../../shared/icons";
import { TitleStack } from "../../../../../shared/common";

const StyledChartWrapper = styled.div`
  height: 160px;
  max-height: 160px;
`;

const StyledFiguresRow = styled.div`
  margin-bottom: 1.5rem;
  padding: 0 1rem;
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
      5px 5px 5px ${props => rgba(props.theme.colorAccent, 0.15)}
    );
  }

  & .ct-bar {
    stroke-linecap: round;
    stroke-width: 12px;
  }

  & .ct-series-a .ct-bar {
    stroke: url(#gradientA);
  }

  & .ct-series-b .ct-bar {
    stroke: url(#gradientB);
  }
`;

const StyledStatBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;

  @media (min-width: ${props => props.theme.screenWidthSm}) {
    justify-content: center;
  }
`;

const StyledTitleStack = styled(TitleStack)`
  margin-left: 0.75rem;
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
    BadgeIcon,
    StyledFiguresRow,
    StyledTitleStack,
    StyledStatBlock
  },
  data: function() {
    return {
      chartData: {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        series: [
          [5, 4, 3, 7, 5, 10],
          [3, 2, 9, 5, 4, 6]
        ]
      },
      chartOptions: {
        fullWidth: true,
        height: "160px",
        axisX: {
          padding: 20,
          showGrid: false
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
                "stop-color": lighten(0.25, theme.chartColors[0])
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
                "stop-color": lighten(0.25, theme.chartColors[1])
              })
              .parent()
              .elem("stop", {
                offset: 1,
                "stop-color": theme.chartColors[1]
              });
          }
        }
      ];
    }
  }
};
</script>
