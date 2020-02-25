<template>
  <Card overflowHidden>
    <StyledWrapper>
      <agile
        ref="carousel"
        @afterChange="c => (currentSlide = c)"
        :dots="false"
        :navButtons="false"
      >
        <div v-for="slide in slides" :key="slide.id">
          <styled-slide>
            <styled-slide-image :src="slide.image" />
            <StyledSlideTitle>{{ slide.title }}</StyledSlideTitle>
            <StyledSlideText>
              {{ slide.text }}
            </StyledSlideText>
          </styled-slide>
        </div>
      </agile>
      <StyledDots>
        <CarouselDots
          :currentSlide="currentSlide.currentSlide"
          :dots="dots"
          :onDotClicked="onDotClicked"
        />
      </StyledDots>
    </StyledWrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { CarouselDots } from "../../../../../shared/carousel";
import { VueAgile } from "vue-agile";

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const StyledSlideImage = styled.img`
  width: 100%;
`;

const StyledSlideTitle = styled.div`
  font-size: 16px;
  margin-bottom: 1rem;
  padding: 1.5rem 1.5rem 0;
  color: ${props => props.theme.colorText};
`;

const StyledSlideText = styled.div`
  font-size: 14px;
  line-height: 1.5;
  padding: 0 1.5rem 0;
  margin-bottom: 1rem;
  color: ${props => props.theme.colorSubtitle};
`;

const StyledDots = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
`;

export default {
  components: {
    StyledWrapper,
    Card,
    agile: VueAgile,
    StyledSlide,
    StyledSlideImage,
    StyledSlideTitle,
    StyledSlideText,
    CarouselDots,
    StyledDots
  },
  methods: {
    onDotClicked(dot) {
      this.$refs.carousel.goTo(dot);
    }
  },
  computed: {
    dots: function() {
      return this.slides.map((obj, index) => index);
    }
  },
  data: function() {
    return {
      currentSlide: 0,
      slides: [
        {
          id: 1,
          image: require("../../../../../../assets/images/taj1.jpg"),
          title: "Explore: Taj Mahal",
          text: "One of the worlds most beautiful wonders."
        },
        {
          id: 2,
          image: require("../../../../../../assets/images/taj2.jpg"),
          title: "Explore: Taj Mahal",
          text: "One of the worlds most beautiful wonders."
        },
        {
          id: 3,
          image: require("../../../../../../assets/images/taj3.jpg"),
          title: "Explore: Taj Mahal",
          text: "One of the worlds most beautiful wonders."
        }
      ]
    };
  }
};
</script>
