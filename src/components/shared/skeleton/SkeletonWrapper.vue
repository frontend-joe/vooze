<template>
  <StyledWrapper :flex="flex"><slot /> </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const wrapperProps = {
  flex: {
    type: Number,
    default: 0
  }
};

const StyledWrapper = styled("div", wrapperProps)`
  flex: ${props => props.flex};
`;

export default {
  props: wrapperProps,
  components: {
    StyledWrapper
  }
};
</script>
