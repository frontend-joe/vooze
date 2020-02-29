<template>
  <Card padding="1.5rem">
    <styled-wrapper>
      <MapLegend />
    </styled-wrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import MapLegend from "./MapLegend";

const StyledWrapper = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default {
  components: {
    StyledWrapper,
    Card,
    MapLegend
  }
};
</script>
