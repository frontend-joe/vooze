<template>
  <styled-item>
    <slot />
  </styled-item>
</template>

<script>
import styled from "vue-styled-components";

const StyledItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

export default {
  components: {
    StyledItem
  }
};
</script>
