<template>
  <styled-wrapper>
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  font-weight: bold;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
