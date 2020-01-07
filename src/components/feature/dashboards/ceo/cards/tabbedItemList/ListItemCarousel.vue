<template>
  <styled-wrapper>
    <list-item-carousel-dots
      :currentSlide="currentSlide.currentSlide"
      :dots="dots"
      :onDotClicked="onDotClicked"
    />
    <agile
      ref="carousel"
      @afterChange="c => (this.currentSlide = c)"
      :dots="false"
      :navButtons="false"
    >
      <styled-slide v-for="slide in slides" :key="slide.id">
        <list-item-carousel-like-button :liked="slide.liked" />
        <styled-slide-image :src="slide.url" />
      </styled-slide>
    </agile>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { VueAgile } from "vue-agile";
import ListItemCarouselDots from "./ListItemCarouselDots";
import ListItemCarouselLikeButton from "./ListItemCarouselLikeButton";

const StyledWrapper = styled.div`
  position: relative;

  @media (max-width: ${props => props.theme.screenWidthMd}) {
    margin-bottom: 0.75rem;
  }
`;

const StyledSlide = styled.div`
  position: relative;
`;

const StyledSlideImage = styled.img`
  max-height: 400px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export default {
  props: {
    slides: Array
  },
  data: function() {
    return {
      currentSlide: 0
    };
  },
  methods: {
    onDotClicked(dot) {
      this.$refs.carousel.goTo(dot);
    }
  },
  components: {
    StyledWrapper,
    agile: VueAgile,
    StyledSlide,
    StyledSlideImage,
    ListItemCarouselDots,
    ListItemCarouselLikeButton
  },
  computed: {
    dots: function() {
      return this.slides.map((obj, index) => index);
    }
  }
};
</script>
