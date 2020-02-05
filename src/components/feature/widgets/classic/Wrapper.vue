<template>
  <StyledWrapper>
    <PageTitle>Classic</PageTitle>

    <div class="row">
      <div class="col-lg-4">
        <GradientPieChart />
      </div>
      <div class="col-lg-8">
        <ShadowLineChart2 />
        <!-- <ShadowLineChart /> -->
      </div>
      <div class="col-lg-8">
        <ShadowBarChart />
      </div>
      <div class="col-lg-4">
        <ShadowStackedBarChart />
      </div>
    </div>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { PageTitle } from "../../../shared/page";
// import ShadowLineChart from "./cards/shadowLineChart/Wrapper";
import ShadowLineChart2 from "./cards/shadowLineChart2/Wrapper";
import ShadowStackedBarChart from "./cards/shadowStackedBarChart/Wrapper";
import GradientPieChart from "./cards/gradientPieChart/Wrapper";
import ShadowBarChart from "./cards/shadowBarChart/Wrapper";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    PageTitle,
    // ShadowLineChart,
    ShadowLineChart2,
    ShadowStackedBarChart,
    GradientPieChart,
    ShadowBarChart
  }
};
</script>
