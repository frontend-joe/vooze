<template>
  <styled-wrapper>
    <styled-title :cardSubtitle="cardSubtitle">
      {{ cardTitle }}
    </styled-title>
    <StyledSubtitle :forDark="forDark" v-if="cardSubtitle">
      {{ cardSubtitle }}
    </StyledSubtitle>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const theProps = { cardTitle: String, cardSubtitle: String, forDark: Boolean };

const StyledWrapper = styled.div``;

const StyledTitle = styled("div", theProps)`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: ${props => (props.cardSubtitle ? "0.3rem" : "0")};
`;

const StyledSubtitle = styled("div", theProps)`
  font-size: 12px;
  font-weight: normal;
  color: ${props =>
    props.forDark ? "rgba(255,255,255,0.57)" : props.theme.colorSubtitle};
`;

export default {
  props: theProps,
  components: {
    StyledWrapper,
    StyledTitle,
    StyledSubtitle
  }
};
</script>
