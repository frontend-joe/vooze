<template>
  <styled-wrapper
    :primary="primary"
    :minHeight="minHeight"
    :fixedHeight="fixedHeight"
    :padding="padding"
    :overflowHidden="overflowHidden"
    :flexVertical="flexVertical"
    :color="color"
    :isDark="isDark"
  >
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const cardProps = {
  primary: Boolean,
  minHeight: String,
  fixedHeight: String,
  padding: String,
  overflowHidden: Boolean,
  flexVertical: Boolean,
  color: String,
  isDark: Boolean
};
const StyledWrapper = styled("div", cardProps)`
  min-height: ${props => props.minHeight || "auto"};
  height: ${props => props.fixedHeight || "auto"};
  padding: ${props => props.padding || "0"};
  overflow: ${props => (props.overflowHidden ? "hidden" : "visible")};
  display: ${props => (props.flexVertical ? "flex" : "block")};
  flex-direction: ${props => (props.flexVertical ? "column" : "row")};
  position: relative;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.125);
  margin-bottom: 2rem;
  color: ${props =>
    props.primary || props.isDark ? "white" : props.theme.colorText};
  background-color: ${props =>
    props.primary
      ? props.theme.colorPrimary
      : props.color
      ? props.theme[`color${props.color}`]
      : props.theme.colorCardBackground};
  border-radius: ${props => props.theme.borderRadius};
`;

export default {
  props: cardProps,
  components: {
    StyledWrapper
  }
};
</script>
