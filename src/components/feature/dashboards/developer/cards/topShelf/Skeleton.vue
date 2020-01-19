<template>
  <SkeletonCard fixedHeight="110px">
    <StyledWrapper>
      <SkeletonRectangle
        skeletonWidth="25%"
        skeletonHeight="12px"
        marginBottom="1rem"
      />
      <SkeletonRectangle
        skeletonWidth="40%"
        skeletonHeight="14px"
        marginBottom="0.75rem"
      />
      <SkeletonRectangle skeletonWidth="30%" skeletonHeight="12px" />
    </StyledWrapper>
  </SkeletonCard>
</template>

<script>
import styled from "vue-styled-components";
import {
  SkeletonCard,
  SkeletonRectangle
} from "../../../../../shared/skeleton";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 1.75rem;
`;

export default {
  components: {
    StyledWrapper,
    SkeletonCard,
    SkeletonRectangle
  }
};
</script>
