<template>
  <StyledWrapper
    :marginBottom="marginBottom"
    :marginRight="marginRight"
    :skeletonSize="skeletonSize"
  />
</template>

<script>
import styled from "vue-styled-components";

const skeletonProps = {
  skeletonSize: {
    type: String,
    default: "50px"
  },
  marginRight: {
    type: String,
    default: "0"
  },
  marginBottom: {
    type: String,
    default: "0.5rem"
  }
};

const StyledWrapper = styled("div", skeletonProps)`
  width: ${props => props.skeletonSize};
  min-width: ${props => props.skeletonSize};
  max-width: ${props => props.skeletonSize};
  height: ${props => props.skeletonSize};
  min-height: ${props => props.skeletonSize};
  max-height: ${props => props.skeletonSize};
  border-radius: 50%;
  background: ${props => props.theme.colorSkeleton};
  margin-right: ${props => props.marginRight};
`;

export default {
  props: skeletonProps,
  components: {
    StyledWrapper
  }
};
</script>
