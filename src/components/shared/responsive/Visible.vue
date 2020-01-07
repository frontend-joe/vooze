<template>
  <styled-wrapper
    :flexVertical="flexVertical"
    :flexHorizontal="flexHorizontal"
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const theProps = {
  flexHorizontal: Boolean,
  flexVertical: Boolean,
  xs: Boolean,
  sm: Boolean,
  md: Boolean,
  lg: Boolean,
  xl: Boolean
};
const StyledWrapper = styled("div", theProps)`
  display: none;

  @media (max-width: ${props => props.theme.screenWidthXs}) {
    ${props =>
      props.xs && props.flexHorizontal
        ? "display: flex; flex-direction: row;"
        : ""};
    ${props =>
      props.xs && props.flexVertical
        ? "display: flex; flex-direction: column;"
        : ""};
    ${props =>
      props.xs && !props.flexVertical && !props.flexHorizontal
        ? "display: block;"
        : ""};
  }

  @media (max-width: ${props => props.theme.screenWidthSm}) {
    ${props =>
      props.sm && props.flexHorizontal
        ? "display: flex; flex-direction: row;"
        : ""};
    ${props =>
      props.sm && props.flexVertical
        ? "display: flex; flex-direction: column;"
        : ""};
    ${props =>
      props.sm && !props.flexVertical && !props.flexHorizontal
        ? "display: block;"
        : ""};
  }

  @media (max-width: ${props => props.theme.screenWidthMd}) {
    ${props =>
      props.md && props.flexHorizontal
        ? "display: flex; flex-direction: row;"
        : ""};
    ${props =>
      props.md && props.flexVertical
        ? "display: flex; flex-direction: column;"
        : ""};
    ${props =>
      props.md && !props.flexVertical && !props.flexHorizontal
        ? "display: block;"
        : ""};
  }

  @media (max-width: ${props => props.theme.screenWidthLg}) {
    ${props =>
      props.lg && props.flexHorizontal
        ? "display: flex; flex-direction: row;"
        : ""};
    ${props =>
      props.lg && props.flexVertical
        ? "display: flex; flex-direction: column;"
        : ""};
    ${props =>
      props.lg && !props.flexVertical && !props.flexHorizontal
        ? "display: block;"
        : ""};
  }

  @media (max-width: ${props => props.theme.screenWidthXl}) {
    ${props =>
      props.xl && props.flexHorizontal
        ? "display: flex; flex-direction: row;"
        : ""};
    ${props =>
      props.xl && props.flexVertical
        ? "display: flex; flex-direction: column;"
        : ""};
    ${props =>
      props.xl && !props.flexVertical && !props.flexHorizontal
        ? "display: block;"
        : ""};
  }
`;

export default {
  props: {
    flexHorizontal: Boolean,
    flexVertical: Boolean,
    xs: Boolean,
    sm: Boolean,
    md: Boolean,
    lg: Boolean,
    xl: Boolean
  },
  components: {
    StyledWrapper
  }
};
</script>
