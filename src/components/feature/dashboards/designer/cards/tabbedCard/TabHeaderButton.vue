<template>
  <StyledTabButton :loading="loading" :isActive="isActive">
    <slot> </slot>
    <StyledUnderline v-if="isActive" />
  </StyledTabButton>
</template>

<script>
import styled from "vue-styled-components";

const buttonProps = { isActive: Boolean, loading: Boolean };
const StyledTabButton = styled("button", buttonProps)`
  position: relative;
  background: transparent;
  border: 0;
  height: 60px;
  font-size: 13px;
  font-weight: ${props => (props.isActive ? "bold" : "normal")};
  padding: 0 1rem;
  text-align: center;
  color: ${props =>
    props.isActive ? props.theme.colorAccent : props.theme.colorSubtitle};
`;

const StyledUnderline = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: ${props => props.theme.colorAccent};
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
`;

export default {
  props: {
    isActive: Boolean,
    loading: Boolean
  },
  components: {
    StyledTabButton,
    StyledUnderline
  }
};
</script>
