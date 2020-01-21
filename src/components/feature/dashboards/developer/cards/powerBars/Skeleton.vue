<template>
  <SkeletonCard padding="0 1.5rem 1.5rem" fixedHeight="278px">
    <StyledTitle>
      <SkeletonRectangle skeletonWidth="40%" skeletonHeight="16px" />
    </StyledTitle>

    <SkeletonRectangle
      skeletonWidth="100%"
      skeletonHeight="12px"
      marginBottom="2.25rem"
    />
    <SkeletonRectangle
      skeletonWidth="75%"
      skeletonHeight="12px"
      marginBottom="2.25rem"
    />
    <SkeletonRectangle
      skeletonWidth="50%"
      skeletonHeight="12px"
      marginBottom="2.25rem"
    />
    <SkeletonRectangle
      skeletonWidth="25%"
      skeletonHeight="12px"
      marginBottom="2.25rem"
    />
  </SkeletonCard>
</template>

<script>
import styled from "vue-styled-components";
import {
  SkeletonCard,
  SkeletonRectangle
} from "../../../../../shared/skeleton";

const StyledTitle = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;

export default {
  components: {
    SkeletonCard,
    SkeletonRectangle,
    StyledTitle
  }
};
</script>
