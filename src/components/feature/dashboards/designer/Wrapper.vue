<template>
  <styled-wrapper>
    <PageTitle>Designer</PageTitle>

    <div class="row">
      <div class="col-lg-6">
        <Figures :loading="designer.loading" :data="designer.figures" />
      </div>
      <div class="col-lg-6">
        <Stats :loading="designer.loading" :data="designer.stats" />
      </div>
    </div>
    <ContentHeader>
      <span>
        Learning Materials
      </span>
      <CoolButton plain dropdown>Explore</CoolButton>
    </ContentHeader>
    <div class="row">
      <div class="col-lg-6">
        <TopTutorial :loading="designer.loading" />
      </div>
      <div class="col-lg-6">
        <TabbedCard :loading="designer.loading" :data="designer.tabs" />
      </div>
    </div>

    <ContentHeader>
      <span>
        Social Media
      </span>

      <CoolButton plain dropdown>More Options</CoolButton>
    </ContentHeader>
    <div class="row">
      <div class="col-lg-12">
        <SocialMedia :loading="designer.loading" :data="designer.socialMedia" />
      </div>
    </div>
  </styled-wrapper>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import styled from "vue-styled-components";
import { PageTitle, ContentHeader } from "../../../shared/page";
import { CoolButton } from "../../../shared/buttons";
import Figures from "./cards/figures/Wrapper";
import Stats from "./cards/stats/Wrapper";
import TopTutorial from "./cards/topTutorial/Wrapper";
import TabbedCard from "./cards/tabbedCard/Wrapper";
import SocialMedia from "./cards/socialMedia/Wrapper";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    Figures,
    Stats,
    TopTutorial,
    PageTitle,
    ContentHeader,
    TabbedCard,
    SocialMedia,
    CoolButton
  },
  methods: mapActions(["loadDesigner"]),
  computed: mapGetters(["designer"]),
  created: function() {
    this.loadDesigner();
  }
};
</script>
