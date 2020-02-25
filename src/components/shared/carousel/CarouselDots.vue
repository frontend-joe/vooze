<template>
  <styled-dots>
    <styled-dot
      v-for="dot in dots"
      :key="dot"
      :active="currentSlide === dot"
      @click="onDotClicked(dot)"
    />
  </styled-dots>
</template>

<script>
import styled from "vue-styled-components";

const StyledDots = styled.div`
  display: flex;
  align-items: center;
`;

const dotProps = {
  active: Boolean
};
const StyledDot = styled("button", dotProps)`
  border: 2px solid
    ${props => (props.active ? props.theme.colorAccent : "#a9a7ac")};
  transform: translateY(${props => (props.active ? "-1px" : "0")});
  background: ${props => props.theme.colorCardBackground};
  padding: 0;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-right: 0.325rem;
  transition: transform 0.25s;
`;

export default {
  props: {
    currentSlide: Number,
    dots: Array,
    onDotClicked: Function
  },
  components: {
    StyledDots,
    StyledDot
  }
};
</script>
