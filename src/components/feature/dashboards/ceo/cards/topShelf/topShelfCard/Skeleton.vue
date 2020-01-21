<template>
  <SkeletonCard fixedHeight="100px" loading>
    <StyledWrapper>
      <StyledTextBlock>
        <StyledTitleSkeleton skeletonWidth="40%" skeletonHeight="13px" />
        <SkeletonRectangle skeletonWidth="30%" skeletonHeight="18px" />
      </StyledTextBlock>
      <SkeletonCircle skeletonSize="40px" />
    </StyledWrapper>
    <SkeletonRectangle skeletonWidth="100%" skeletonHeight="6px" />
  </SkeletonCard>
</template>

<script>
import styled from "vue-styled-components";
import {
  SkeletonCard,
  SkeletonRectangle,
  SkeletonCircle
} from "../../../../../../shared/skeleton";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
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
    SkeletonCircle,
    StyledTextBlock,
    StyledTitleSkeleton
  }
};
</script>
