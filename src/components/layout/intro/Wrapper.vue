<template>
  <StyledWrapper :isOpen="isOpen">
    <StyledHeader>
      <CoolButton plain icon="close" iconPosition="right">
        Skip Intro
      </CoolButton>
    </StyledHeader>
    <agile
      ref="carousel"
      @afterChange="c => (this.currentSlide = c)"
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
    <StyledNavButton
      :isDisabled="currentSlide === 0"
      iconSize="30px"
      @click="onPrevButtonClicked"
    >
      keyboard_arrow_left
    </StyledNavButton>
    <StyledNavButton
      :isDisabled="currentSlide === slides.length - 1"
      iconSize="30px"
      isRight
      @click="onNextButtonClicked"
    >
      keyboard_arrow_right
    </StyledNavButton>
    <Dots
      :currentSlide="currentSlide.currentSlide"
      :dots="dots"
      :onDotClicked="onDotClicked"
    />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { VueAgile } from "vue-agile";
import { CoolButton, MatIconButton } from "../../shared/buttons";
import Dots from "./Dots";

const wrapperProps = { isOpen: Boolean };

const StyledWrapper = styled("div", wrapperProps)`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 535px;
  border-radius: 10px;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transform: translateY(
      ${props => (props.isOpen ? "-50%" : "calc(-50% + 2rem)")}
    )
    translateX(-50%);
  background: ${props => props.theme.colorCardBackground};
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.1),
    0 9px 46px 8px rgba(0, 0, 0, 0.08), 0 11px 15px -7px rgba(0, 0, 0, 0.08);

  transition: opacity 0.25s, transform 0.25s, visibility 0.25s;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: flex-end;
  height: 72px;
  width: 100%;
`;

const StyledSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StyledSlideImage = styled.img`
  width: 80%;
  max-height: 160px;
`;

const StyledSlideTitle = styled.div`
  font-size: 24px;
  margin-bottom: 1rem;
  padding: 1.5rem;
  color: ${props => props.theme.colorText};
`;

const StyledSlideText = styled.div`
  font-size: 14px;
  line-height: 1.5;
  padding: 0 1.5rem;
  text-align: center;
  color: ${props => props.theme.colorSubtitle};
`;

const buttonProps = { isRight: Boolean, isDisabled: Boolean };
const StyledNavButton = styled(MatIconButton, buttonProps)`
  position: absolute;
  top: 50%;
  left: ${props => (props.isRight ? "auto" : "0.5rem")};
  right: ${props => (props.isRight ? "0.5rem" : "auto")};
  transform: translateY(-50%);

  & > i {
    ${props =>
      props.isDisabled ? `color: ${props.theme.colorPrimary} !important` : ""}
  }
`;

export default {
  props: wrapperProps,
  components: {
    StyledWrapper,
    agile: VueAgile,
    StyledSlide,
    StyledSlideImage,
    StyledSlideTitle,
    StyledSlideText,
    CoolButton,
    StyledHeader,
    Dots,
    StyledNavButton
  },
  methods: {
    onDotClicked(dot) {
      this.$refs.carousel.goTo(dot);
    },
    async onPrevButtonClicked() {
      const theSlide = await this.currentSlide;
      const theSlideIndex = theSlide.currentSlide;

      if (theSlideIndex > 0) {
        console.log("onPrevButtonClicked", theSlideIndex);
        this.$refs.carousel.goTo(theSlideIndex - 1);
      }
    },
    async onNextButtonClicked() {
      const theSlide = await this.currentSlide;
      const theSlideIndex = theSlide.currentSlide;

      if (theSlideIndex < this.slides.length - 1) {
        console.log("onNextButtonClicked", theSlideIndex);
        this.$refs.carousel.goTo(theSlideIndex + 1);
      }
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
          image: require("../../../assets/images/intro1.svg"),
          title: "Welcome to Vooze",
          text:
            "Vooze is an Admin Template that is inspired by Material Design. It has a huge collection of cards, widgets and other UI components."
        },
        {
          id: 2,
          image: require("../../../assets/images/intro2.svg"),
          title: "Awesome UX",
          text:
            "Vooze is an Admin Template that is inspired by Material Design. It has a huge collection of cards, widgets and other UI components."
        },
        {
          id: 3,
          image: require("../../../assets/images/intro3.svg"),
          title: "Clean Dashboards",
          text:
            "Vooze is an Admin Template that is inspired by Material Design. It has a huge collection of cards, widgets and other UI components."
        }
      ]
    };
  }
};
</script>
