<template>
  <StyledIcon :class="icon" :iconColor="iconColor" :iconSize="iconSize" />
</template>

<script>
import styled from "vue-styled-components";

const iconProps = { iconColor: String, iconSize: String };
const StyledIcon = styled("i", iconProps)`
  color: ${props =>
    props.iconColor
      ? props.theme[`color${props.iconColor}`]
      : props.theme.colorPrimary};
  font-size: ${props => props.iconSize || "24px"};
`;

export default {
  props: {
    icon: String,
    iconColor: String,
    iconSize: String
  },
  components: {
    StyledIcon
  }
};
</script>
