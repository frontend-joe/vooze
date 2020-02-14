<template>
  <StyledGlimmer />
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

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
  background: linear-gradient(
    90deg,
    ${props => rgba(props.theme.colorSkeletonGlimmer, 0)} 0%,
    ${props => rgba(props.theme.colorSkeletonGlimmer, 0.5)} 18%,
    ${props => rgba(props.theme.colorSkeletonGlimmer, 0)} 36%
  );
  animation: ${glimmerAnimation} 2.175s infinite;
`;

export default {
  components: {
    StyledGlimmer
  }
};
</script>
