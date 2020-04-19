<template>
  <styled-wrapper>
    <PageTitle section="Dashboards">COVID-19</PageTitle>

    <div class="row">
      <div class="col-lg-6">
        <Figures :loading="covid.loading" :data="covid.figures" />
      </div>
      <div class="col-lg-6">
        <Stats :loading="covid.loading" :data="covid.stats" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <LineChart />
      </div>
      <div class="col-lg-6">
        <BarLineChart />
      </div>

      <div class="col-lg-6">
        <StraightLineChart />
      </div>
      <div class="col-lg-6">
        <Watch />
      </div>
      <div class="col-lg-6">
        <AffectedAreas />
      </div>
      <div class="col-lg-6">
        <TabbedCard :loading="covid.loading" :data="covid.tabs" />
      </div>

      <!-- <ContentHeader>
      <span>
        Regional Breakdown
      </span>
      <CoolButton plain dropdown>More Options</CoolButton>
    </ContentHeader> -->
    </div>
  </styled-wrapper>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import styled from "vue-styled-components";
import { PageTitle } from "../../../shared/page";
// import { CoolButton } from "../../../shared/buttons";
import Figures from "./cards/figures/Wrapper";
import Stats from "./cards/stats/Wrapper";
import TabbedCard from "./cards/tabbedCard/Wrapper";
import LineChart from "./cards/lineChart/Wrapper";
import AffectedAreas from "./cards/affectedAreas/Wrapper";
import BarLineChart from "./cards/barLineChart/Wrapper";
import StraightLineChart from "./cards/straightLineChart/Wrapper";
import Watch from "./cards/watch/Wrapper";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    Figures,
    Stats,
    PageTitle,
    TabbedCard,
    LineChart,
    AffectedAreas,
    // CoolButton,
    BarLineChart,
    StraightLineChart,
    Watch
  },
  methods: mapActions(["loadCovid"]),
  computed: mapGetters(["covid"]),
  created: function() {
    this.loadCovid();
  }
};
</script>
