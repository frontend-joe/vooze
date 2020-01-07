<template>
  <styled-wrapper><slot> </slot> </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  padding: 0 1.5rem 1.5rem;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
