<template>
  <styled-wrapper @click="$emit('set-active-tab', tabId)" :active="active">
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const buttonProps = { active: Boolean };
const StyledWrapper = styled("button", buttonProps)`
  background: ${props => (props.active ? "white" : "transparent")}
  color: ${props => props.active ? props.theme.colorPrimary : props.theme.colorSubtitle};
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  padding: 0 0.75rem;
  border: 0;
  font-size: 13px;
  height: 32px;
  outline: none;
  -webkit-appearance: none;
`;

export default {
  props: {
    active: Boolean,
    tabId: String
  },
  components: {
    StyledWrapper
  }
};
</script>
