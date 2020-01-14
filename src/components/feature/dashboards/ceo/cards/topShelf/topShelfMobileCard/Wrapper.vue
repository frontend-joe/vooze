<template>
  <StyledWrapper>
    <StyledCard overflowHidden :isDark="card.isDark" :color="card.mobileColor">
      <StyledTitle :isDark="card.isDark">
        {{ card.title }}
      </StyledTitle>
      <StyledValue>
        {{ card.value }}
      </StyledValue>
      <StyledIncrease :isDark="card.isDark">
        +{{ card.percentage }}%
      </StyledIncrease>
      <StyledIcon :icon="card.icon" :isDark="card.isDark" />
    </StyledCard>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../../shared/card";
import { TonIcon } from "../../../../../../shared/icons";

const theProps = { isDark: Boolean };

const StyledWrapper = styled("div", theProps)`
  padding-right: 1rem;
  padding-top: 0.25rem;
  position: relative;
`;

const StyledCard = styled(Card)`
  height: 190px;
  padding: 1rem;

  @media (min-width: ${props => props.theme.screenWidthSm}) {
    height: auto;
  }
`;

const StyledTitle = styled("div", theProps)`
  font-size: 14px;
  margin-bottom: 0.75rem;
  color: ${props =>
    props.isDark ? "rgba(255,255,255,0.65)" : props.theme.colorSubtitle};
`;

const StyledValue = styled.div`
  font-size: 28px;
  font-weight: normal;
  margin-bottom: 0.5rem;
`;

const StyledIncrease = styled("div", theProps)`
  font-size: 13px;
  color: ${props =>
    props.isDark ? "rgba(255,255,255,0.65)" : props.theme.colorSubtitle};
`;

const StyledIcon = styled(TonIcon, theProps)`
  position: absolute;
  right: auto;
  left: -10px;
  top: auto;
  bottom: 0;
  font-size: 100px !important;
  transform: translate(0, 35%);
  color: ${props =>
    props.isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.075)"} !important;

  @media (min-width: ${props => props.theme.screenWidthXs}) {
    transform: translate(28%, -50%);
    z-index: 10;
    right: 0;
    top: 50%;
    left: auto;
    bottom: auto;
    font-size: 120px !important;
  }

  @media (min-width: ${props => props.theme.screenWidthSm}) {
    transform: translate(28%, -50%);
    z-index: 10;
    right: 0;
    top: 50%;
    left: auto;
    bottom: auto;
  }
`;

export default {
  props: {
    card: Object
  },
  components: {
    StyledCard,
    StyledWrapper,
    StyledTitle,
    StyledValue,
    StyledIncrease,
    StyledIcon
  }
};
</script>
