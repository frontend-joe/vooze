<template>
  <SkeletonCard fixedHeight="130px" padding="0" hasLabel isSkeleton loading>
    <StyledWrapper>
      <StyledTextBlock>
        <SkeletonRectangle
          skeletonWidth="70%"
          skeletonHeight="16px"
          marginBottom="0.75rem"
        />
        <SkeletonRectangle
          skeletonWidth="50%"
          skeletonHeight="12px"
          marginBottom="0"
        />
      </StyledTextBlock>
      <SkeletonCircle skeletonSize="48px" />
    </StyledWrapper>
  </SkeletonCard>
</template>

<script>
import styled from "vue-styled-components";
import {
  SkeletonCard,
  SkeletonRectangle,
  SkeletonCircle
} from "../../../../../shared/skeleton";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;
  height: 130px;
`;

const StyledTextBlock = styled.div`
  flex: 1;
`;

export default {
  components: {
    StyledWrapper,
    SkeletonCard,
    SkeletonRectangle,
    SkeletonCircle,
    StyledTextBlock
  }
};
</script>
