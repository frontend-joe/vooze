<template>
  <styled-wrapper>
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  height: 56px;
  color: ${props => props.theme.colorSidebarHeader};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
