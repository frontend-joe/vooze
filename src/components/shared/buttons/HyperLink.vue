<template>
  <StyledLink :color="color">
    <slot />
  </StyledLink>
</template>

<script>
import styled from "vue-styled-components";
import { darken } from "polished";

const linkProps = { color: String };
const StyledLink = styled("a", linkProps)`
  font-weight: bold;
  font-size: 13px;
  color: ${props =>
    props.color ? props.theme[`color${props.color}`] : props.theme.colorAccent};

  &:hover {
    color: ${props =>
      props.color
        ? darken(0.05, props.theme[`color${props.color}`])
        : darken(0.05, props.theme.colorAccent)};
  }
`;

export default {
  props: {
    color: String
  },
  components: {
    StyledLink
  }
};
</script>
