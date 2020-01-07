<template>
  <styled-wrapper>
    <slot> </slot>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
