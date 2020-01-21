<template>
  <SkeletonCard fixedHeight="195px" isSkeleton loading>
    <StyledCircle skeletonSize="48px" />

    <StyledWrapper>
      <StyledTextBlock>
        <StyledTitleSkeleton skeletonWidth="30%" skeletonHeight="18px" />
        <SkeletonRectangle skeletonWidth="60%" skeletonHeight="13px" />
      </StyledTextBlock>
    </StyledWrapper>
    <SkeletonRectangle skeletonWidth="30%" skeletonHeight="12px" />
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
  justify-content: space-between;
  margin-bottom: 1.75rem;
`;

const StyledCircle = styled(SkeletonCircle)`
  margin-bottom: 1.5rem;
`;

const StyledTextBlock = styled.div`
  margin-right: 1rem;
  flex: 1;
`;

const StyledTitleSkeleton = styled(SkeletonRectangle)`
  margin-bottom: 0.5rem;
`;

export default {
  components: {
    StyledWrapper,
    SkeletonCard,
    SkeletonRectangle,
    // SkeletonCircle,
    StyledCircle,
    StyledTextBlock,
    StyledTitleSkeleton
  }
};
</script>
