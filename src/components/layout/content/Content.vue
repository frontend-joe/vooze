<template>
  <styled-wrapper>
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  padding: 72px 1.625rem;
  margin-left: 0;
  transform: translateX(0);
  transition: transform ${props => props.theme.defaultTransition};

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    padding: 72px 1.625rem 0;
    transform: translateX(200px);
    width: calc(100% - 200px);
  }
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
