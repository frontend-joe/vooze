<template>
  <styled-wrapper>
    <PageTitle>Chartjs</PageTitle>
    <div class="row">
      <div class="col-md-6">
        <AreaChart />
      </div>
      <div class="col-md-6">
        <LineChart />
      </div>
      <div class="col-md-6">
        <BarChart />
      </div>
      <div class="col-md-6">
        <HorizontalBarChart />
      </div>
      <div class="col-md-6">
        <PieChart />
      </div>
      <div class="col-md-6">
        <DonutChart />
      </div>
    </div>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { PageTitle } from "../../../shared/page";
import BarChart from "./cards/barChart/Wrapper";
import AreaChart from "./cards/areaChart/Wrapper";
import LineChart from "./cards/lineChart/Wrapper";
import HorizontalBarChart from "./cards/horizontalBarChart/Wrapper";
import PieChart from "./cards/pieChart/Wrapper";
import DonutChart from "./cards/donutChart/Wrapper";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    PageTitle,
    BarChart,
    AreaChart,
    LineChart,
    HorizontalBarChart,
    PieChart,
    DonutChart
  }
};
</script>
