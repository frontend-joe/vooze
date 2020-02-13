<template>
  <StyledCard loading>
    <StyledWrapper>
      <StyledTextBlock>
        <StyledTitleSkeleton skeletonWidth="40%" skeletonHeight="13px" />
        <StyledValueSkeleton skeletonWidth="30%" />
      </StyledTextBlock>
      <SkeletonCircle skeletonSize="40px" />
    </StyledWrapper>
    <SkeletonRectangle skeletonWidth="100%" skeletonHeight="6px" />
  </StyledCard>
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

const StyledCard = styled(SkeletonCard)`
  height: 100px;

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    height: 124px;
  }
`;

const StyledTextBlock = styled.div`
  margin-right: 1rem;
  flex: 1;
`;

const StyledTitleSkeleton = styled(SkeletonRectangle)`
  margin-bottom: 0.5rem;
`;

const StyledValueSkeleton = styled(SkeletonRectangle)`
  height: 22px;

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    height: 32px;
  }
`;

export default {
  components: {
    StyledWrapper,
    StyledCard,
    SkeletonRectangle,
    SkeletonCircle,
    StyledTextBlock,
    StyledTitleSkeleton,
    StyledValueSkeleton
  }
};
</script>
