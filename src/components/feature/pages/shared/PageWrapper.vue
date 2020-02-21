<template>
  <StyledWrapper>
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  ${"" /* background-image: url(${require("../../../../assets/images/vooze-bg-gloop.jpg")});
  background-size: cover;
  background-position: center; */}
  background: #242424;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
