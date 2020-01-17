<template>
  <StyledWrapper>
    <Avatar size="40px" name="dominic" />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Avatar } from "../../../shared/common";

const StyledWrapper = styled.div`
  ${props => props.theme.colorPrimaryGradient};
  padding: 1rem;
  display: flex;
`;

export default {
  components: {
    StyledWrapper,
    Avatar
  }
};
</script>
