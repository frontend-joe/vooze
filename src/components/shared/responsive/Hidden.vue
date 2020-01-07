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
  ${props =>
    props.flexHorizontal ? "display: flex; flex-direction: row;" : ""};
  ${props =>
    props.flexVertical ? "display: flex; flex-direction: column;" : ""};

  @media (max-width: ${props => props.theme.screenWidthSm}) {
    ${props => (props.xs ? "display: none;" : "")};
  }

  @media (min-width: ${props =>
      props.theme.screenWidthSm}) and (max-width: ${props =>
      props.theme.screenWidthMd}) {
    ${props => (props.sm ? "display: none;" : "")};
  }

  @media (min-width: ${props =>
      props.theme.screenWidthMd}) and (max-width: ${props =>
      props.theme.screenWidthLg}) {
    ${props => (props.md ? "display: none;" : "")};
  }

  @media (min-width: ${props =>
      props.theme.screenWidthLg}) and (max-width: ${props =>
      props.theme.screenWidthXl}) {
    ${props => (props.lg ? "display: none;" : "")};
  }

  @media (min-width: ${props => props.theme.screenWidthXl}) {
    ${props => (props.xl ? "display: none;" : "")};
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
