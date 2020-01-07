<template>
  <styled-wrapper :border="border" :color="color" :background="background">
    <styled-icon :color="color">{{ icon }}</styled-icon>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "../../../../../shared/common";

const iconProps = { color: String, background: String, border: String };
const StyledWrapper = styled("div", iconProps)`
  width: 48px;
  height: 48px;
  border-radius: 32px;
  background: ${props => props.theme[`color${props.background}`]};
  border: 2px solid ${props => props.theme[`color${props.border}`]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(MatIcon, iconProps)`
  color: ${props => props.theme[`color${props.color}`]} !important;
  font-size: 26px !important;
`;

export default {
  props: {
    icon: String,
    color: String,
    background: String,
    border: String
  },
  components: {
    StyledWrapper,
    StyledIcon
  }
};
</script>
