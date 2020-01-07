<template>
  <styled-wrapper>
    <styled-carousel-wrapper>
      <list-item-carousel :slides="slides" />
    </styled-carousel-wrapper>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import ListItemCarousel from "./ListItemCarousel";

const StyledWrapper = styled.div`
  flex: 0 1 auto;
`;

const StyledCarouselWrapper = styled.div`
  max-width: 250px;
  min-width: 250px;

  @media (max-width: ${props => props.theme.screenWidthMd}) {
    max-width: 100%;
  }
`;

export default {
  props: {
    slides: Array
  },
  components: {
    StyledWrapper,
    StyledCarouselWrapper,
    ListItemCarousel
  }
};
</script>
