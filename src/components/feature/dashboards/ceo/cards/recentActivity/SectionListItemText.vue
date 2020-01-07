<template>
  <styled-text>
    <slot />
  </styled-text>
</template>

<script>
import styled from "vue-styled-components";

const StyledText = styled.div`
  font-size: 13px;
`;

export default {
  components: {
    StyledText
  }
};
</script>
