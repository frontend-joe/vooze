<template>
  <styled-wrapper>
    <StyledIcon :index="index" />
    <StyledText>{{ item.name }}</StyledText>
    <StyledValue>{{ item.value }}</StyledValue>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
  flex: 1 1 100%;

  @media (max-width: ${props => props.theme.screenWidthXs}) {
    width: 100%;
    flex: 1 1 100%;
  }
`;

const iconProps = { index: Number };
const StyledIcon = styled("div", iconProps)`
  height: 10px;
  width: 10px;
  min-width: 10px;
  border: 1px solid white;
  border-radius: 5px;
  background: ${props =>
    props.theme.chartColors
      ? props.theme.chartColors[props.index]
      : "transparent"};
`;

const StyledText = styled.div`
  font-size: 13px;
  margin-left: 0.5rem;
  color: rgba(255, 255, 255, 0.57);

  @media (min-width: ${props => props.theme.screenWidthXl}) {
    width: 50%;
    font-size: 14px;
  }
`;

const StyledValue = styled.div`
  text-align: right;
  font-size: 13px;
  flex: 1;

  @media (min-width: ${props => props.theme.screenWidthXl}) {
    text-align: left;
    font-size: 14px;
  }
`;

export default {
  props: {
    item: Object,
    index: Number
  },
  components: {
    StyledWrapper,
    StyledIcon,
    StyledText,
    StyledValue
  }
};
</script>
