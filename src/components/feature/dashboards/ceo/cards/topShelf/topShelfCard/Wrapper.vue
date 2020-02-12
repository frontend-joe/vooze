<template>
  <StyledWrapper>
    <Skeleton v-if="loading" />
    <StyledCard v-if="!loading" padding="0">
      <StyledCardContent>
        <StyledTopRow>
          <TopShelfCardValueBlock :card="card" />
          <CoolIcon iconSize="36px" :icon="card.icon" :iconColor="card.color">{{
            card.icon
          }}</CoolIcon>
        </StyledTopRow>
        <TopShelfCardPowerbar :card="card" />
      </StyledCardContent>
    </StyledCard>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../../shared/card";
import TopShelfCardValueBlock from "./TopShelfCardValueBlock";
import TopShelfCardPowerbar from "./TopShelfCardPowerbar";
import { CoolIcon } from "../../../../../../shared/icons";
import Skeleton from "./Skeleton";

const StyledWrapper = styled.div``;

const StyledCardContent = styled.div`
  padding: 1rem;
`;

const StyledCard = styled(Card)`
  height: 100px;

  @media (min-width: ${props => props.theme.screenWidthXl}) {
    height: auto;
    padding-bottom: 0.75rem;
  }
`;

const StyledTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export default {
  props: {
    card: Object,
    loading: Boolean
  },
  components: {
    Skeleton,
    StyledWrapper,
    StyledCard,
    StyledCardContent,
    TopShelfCardValueBlock,
    TopShelfCardPowerbar,
    StyledTopRow,
    CoolIcon
  }
};
</script>
