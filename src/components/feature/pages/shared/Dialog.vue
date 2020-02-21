<template>
  <StyledCard>
    <StyledCardHeader>{{ dialogTitle }}</StyledCardHeader>
    <slot />
  </StyledCard>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../shared/card";

const StyledCard = styled(Card)`
  width: 540px;
  padding: 2.5rem 1.5rem;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.025),
    0 6px 30px 5px rgba(0, 0, 0, 0.05), 0 8px 10px -7px rgba(0, 0, 0, 0.075);
`;

const StyledCardHeader = styled.div`
  font-size: 19px;
  margin-bottom: 3rem;
`;

export default {
  props: {
    dialogTitle: String
  },
  components: {
    StyledCard,
    StyledCardHeader
  }
};
</script>
