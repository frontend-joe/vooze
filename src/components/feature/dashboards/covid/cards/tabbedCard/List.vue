<template>
  <StyledWrapper>
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  margin-bottom: 1rem;
`;

export default {
  props: {
    data: Array
  },
  components: {
    StyledWrapper
  }
};
</script>
