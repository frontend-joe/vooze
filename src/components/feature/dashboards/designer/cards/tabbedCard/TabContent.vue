<template>
  <StyledWrapper>
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  padding: 0 1rem 1rem;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
