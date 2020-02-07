<template>
  <StyledWrapper
    :isGradient="isGradient"
    :isShadow="isShadow"
    :iconSize="iconSize"
    :badgeSize="badgeSize"
    :color="color"
  >
    <StyledIcon iconColor="white" :iconSize="iconSize"><slot /> </StyledIcon>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import { MatIcon } from "./";

const badgeProps = {
  color: String,
  isGradient: Boolean,
  isShadow: Boolean,
  badgeSize: {
    type: String,
    default: "42px"
  },
  iconSize: {
    type: String,
    default: "24px"
  }
};

const StyledWrapper = styled("div", badgeProps)`
  border-radius: 50%;
  width: ${props => props.badgeSize};
  max-width: ${props => props.badgeSize};
  min-width: ${props => props.badgeSize};
  height: ${props => props.badgeSize};
  max-height: ${props => props.badgeSize};
  min-height: ${props => props.badgeSize};

  ${props =>
    props.isShadow
      ? `box-shadow: 0 6px 20px 0 ${rgba(props.theme.colorAccent, 0.5)}`
      : ""};

  ${props =>
    props.isGradient
      ? props.theme.colorPrimaryGradient
      : `background: ${props.theme[`color${props.color}`]}`};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const iconProps = { iconSize: String };
const StyledIcon = styled(MatIcon, iconProps)`
  font-size: ${props => props.iconSize};
`;

export default {
  props: badgeProps,
  components: {
    StyledWrapper,
    StyledIcon
  }
};
</script>
