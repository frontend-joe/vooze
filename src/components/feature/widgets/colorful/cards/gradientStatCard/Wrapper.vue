<template>
  <StyledCard :gradient="gradient">
    <StyledValue>{{ cardValue }}</StyledValue>
    <StyledDescription>{{ cardDescription }}</StyledDescription>
    <StyledFooter>{{ cardFooter }}</StyledFooter>
  </StyledCard>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";

const cardProps = { gradient: String };
const StyledCard = styled(Card, cardProps)`
  padding: 1.5rem 1rem;
  color: white;
  ${props => (props.gradient ? props.theme[`gradient${props.gradient}`] : "")};
`;

const StyledValue = styled.div`
  font-size: 40px;
  margin-bottom: 1rem;
`;

const StyledDescription = styled.div`
  font-size: 13px;
  margin-bottom: 0.75rem;
`;

const StyledFooter = styled.div`
  font-size: 13px;
  color: #f7f7f7;
`;

export default {
  props: {
    gradient: String,
    cardValue: String,
    cardDescription: String,
    cardFooter: String
  },
  components: {
    StyledCard,
    StyledValue,
    StyledDescription,
    StyledFooter
  }
};
</script>
