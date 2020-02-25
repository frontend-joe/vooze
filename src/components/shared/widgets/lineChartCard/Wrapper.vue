<template>
  <Card>
    <StyledWrapper>
      <Info />
      <Chart />
    </StyledWrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../card";
import Info from "./Info";
import Chart from "./Chart";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    Card,
    Chart,
    Info
  }
};
</script>
