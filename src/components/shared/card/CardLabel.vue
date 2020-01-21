<template>
  <StyledLabel :loading="loading" :isSkeleton="isSkeleton">
    <slot />
  </StyledLabel>
</template>

<script>
import styled from "vue-styled-components";

const labelProps = { loading: Boolean, isSkeleton: Boolean };

const StyledLabel = styled("div", labelProps)`
  position: absolute;
  top: 0;
  left: 0;
  background: ${props =>
    props.loading || props.isSkeleton
      ? props.theme.colorSkeleton
      : props.theme.colorAccent};
  color: white;
  border-bottom-right-radius: 0.75rem;
  font-size: ${props => (props.isSkeleton || props.loading ? "0" : "12px")};
  height: 26px;
  line-height: 26px;
  text-align: center;
  padding: 0 0.5rem;
  min-width: 60px;
`;

export default {
  props: labelProps,
  components: {
    StyledLabel
  }
};
</script>
