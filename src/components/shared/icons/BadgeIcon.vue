<template>
  <StyledWrapper :color="color">
    <StyledIcon iconColor="white"><slot /> </StyledIcon>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "./";

const badgeProps = {
  color: String
};

const StyledWrapper = styled("div", badgeProps)`
  border-radius: 50%;
  width: 42px;
  height: 42px;
  background: ${props => props.theme[`color${props.color}`]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(MatIcon)`
  font-size: 28px;
`;

export default {
  props: badgeProps,
  components: {
    StyledWrapper,
    StyledIcon
  }
};
</script>
