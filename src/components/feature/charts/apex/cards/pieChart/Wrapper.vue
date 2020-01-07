<template>
  <Card padding="0px">
    <styled-wrapper>
      <CardHeader>
        <CardTitle cardTitle="Pie" />
      </CardHeader>
      <ApexPieChart
        width="100%"
        height="200px"
        type="pie"
        :series="series"
        :labels="labels"
      />
    </styled-wrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card, CardHeader, CardTitle } from "../../../../../shared/card";
import { ApexPieChart } from "../../../../../shared/charts";

const StyledWrapper = styled.div`
  position: relative;
`;

export default {
  components: {
    Card,
    CardHeader,
    CardTitle,
    StyledWrapper,
    ApexPieChart
  },
  data: function() {
    return {
      labels: ["Sep", "Oct", "Nov"],
      series: [31, 40, 28]
    };
  }
};
</script>
