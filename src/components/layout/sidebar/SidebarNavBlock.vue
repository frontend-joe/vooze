<template>
  <styled-wrapper :isOpen="isOpen">
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const wrapperProps = { isOpen: Boolean };
const StyledWrapper = styled("div", wrapperProps)`
  max-height: ${props => (props.isOpen ? "200px" : "40px")};
  overflow: hidden;
  transition: max-height 0.25s;
`;

export default {
  props: {
    isOpen: Boolean
  },
  components: {
    StyledWrapper
  }
};
</script>
