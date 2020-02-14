<template>
  <StyledWrapper :loading="loading">
    <StyledSkeletonTitle>
      <SkeletonRectangle skeletonWidth="100px" />
    </StyledSkeletonTitle>
    <Spinner />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
//import { SkeletonRectangle } from "../skeleton";
import { Spinner } from "../common";
import SkeletonRectangle from "../skeleton/SkeletonRectangle";

const wrapperProps = {
  loading: Boolean
};

const StyledWrapper = styled("div", wrapperProps)`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colorCardBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.loading ? 1 : 0)};
  visibility: ${props => (props.loading ? "visibile" : "hidden")};
  transition: opacity 0.25s, visibility 0.25s;
`;

const StyledSkeletonTitle = styled.div`
  position: absolute;
  top: 0;
  left: 1.5rem;
  height: 72px;
  display: flex;
  align-items: center;
`;

export default {
  props: wrapperProps,
  components: {
    StyledWrapper,
    Spinner,
    StyledSkeletonTitle,
    SkeletonRectangle
  }
};
</script>
