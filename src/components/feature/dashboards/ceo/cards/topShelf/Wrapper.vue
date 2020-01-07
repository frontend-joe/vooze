<template>
  <StyledWrapper>
    <Hidden sm md lg xl>
      <agile
        ref="carousel"
        :slidesToShow="2.5"
        @afterChange="c => (this.currentSlide = c)"
        :dots="false"
        :navButtons="false"
      >
        <TopShelfMobileCard
          :card="card"
          v-for="card in cards"
          :key="card.title"
        />
      </agile>
    </Hidden>

    <Hidden xs>
      <div class="row">
        <div class="col-sm-3" v-for="card in cards" :key="card.title">
          <TopShelfCard :card="card" />
        </div>
      </div>
    </Hidden>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { VueAgile } from "vue-agile";
import TopShelfCard from "./topShelfCard/Wrapper";
import TopShelfMobileCard from "./topShelfMobileCard/Wrapper";
import { Hidden } from "../../../../../shared/responsive";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    agile: VueAgile,
    TopShelfCard,
    TopShelfMobileCard,
    Hidden
  },
  data: function() {
    return {
      cards: [
        {
          title: "Profit",
          value: "88M",
          percentage: 32,
          background: "PrimaryLighten5",
          border: "PrimaryLighten3",
          color: "Primary",
          icon: "ti-Line-Chart-6",
          mobileColor: "Primary",
          isDark: true
        },
        {
          title: "Subs",
          value: "642",
          percentage: 24,
          background: "SecondaryLighten5",
          border: "SecondaryLighten3",
          color: "Secondary",
          icon: "ti-Line-Gallery",
          mobileColor: "Secondary",
          isDark: true
        },
        {
          title: "Apps",
          value: "8",
          percentage: 81,
          background: "PrimaryLighten5",
          border: "PrimaryLighten3",
          color: "Primary",
          icon: "ti-Line-Tablet",
          mobileColor: "White"
        },
        {
          title: "Releases",
          value: "24",
          percentage: 43,
          background: "SecondaryLighten5",
          border: "SecondaryLighten3",
          color: "Secondary",
          icon: "ti-Line-Cog",
          mobileColor: "white"
        }
      ]
    };
  }
};
</script>
