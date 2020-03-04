<template>
  <StyledWrapper>
    <PageTitle section="Widgets">Charts</PageTitle>

    <div class="row">
      <div class="col-lg-4">
        <GradientPieChart />
      </div>
      <div class="col-lg-8">
        <ShadowLineChart2 :chartTheme="settings.theme.chartColors" />
        <!-- <ShadowLineChart /> -->
      </div>

      <div class="col-lg-8">
        <ShadowBarChart />
        <!-- <ShadowLineChart /> -->
      </div>

      <div class="col-lg-4">
        <ShadowStackedBarChart />
      </div>

      <div class="col-lg-4">
        <ShadowIconCard />
        <GradientAreaChart2 />
        <!-- <GradientAreaChart /> -->
      </div>
      <div class="col-lg-8">
        <TableCard />
      </div>

      <div class="col-lg-4">
        <LineChartCard />
      </div>

      <div class="col-lg-4">
        <AreaChartCard />
      </div>
    </div>
  </StyledWrapper>
</template>

<script>
import { mapGetters } from "vuex";
import styled from "vue-styled-components";
import { PageTitle } from "../../../shared/page";
import {
  LineChart as LineChartCard,
  AreaChart as AreaChartCard
} from "../../../shared/widgets";
// import ShadowLineChart from "./cards/shadowLineChart/Wrapper";
import ShadowLineChart2 from "./cards/shadowLineChart2/Wrapper";
import ShadowStackedBarChart from "./cards/shadowStackedBarChart/Wrapper";
import GradientPieChart from "./cards/gradientPieChart/Wrapper";
import ShadowBarChart from "./cards/shadowBarChart/Wrapper";
import ShadowIconCard from "./cards/shadowIconCard/Wrapper";
// import GradientAreaChart from "./cards/gradientAreaChart/Wrapper";
import GradientAreaChart2 from "./cards/gradientAreaChart2/Wrapper";
import TableCard from "./cards/tableCard/Wrapper";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    PageTitle,
    // ShadowLineChart,
    ShadowLineChart2,
    ShadowStackedBarChart,
    GradientPieChart,
    ShadowBarChart,
    ShadowIconCard,
    // GradientAreaChart,
    GradientAreaChart2,
    TableCard,
    LineChartCard,
    AreaChartCard
  },
  computed: mapGetters(["settings"])
};
</script>
