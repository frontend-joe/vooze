<template>
  <StyledLink :loading="loading" :color="color">
    <slot />
  </StyledLink>
</template>

<script>
import styled from "vue-styled-components";
import { darken } from "polished";

const linkProps = {
  color: String,
  loading: Boolean
};

const StyledLink = styled("a", linkProps)`
  ${props =>
    props.loading
      ? `display: inline-block;
        width: 50px;
        height: 12px;
        background: ${props.theme.colorSkeleton}
        border-radius: ${props.theme.borderRadius}`
      : ""}

  font-weight: bold;
  font-size: ${props => (props.loading ? "0" : "13px")};
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
  props: linkProps,
  components: {
    StyledLink
  }
};
</script>
