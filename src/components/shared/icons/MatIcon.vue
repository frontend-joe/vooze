<template>
  <StyledWrapper
    :iconSize="iconSize"
    :iconColor="iconColor"
    :forDark="forDark"
    :forLight="forLight"
    class="material-icons-outlined"
  >
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const theProps = {
  iconColor: String,
  iconSize: String,
  forLight: Boolean,
  forDark: Boolean
};
const StyledWrapper = styled("i", theProps)`
  color: ${props => props.iconColor || props.theme.colorIconActive};
  font-size: ${props => props.iconSize || "24px"};

  ${props => (props.forLight ? `color: ${props.theme.colorIconActive}` : "")}
  ${props => (props.forDark ? `color: white` : "")}
`;

export default {
  props: {
    forDark: Boolean,
    forLight: Boolean,
    iconColor: {
      type: String,
      required: false
    },
    iconSize: {
      type: String,
      required: false
    }
  },
  components: {
    StyledWrapper
  }
};
</script>
