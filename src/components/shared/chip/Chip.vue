<template>
  <styled-wrapper :color="color">
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const wrapperProps = {
  color: String
}
const StyledWrapper = styled('div', wrapperProps)`
  display: inline-block;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.color || "red"};
  color: white;
  font-size: 13px;
  padding: 0 0.75rem;
  height: 28px;
  line-height: 28px;
`;

export default {
  props: {
    color: String
  },
  components: {
    StyledWrapper
  }
};
</script>
