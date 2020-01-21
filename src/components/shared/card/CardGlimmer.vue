<template>
  <StyledGlimmer />
</template>

<script>
import styled, { keyframes } from "vue-styled-components";

const glimmerAnimation = keyframes`
  0%   {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const StyledGlimmer = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.35) 18%,
    rgba(255, 255, 255, 0) 36%
  );
  animation: ${glimmerAnimation} 2.175s infinite;
`;

export default {
  components: {
    StyledGlimmer
  }
};
</script>
