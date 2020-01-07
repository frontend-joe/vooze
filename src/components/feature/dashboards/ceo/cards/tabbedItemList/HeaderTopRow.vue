<template>
  <styled-wrapper>
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
