<template>
  <StyledWrapper>
    <StyledPowerBarWrapper>
      <StyledPowerBar :color="color" :style="{ width: barWidth }" />
    </StyledPowerBarWrapper>
    <StyledLabel>
      {{ value }}
    </StyledLabel>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.div`
  margin-left: 1rem;
  font-size: 0.8rem;
  color: ${props => props.theme.colorSubtitle};
`;

const StyledPowerBarWrapper = styled.div`
  flex: 1;
`;

const powerBarProps = { color: String };
const StyledPowerBar = styled("div", powerBarProps)`
  height: 4px;
  border-radius: 2px;
  background: ${props => props.theme[`color${props.color}`]};
`;

export default {
  props: {
    color: String,
    value: Number,
    highestValue: Number
  },
  computed: {
    barWidth() {
      if (!this.value || !this.highestValue) {
        return "0";
      }
      // work out value percentage of 14

      const percentage = (this.value / this.highestValue) * 100;

      console.log("percentage", percentage);

      return percentage + "%";
    }
  },
  components: {
    StyledWrapper,
    StyledLabel,
    StyledPowerBarWrapper,
    StyledPowerBar
  }
};
</script>
