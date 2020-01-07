<template>
  <styled-wrapper>
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.tbody``;

export default {
  components: {
    StyledWrapper
  }
};
</script>
