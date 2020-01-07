<template>
  <styled-button>
    <slot />
  </styled-button>
</template>

<script>
import styled from "vue-styled-components";

const StyledButton = styled.button`
  display: inline-block;
  height: 40px;
  min-width: 100px;
  font-size: 14px;
  text-align: center;
  background: ${props => props.theme.colorPrimary};
  color: white;
  border: 0;
  border-radius: 5px;
`;

export default {
  components: {
    StyledButton
  }
};
</script>
