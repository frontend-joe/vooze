<template>
  <styled-wrapper :color="color" :opacity="opacity" />
</template>

<script>
import styled from "vue-styled-components";

const badgeProps = { color: String, opacity: Number };
const StyledWrapper = styled("div", badgeProps)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: ${props => props.opacity || 1};

  background: ${props =>
    props.color ? props.theme[`color${props.color}`] : props.theme.colorAccent};
`;

export default {
  props: badgeProps,
  components: {
    StyledWrapper
  }
};
</script>
