<template>
  <styled-wrapper>
    <StyledPowerBar :color="color" :style="{ width: percentage + '%' }" />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const StyledWrapper = styled.div`
  position: relative;
  background: #e9ecef;
  height: 4px;
  width: 100%;
  border-radius: 4px;
`;

const powerBarProps = { color: String };
const StyledPowerBar = styled("div", powerBarProps)`
  height: 100%;
  border-radius: 4px;
  background: ${props =>
    props.theme[`color${props.color}`] || props.theme.colorPrimary};
`;

export default {
  props: {
    percentage: Number,
    color: String
  },
  computed: {
    computedColor() {
      return rgba(this.color, 0.75);
    }
  },
  components: {
    StyledWrapper,
    StyledPowerBar
  }
};
</script>
