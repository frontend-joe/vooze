<template>
  <Card>
    <CardHeader>
      <CardTitle cardTitle="Card" />
    </CardHeader>
    <CardContent>
      <styled-wrapper>
        <chartist
          ratio="ct-major-second"
          type="Pie"
          :data="chartData"
          :options="chartOptions"
        >
        </chartist>
      </styled-wrapper>
    </CardContent>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../../../../shared/card";

const StyledWrapper = styled.div``;

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
        series: [1, 3, 2]
      },
      chartOptions: {
        donut: true,
        lineSmooth: false
      }
    };
  }
};
</script>

<style>
.ct-chart-donut {
  filter: drop-shadow(0px 20px 6px rgba(0, 0, 0, 0.3));
}
</style>
