<template>
  <StyledCard :backgroundColor="backgroundColor" :textColor="textColor">
    <StyledCardContent>
      <StyledIcon :textColor="textColor" :icon="icon" />
      <StyledLabel> {{ label }}</StyledLabel>
    </StyledCardContent>
  </StyledCard>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { TonIcon } from "../../../../../shared/icons";

const cardProps = { backgroundColor: String, textColor: String };
const StyledCard = styled(Card, cardProps)`
  background: ${props => props.theme[`color${props.backgroundColor}`]};
  color: ${props => props.theme[`color${props.textColor}`]};
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
`;

const StyledLabel = styled.div`
  font-size: 14px;
  padding-top: 0.5rem;
`;

const StyledIcon = styled(TonIcon, cardProps)`
  font-size: 40px;
  color: ${props => props.theme[`color${props.textColor}`]};
`;

export default {
  props: {
    icon: String,
    label: String,
    backgroundColor: String,
    textColor: String
  },
  components: {
    StyledCard,
    StyledCardContent,
    StyledLabel,
    StyledIcon
  }
};
</script>
