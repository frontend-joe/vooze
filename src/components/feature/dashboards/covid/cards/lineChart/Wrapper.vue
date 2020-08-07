<template>
  <Card>
    <styled-wrapper id="anotherTest">
      <CardHeader>
        <CardTitle
          tooltip="Definition of a case goes here"
          cardTitle="Confirmed Cases"
          cardSubtitle="Last 20 days"
        />
        <CoolButton dropdown>
          Worldwide
        </CoolButton>
      </CardHeader>
      <ChartJsChart
        :lineTension="0"
        multicolor
        :height="400"
        :suggestedMax="100000"
        type="Line"
        :chartData="chartData"
      />
    </styled-wrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card, CardHeader, CardTitle } from "../../../../../shared/card";
import { ChartJsChart } from "../../../../../shared/charts";
import { CoolButton } from "@/components/shared/buttons";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    Card,
    CardHeader,
    CardTitle,
    ChartJsChart,
    CoolButton
  },
  data: function() {
    return {
      chartData: {
        fillOpacity: 0.4,
        labels: Array(20)
          .fill()
          .map((_, index) => index + 1),
        datasets: [
          {
            type: "line",
            lineTension: 0.2,
            borderWidth: 3,
            label: "China",
            data: [
              1000,
              2000,
              4000,
              8000,
              16000,
              30000,
              40000,
              50000,
              55000,
              60000,
              62000,
              63000,
              65000,
              66000,
              66500,
              67000,
              65000,
              67000,
              68000,
              75000
            ]
          },
          {
            type: "line",
            lineTension: 0.2,
            borderWidth: 3,
            label: "UK",
            data: [
              500,
              1000,
              2000,
              5000,
              12000,
              24000,
              43000,
              45000,
              50000,
              55000,
              60000,
              61000,
              62000,
              63000,
              64500,
              65000,
              66000,
              65000,
              64000,
              72000
            ]
          },
          {
            type: "line",
            lineTension: 0.2,
            borderWidth: 3,
            label: "Spain",
            data: [
              400,
              800,
              1600,
              3000,
              8000,
              16000,
              32000,
              44000,
              47000,
              49000,
              50000,
              51000,
              52000,
              53000,
              54500,
              55000,
              56000,
              55000,
              64000,
              66000
            ]
          }
        ]
      }
    };
  }
};
</script>
