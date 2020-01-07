<template>
  <Card padding="0px">
    <styled-wrapper>
      <CardHeader>
        <CardTitle cardTitle="Line" />
      </CardHeader>
      <ApexComposedChart
        width="100%"
        height="200px"
        type="line"
        :series="series"
        :categories="categories"
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
      categories: ["Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "series2",
          data: [24, 36, 34, 120, 45, 46, 32]
        }
      ]
    };
  }
};
</script>
