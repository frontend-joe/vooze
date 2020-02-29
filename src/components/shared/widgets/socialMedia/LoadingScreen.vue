<template>
  <StyledWrapper :loading="loading" :color="color">
    <StyledIcon :icon="icon" />
  </StyledWrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { AwesomeIcon } from "../../../shared/icons";

const wrapperProps = {
  loading: Boolean,
  color: String,
  icon: Array
};

const StyledWrapper = styled("div", wrapperProps)`
  background: #ebebeb;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.loading ? 1 : 0)};
  visibility: ${props => (props.loading ? "visible" : "hidden")};
  transition: opacity 0.5s, visibility 0.5s;
`;

const iconSpin = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledIcon = styled(AwesomeIcon, wrapperProps)`
  color: ${props => props.theme.colorSkeleton};
  font-size: 36px;
  animation: ${iconSpin} 3s infinite linear;
`;

export default {
  props: wrapperProps,
  components: {
    StyledWrapper,
    StyledIcon
  }
};
</script>
