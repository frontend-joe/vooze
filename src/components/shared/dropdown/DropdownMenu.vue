<template>
  <StyledWrapper
    @click="e => e.stopPropagation()"
    :isOpen="isOpen"
    :distance="distance"
    :minWidth="minWidth"
  >
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const menuProps = { isOpen: Boolean, distance: String, minWidth: String };

const StyledWrapper = styled("div", menuProps)`
  position: absolute;
  overflow: hidden;
  top: ${props => props.distance || "64px"};
  right: 0;
  min-width: ${props => props.minWidth || "200px"};
  background: ${props => props.theme.colorCardBackground};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
  border-radius: ${props => props.theme.borderRadius};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: translateY(${props => (props.isOpen ? "0" : "2rem")});

  transition: visibility 0.25s, opacity 0.25s, transform 0.25s;
`;

export default {
  props: menuProps,
  components: {
    StyledWrapper
  }
};
</script>
