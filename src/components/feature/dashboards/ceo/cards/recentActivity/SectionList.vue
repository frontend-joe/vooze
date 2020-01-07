<template>
  <styled-list>
    <slot />
  </styled-list>
</template>

<script>
import styled from "vue-styled-components";

const StyledList = styled.div`
  margin-bottom: 0.5rem;
`;

export default {
  components: {
    StyledList
  }
};
</script>
