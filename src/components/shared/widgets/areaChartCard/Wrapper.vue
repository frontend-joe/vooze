<template>
  <StyledCard>
    <Info />
    <Chart />
  </StyledCard>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../card";
import Chart from "./Chart";
import Info from "./Info";

const StyledCard = styled(Card)`
  cursor: pointer;
`;

export default {
  components: {
    StyledCard,
    Chart,
    Info
  }
};
</script>
