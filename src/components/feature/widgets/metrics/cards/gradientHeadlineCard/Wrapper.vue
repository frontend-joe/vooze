<template>
  <StyledCard :gradient="card.gradient">
    <StyledTopRow>
      <StyledIconWrapper>
        <MatIcon iconColor="white" iconSize="28px">{{ card.icon }}</MatIcon>
      </StyledIconWrapper>
      <StyledValueBlock>
        <StyledValueBlockValue>
          {{ card.value }}
        </StyledValueBlockValue>
        <StyledValueBlockLabel>
          {{ card.valueLabel }}
        </StyledValueBlockLabel>
      </StyledValueBlock>
    </StyledTopRow>
    <StyledBottomRow>
      <StyledCardTitle>{{ card.title }}</StyledCardTitle>
      <StyledBottomRowValue>
        {{ card.total }}
      </StyledBottomRowValue>
    </StyledBottomRow>
  </StyledCard>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { MatIcon } from "../../../../../shared/icons";

const StyledTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const StyledBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledBottomRowValue = styled.div``;

const cardProps = { gradient: String };
const StyledCard = styled(Card, cardProps)`
  padding: 1.5rem 1rem;
  color: white;
  ${props => (props.gradient === "Blue" ? props.theme.gradientBlue : "")};
  ${props => (props.gradient === "Pink" ? props.theme.gradientPink : "")};
  ${props => (props.gradient === "Yellow" ? props.theme.gradientYellow : "")};
  ${props => (props.gradient === "Green" ? props.theme.gradientGreen : "")};
`;

const StyledCardTitle = styled.div`
  font-size: 16px;
`;

const StyledIconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledValueBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const StyledValueBlockValue = styled.div`
  font-size: 28px;
  margin-bottom: 0.325rem;
`;

const StyledValueBlockLabel = styled.div``;

export default {
  props: {
    card: Object,
    cardTitle: String,
    gradient: String
  },
  components: {
    StyledTopRow,
    StyledBottomRow,
    StyledBottomRowValue,
    StyledCard,
    StyledCardTitle,
    StyledIconWrapper,
    MatIcon,
    StyledValueBlock,
    StyledValueBlockLabel,
    StyledValueBlockValue
  }
};
</script>
