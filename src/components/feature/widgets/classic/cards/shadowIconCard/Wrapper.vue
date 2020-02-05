<template>
  <Card>
    <StyledWrapper>
      <StyleTopLeft>Test</StyleTopLeft>
    </StyledWrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../shared/card";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: ;
`;

const StyleTopLeft = styled.div`
  background: red;
`;

export default {
  components: {
    StyledWrapper,
    Card
  }
};
</script>
