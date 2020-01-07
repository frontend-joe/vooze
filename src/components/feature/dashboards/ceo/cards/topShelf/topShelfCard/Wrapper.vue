<template>
  <card padding="0">
    <StyledCardContent>
      <StyledTopRow>
        <TopShelfCardValueBlock :card="card" />
        <CoolIcon iconSize="36px" :icon="card.icon" :iconColor="card.color">{{
          card.icon
        }}</CoolIcon>
      </StyledTopRow>
      <TopShelfCardPowerbar :card="card" />
    </StyledCardContent>
  </card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../../shared/card";
import TopShelfCardValueBlock from "./TopShelfCardValueBlock";
import TopShelfCardPowerbar from "./TopShelfCardPowerbar";
// import GreyIcon from "./GreyIcon";
import { CoolIcon } from "../../../../../../shared/icons";

const StyledCardContent = styled.div`
  padding: 1rem;
`;

const StyledTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export default {
  props: {
    card: Object
  },
  components: {
    Card,
    //GreyIcon,
    StyledCardContent,
    TopShelfCardValueBlock,
    TopShelfCardPowerbar,
    StyledTopRow,
    CoolIcon
  }
};
</script>
