<template>
  <StyledWrapper :loading="loading">
    <Spinner />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Spinner } from "../common";

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
  background: rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.loading ? 1 : 0)};
  visibility: ${props => (props.loading ? "visibile" : "hidden")};
  transition: opacity 0.25s, visibility 0.25s;
`;

export default {
  props: wrapperProps,
  components: {
    StyledWrapper,
    Spinner
  }
};
</script>
