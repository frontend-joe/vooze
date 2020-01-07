<template>
  <styled-wrapper>
    <styled-pulser :color="color" />
    <styled-dot :color="color" />
  </styled-wrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

const dotSize = "9px";

const StyledWrapper = styled.div`
  position: relative;
  width: ${dotSize};
  height: ${dotSize};
`;

const theProps = { color: String };

const test = function() {
  //console.log("props", `color${props.theme}`);

  return keyframes`
        0%   {
          transform: scale(0, 0);
          opacity: 1;
        }
        100% {
          transform: scale(1, 1);
          opacity: 0;
        }
    `;
};

const StyledDot = styled("div", theProps)`
  width: ${dotSize};
  height: ${dotSize};
  background-color: ${props => props.theme[`color${props.color}`]};
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledPulser = styled("div", theProps)`
  border-radius: 50%;
  height: ${dotSize};
  width: ${dotSize};
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 0 0 0 15px ${props => rgba(props.theme[`color${props.color}`], 1)};
  animation: ${props => test(props, props.theme[`color${props.color}`])} 1.75s
    ease-out;
  animation-iteration-count: infinite;
`;

export default {
  props: {
    color: String
  },
  components: {
    StyledWrapper,
    StyledDot,
    StyledPulser
  },
  created: function() {
    //console.log("color", this.color);
  }
};
</script>
