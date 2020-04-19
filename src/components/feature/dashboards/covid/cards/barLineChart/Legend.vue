<template>
  <StyledWrapper>
    <StyledBarIcon color="Accent" />
    <StyledIconLabel>Sales</StyledIconLabel>
    <StyledLineIcon color="ChartLineDark" />
    <StyledIconLabel>Customers</StyledIconLabel>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const iconProps = { color: String };
const StyledLineIcon = styled("div", iconProps)`
  position: relative;
  width: 10px;
  height: 10px;
  flex: 0 0 10px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme[`color${props.color}`]};
  background: ${props => props.theme.colorCardBackground};
  margin-left: 1.5rem;

  &::before {
    display: block;
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    left: -5px;
    width: 16px;
    height: 2px;
    background: ${props => props.theme[`color${props.color}`]};
    transform: translateY(-50%);
  }
`;

const StyledBarIcon = styled("div", iconProps)`
  width: 12px;
  height: 12px;
  background: ${props => rgba(props.theme[`color${props.color}`], 0.625)};
`;

const StyledIconLabel = styled.div`
  color: ${props => props.theme.colorText};
  font-size: 0.875rem;
  margin-left: 0.5rem;
`;

export default {
  components: {
    StyledWrapper,
    StyledLineIcon,
    StyledBarIcon,
    StyledIconLabel
  }
};
</script>
