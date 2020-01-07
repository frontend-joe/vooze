<template>
  <styled-wrapper :floating="floating"><slot /> </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const wrapperProps = { floating: Boolean };
const StyledWrapper = styled("div", wrapperProps)`
  position: ${props => (props.floating ? "absolute" : "relative")};
  width: ${props => (props.floating ? "100%" : "auto")};
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 1.5rem;
`;

export default {
  props: {
    floating: Boolean
  },
  components: {
    StyledWrapper
  }
};
</script>
