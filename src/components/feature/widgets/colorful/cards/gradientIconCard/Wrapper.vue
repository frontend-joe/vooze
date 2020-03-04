<template>
  <StyledCard :gradient="gradient">
    <StyledIcon :icon="icon || 'ti-Line-Email'" />
    <StyledValue>{{ cardValue }}</StyledValue>
    <StyledTitle>{{ cardTitle }}</StyledTitle>
  </StyledCard>
</template>

<script>
import styled from "vue-styled-components";
import { TonIcon } from "../../../../../shared/icons";
import { Card } from "../../../../../shared/card";

const cardProps = { gradient: String };
const StyledCard = styled(Card, cardProps)`
  padding: 1.5rem 1rem;
  color: white;
  ${props => (props.gradient === "Blue" ? props.theme.gradientBlue : "")};
  ${props => (props.gradient === "Pink" ? props.theme.gradientPink : "")};
  ${props => (props.gradient === "Yellow" ? props.theme.gradientYellow : "")};
  ${props => (props.gradient === "Green" ? props.theme.gradientGreen : "")};
`;

const StyledValue = styled.div`
  font-size: 40px;
  margin-bottom: 0.75rem;
  padding: 0.75rem 0 0;
`;

const StyledTitle = styled.div`
  font-size: 13px;
`;

const StyledIcon = styled(TonIcon)`
  font-size: 30px;
  color: white;
  margin-bottom: 1.5rem;
`;

export default {
  props: {
    gradient: String,
    icon: String,
    cardValue: String,
    cardTitle: String
  },
  components: {
    StyledCard,
    StyledTitle,
    StyledIcon,
    StyledValue
  }
};
</script>
