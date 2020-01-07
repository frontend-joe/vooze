<template>
  <Card padding="0px">
    <styled-wrapper>
      <CardHeader>
        <CardTitle cardTitle="Horizontal" />
      </CardHeader>
      <ApexComposedChart
        width="100%"
        height="200px"
        type="bar"
        :series="series"
        :categories="categories"
        horizontal
      />
    </styled-wrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card, CardHeader, CardTitle } from "../../../../../shared/card";
import { ApexComposedChart } from "../../../../../shared/charts";

const StyledWrapper = styled.div`
  position: relative;
`;

export default {
  components: {
    Card,
    CardHeader,
    CardTitle,
    StyledWrapper,
    ApexComposedChart
  },
  data: function() {
    return {
      categories: ["Aug", "Sep", "Oct", "Nov"],
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32]
        },
        {
          name: "series2",
          data: [24, 36, 34, 120]
        }
      ]
    };
  }
};
</script>
