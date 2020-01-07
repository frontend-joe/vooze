<template>
  <styled-wrapper>
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.td`
  font-size: 13px;
  padding: 1rem;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
