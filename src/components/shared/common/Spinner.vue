<template>
  <StyledSpinner :lineWidth="lineWidth" />
</template>

<script>
import styled from "vue-styled-components";

const spinnerProps = {
  lineWidth: {
    type: Number,
    default: 7
  }
};

const StyledSpinner = styled("div", spinnerProps)`
    border-width: ${props => props.lineWidth}px;
    border-style: solid;
    border-color: ${props =>
      `${props.theme.colorAccent} ${props.theme.colorSpinnerGrey} ${props.theme.colorSpinnerGrey} ${props.theme.colorSpinnerGrey}`};
    width: ${props => Math.floor(props.lineWidth * 10)}px;
    height: ${props => Math.floor(props.lineWidth * 10)}px;
    border-radius: 50%;
    animation: spin 1.5s infinite linear;
    position: relative;

    &:before,
    &:after {
      content: "";
      width: ${props => props.lineWidth}px;
      height: ${props => props.lineWidth}px;
      border-radius: 50%;
      background: ${props => props.theme.colorAccent};
      position: absolute;

    }

    &:before {
      left: ${props => Math.floor(props.lineWidth / 3)}px;
      top: ${props => Math.floor(props.lineWidth / 3)}px;
    }

    &:after {
      right: ${props => Math.floor(props.lineWidth / 3)}px;
      top: ${props => Math.floor(props.lineWidth / 3)}px;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default {
  props: spinnerProps,
  components: {
    StyledSpinner
  }
};
</script>
