<template>
  <Card>
    <StyledCardContent>
      <CoolIcon iconSize="40px" :icon="card.icon" :iconColor="card.color" />
      <StyledValue>{{ card.value }}</StyledValue>
      <StyledTitle>
        {{ card.title }}
      </StyledTitle>
      <StyledUpdated :warning="card.warning">
        {{ card.warning || card.updated }}
      </StyledUpdated>
    </StyledCardContent>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { CoolIcon } from "../../../../../shared/icons";

const StyledCardContent = styled.div`
  padding: 1.5rem 1.75rem 1.65rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colorText};
  margin-bottom: 1.45rem;
`;

const StyledValue = styled.div`
  padding-top: 1.5rem;
  margin-bottom: 0.425rem;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colorText};
`;

const updatedProps = { warning: String };
const StyledUpdated = styled("div", updatedProps)`
  color: ${props =>
    props.warning ? props.theme.colorRed : props.theme.colorSubtitle};
  font-size: 12px;
`;

export default {
  props: {
    card: Object
  },
  components: {
    Card,
    CoolIcon,
    StyledCardContent,
    StyledTitle,
    StyledValue,
    StyledUpdated
  }
};
</script>
