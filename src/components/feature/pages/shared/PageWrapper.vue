<template>
  <StyledWrapper :background="background">
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const wrapperProps = { background: String };
const StyledWrapper = styled("div", wrapperProps)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.background || "#242424"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default {
  props: {
    background: String
  },
  components: {
    StyledWrapper
  }
};
</script>
