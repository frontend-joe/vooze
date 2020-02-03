<template>
  <StyledWrapper>
    <PageTitle>Classic</PageTitle>

    <div class="row">
      <div class="col-lg-6">
        <ShadowLineChart />
      </div>
      <div class="col-lg-3">
        <ShadowStackedBarChart />
      </div>
      <div class="col-lg-3">
        <GradientPieChart />
      </div>
    </div>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { PageTitle } from "../../../shared/page";
import ShadowLineChart from "./cards/shadowLineChart/Wrapper";
import ShadowStackedBarChart from "./cards/shadowStackedBarChart/Wrapper";
import GradientPieChart from "./cards/gradientPieChart/Wrapper";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    PageTitle,
    ShadowLineChart,
    ShadowStackedBarChart,
    GradientPieChart
  }
};
</script>
