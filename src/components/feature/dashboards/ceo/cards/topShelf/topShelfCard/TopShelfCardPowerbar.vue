<template>
  <styled-wrapper>
    <!-- <styled-power-bar-label> {{ card.percentage }}% </styled-power-bar-label> -->
    <StyledPowerBarWrapper>
      <styled-power-bar :color="card.color" :width="`${card.percentage}%`" />
    </StyledPowerBarWrapper>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div``;

const StyledPowerBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #e9ecef;
  border-radius: 2px;
`;

const powerbarProps = { width: String, color: String };
const StyledPowerBar = styled("div", powerbarProps)`
  position: relative;
  background: ${props => props.theme[`color${props.color}`]};
  height: 4px;
  border-radius: 3px;
  width: ${props => props.width};

  &:after {
    content: "";
    display: block;
    position: absolute;
    z-index: 10;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: white;
    border: 2px solid ${props => props.theme[`color${props.color}`]};
  }
`;

// const StyledPowerBarLabel = styled.div`
//   font-size: 10px;
//   margin-bottom: 0.475rem;
//   color: ${props => props.theme.colorLabel};
// `;

export default {
  props: {
    card: Object
  },
  components: {
    StyledWrapper,
    StyledPowerBarWrapper,
    StyledPowerBar
    //StyledPowerBarLabel
  }
};
</script>
