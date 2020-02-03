<template>
  <Card>
    <CardHeader>
      <CardTitle
        cardTitle="Current Balance"
        cardSubtitle="This billing period"
      />
      <MatIconButton>more_vert</MatIconButton>
    </CardHeader>
    <CardContent>
      <styled-wrapper>
        <StyledChartWrapper>
          <chartist
            type="Pie"
            ratio="ct-major-second"
            :data="chartData"
            :options="chartOptions"
          >
          </chartist>
        </StyledChartWrapper>
        <StyledFooter>
          <StyledFooterValue>
            £50,409.23
          </StyledFooterValue>
          <StyledFooterLabel>
            Used balance this billing cycle
          </StyledFooterLabel>
        </StyledFooter>
      </styled-wrapper>
    </CardContent>
  </Card>
</template>

<script>
import { rgba } from "polished";
import styled from "vue-styled-components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../../../../shared/card";
import { MatIconButton } from "../../../../../shared/buttons";

import Plugin from "chartist-plugin-fill-donut";

const StyledChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 0 auto 1rem;
`;

const StyledWrapper = styled.div`
  & .ct-major-second {
    height: 200px;
    max-height: 200px;
  }

  & .ct-series-a .ct-slice-donut {
    stroke: ${props =>
      props.theme.chartColors ? props.theme.chartColors[0] : "red"};
  }

  & .ct-series-b .ct-slice-donut {
    stroke: ${props =>
      props.theme.chartColors ? props.theme.chartColors[1] : "blue"};
  }

  & .ct-series-c .ct-slice-donut {
    stroke: ${props => (props.theme.chartColors ? "#f7f7f7" : "green")};
  }

  & .ct-chart-donut {
    filter: drop-shadow(
      0px 10px 4px ${props => rgba(props.theme.colorAccent, 0.15)}
    );
  }

  & .ct-fill-donut-label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .ct-donut-label-text {
    color: ${props => props.theme.colorSubtitle};
    font-size: 0.875rem;
    margin-bottom: 0.325rem;
    text-shadow: 0px 5px 4px ${props => rgba(props.theme.colorAccent, 0.15)};
  }

  & .ct-donut-label-value {
    font-size: 1.5rem;
    text-shadow: 0px 5px 4px ${props => rgba(props.theme.colorAccent, 0.15)};
  }
`;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

const StyledFooterLabel = styled.div`
  color: ${props => props.theme.colorLabel};
  font-size: 0.875rem;
`;

const StyledFooterValue = styled.div`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export default {
  components: {
    StyledWrapper,
    StyledChartWrapper,
    StyledFooter,
    StyledFooterLabel,
    StyledFooterValue,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    MatIconButton
  },
  data: function() {
    return {
      chartData: {
        series: [1, 2]
      },
      chartOptions: {
        donut: true,
        donutWidth: 10,
        showLabel: false,
        lineSmooth: false,
        plugins: [
          Plugin({
            items: [
              {
                content:
                  '<div class="ct-donut-label-text">Balance</div><div class="ct-donut-label-value">$10K</div>'
              }
            ]
          })
        ]
      }
    };
  }
};
</script>
