<template>
  <StyledWrapper>
    <SkeletonRectangle
      skeletonWidth="40%"
      skeletonHeight="16px"
      marginBottom="1rem"
    />
    <SkeletonRectangle
      skeletonWidth="20%"
      skeletonHeight="12px"
      marginBottom="0"
    />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { SkeletonRectangle } from "../../../../../shared/skeleton";

const StyledWrapper = styled.div`
  width: 20%;
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default {
  components: {
    StyledWrapper,
    SkeletonRectangle
  }
};
</script>
