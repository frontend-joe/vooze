<template>
  <Card>
    <CardHeader>
      <CardTitle cardTitle="Tasks By Status" />
    </CardHeader>
    <CardContent>
      <styled-wrapper>
        <ApexPieChart
          width="100%"
          height="200px"
          type="donut"
          :series="series"
          :labels="labels"
          showCenterLabel
          donutSize="90%"
        />
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
import { ApexPieChart } from "../../../../../shared/charts";

const StyledWrapper = styled.div`
  padding: 1rem 0 0;
`;

export default {
  components: {
    StyledWrapper,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    ApexPieChart
  },
  data: function() {
    return {
      labels: ["Tasks", "Issues", "Bugs"],
      series: [31, 40, 28]
    };
  }
};
</script>
