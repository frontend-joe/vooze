<template>
  <styled-wrapper @click="$emit('toggle-settings-open')">
    <StyledIcon>build</StyledIcon></styled-wrapper
  >
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { MatIcon } from "../../shared/icons";

const wiggle = function() {
  return keyframes`
        0%   {
          transform: rotate(90deg);
        }
        50%   {
          transform: rotate(130deg);
        }
        100% {
          transform: rotate(90deg);
        }
    `;
};

const StyledWrapper = styled.button`
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 5;
  width: 56px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  border: 0;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  ${props => props.theme.colorPrimaryGradient};
`;

const StyledIcon = styled(MatIcon)`
  color: white !important;
  font-size: 18px !important;
  transform: rotate(90deg);

  animation: ${wiggle()} 1.25s ease-in-out;
  animation-iteration-count: infinite;
`;

export default {
  props: {
    toggleSettingsOpen: Function
  },
  components: {
    StyledWrapper,
    StyledIcon
  }
};
</script>
