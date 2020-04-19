<template>
  <StyledWrapper>
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colorBorder};
  padding: 0 1rem;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
