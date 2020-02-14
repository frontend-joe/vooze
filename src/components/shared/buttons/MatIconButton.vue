<template>
  <StyledWrapper
    :circle="circle"
    :backgroundColor="backgroundColor"
    @click="$emit('click', $event)"
    v-bind:style="{ width: width, height: height }"
  >
    <MatIcon
      :forLight="forLight"
      :forDark="forDark"
      :iconSize="iconSize"
      :iconColor="iconColor"
    >
      <slot />
    </MatIcon>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "../icons";
import { darken } from "polished";

const wrapperProps = { circle: Boolean, backgroundColor: String };
const StyledWrapper = styled("button", wrapperProps)`
  padding: 0;
  margin: 0;
  background: ${props =>
    props.circle
      ? props.theme[`color${props.backgroundColor}`]
      : "transparent"};
  border: 0;
  border-radius: ${props => (props.circle ? "50%" : 0)};

  box-shadow: ${props =>
    props.circle ? "0 1px 8px -1px rgba(0,0,0,0.2)" : "none"};

  &:hover {
    background: ${props =>
      props.circle
        ? darken(0.05, props.theme[`color${props.backgroundColor}`])
        : "transparent"};
  }

  &:hover > i {
    color: ${props =>
      props.forDark ? props.theme.colorIconHover : "white"} !important;
  }
`;

export default {
  components: {
    StyledWrapper,
    MatIcon
  },
  props: {
    forDark: Boolean,
    forLight: Boolean,
    iconSize: String,
    iconColor: String,
    circle: Boolean,
    backgroundColor: String,
    click: {
      type: Function,
      required: false
    },
    height: {
      type: String,
      required: false,
      default: "24px"
    },
    width: {
      type: String,
      required: false,
      default: "24px"
    }
  }
};
</script>
