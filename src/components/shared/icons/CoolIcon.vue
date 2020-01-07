<template>
  <styled-wrapper :iconColor="iconColor" :iconSize="iconSize">
    <StyledIcon :icon="icon" :iconColor="iconColor" :iconSize="iconSize" />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import TonIcon from "./TonIcon";

const iconProps = { icon: String, iconSize: String, iconColor: String };
const StyledWrapper = styled("div", iconProps)`
  width: ${props => props.iconSize || "40px"};
  height: ${props => props.iconSize || "40px"};
  background: ${props => props.theme[`color${props.iconColor}Faint`]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(TonIcon, iconProps)`
  transform: translate(-4px, -1px);
  font-size: calc(${props => props.iconSize || "40px"} - 10%);
  color: ${props => props.theme[`color${props.iconColor}`]};
`;

export default {
  props: iconProps,
  components: {
    StyledWrapper,
    StyledIcon
  }
};
</script>
