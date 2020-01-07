<template>
  <styled-block>
    <slot />
  </styled-block>
</template>

<script>
import styled from "vue-styled-components";

const StyledBlock = styled.div`
margin-bottom: 0.5rem;
  border-right: 1px solid ${props => props.theme.colorBorder};
  width: 172px;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:last-child {
    border: 0;
  }
`;

export default {
  components: {
    StyledBlock
  }
};
</script>
