<template>
  <styled-wrapper @click="$emit('click')" :open="open"> </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const theProps = { open: Boolean };
const StyledWrapper = styled("div", theProps)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 12;
  background: rgba(0, 0, 0, 0.25);
  visibility: ${props => (props.open ? "visible" : "hidden")};
  opacity: ${props => (props.open ? 1 : 0)};
  transition: visibility 0.35s, opacity 0.35s;
`;

export default {
  props: {
    open: Boolean
  },
  components: {
    StyledWrapper
  }
};
</script>
