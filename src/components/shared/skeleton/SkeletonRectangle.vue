<template>
  <StyledWrapper
    :skeletonWidth="skeletonWidth"
    :skeletonHeight="skeletonHeight"
    :marginBottom="marginBottom"
  />
</template>

<script>
import styled from "vue-styled-components";

const skeletonProps = {
  skeletonWidth: {
    type: String,
    default: "50px"
  },
  skeletonHeight: {
    type: String,
    default: "10px"
  },
  marginBottom: {
    type: String,
    default: "0.5rem"
  }
};

const StyledWrapper = styled("div", skeletonProps)`
  width: ${props => props.skeletonWidth};
  height: ${props => props.skeletonHeight};
  margin-bottom: ${props => props.marginBottom}
  border-radius: 0.325rem;
  background: ${props => props.theme.colorSkeleton};
`;

export default {
  props: skeletonProps,
  components: {
    StyledWrapper
  }
};
</script>
