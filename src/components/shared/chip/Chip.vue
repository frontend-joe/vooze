<template>
  <styled-wrapper
    :color="color"
    :themeColor="themeColor"
    :hasShadow="hasShadow"
    :isGradient="isGradient"
    :isRounded="isRounded"
  >
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const wrapperProps = {
  color: String,
  themeColor: String,
  isGradient: Boolean,
  isRounded: Boolean,
  hasShadow: Boolean
};
const StyledWrapper = styled("div", wrapperProps)`
  display: inline-block;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-size: 0.85rem;
  padding: 0 0.75rem;
  height: 34px;
  line-height: 33px;

  ${props => (props.color ? `background: ${props.color}` : "")};
  ${props => (props.isGradient ? props.theme.colorPrimaryGradient : "")};

  ${props => (props.isRounded ? "border-radius: 17px; padding: 0 1rem;" : "")};

  ${props =>
    props.themeColor
      ? `background: ${props.theme[`color${props.themeColor}`]}`
      : ""}

  ${props =>
    props.hasShadow
      ? `box-shadow: 0 6px 20px 0 ${rgba(props.theme.colorAccent, 0.5)}`
      : ""};
`;

export default {
  props: wrapperProps,
  components: {
    StyledWrapper
  }
};
</script>
