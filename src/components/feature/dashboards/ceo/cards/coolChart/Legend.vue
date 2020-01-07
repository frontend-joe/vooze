<template>
  <styled-wrapper>
    <StyledItem>
      <StyledItem__Icon :color="0" />
      <StyledItem__Text>Current</StyledItem__Text>
    </StyledItem>
    <StyledItem>
      <StyledItem__Icon :color="1" />
      <StyledItem__Text>Previous</StyledItem__Text>
    </StyledItem>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

const iconProps = { color: Number };
const StyledItem__Icon = styled("div", iconProps)`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${props => props.theme.chartColors[props.color]};
  transform: translateY(1px);
`;

const StyledItem__Text = styled.div`
  font-size: 15px;
  margin-left: 0.4rem;
  color: ${props => props.theme.colorSubtitle};
`;

export default {
  components: {
    StyledWrapper,
    StyledItem,
    StyledItem__Icon,
    StyledItem__Text
  }
};
</script>
