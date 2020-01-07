<template>
  <styled-wrapper>
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colorBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
  padding: 2rem 0;

  &:last-child {
    border: 0;
  }

  @media (max-width: ${props => props.theme.screenWidthMd}) {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin: 0;
    padding: 1rem 0;
  }
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
