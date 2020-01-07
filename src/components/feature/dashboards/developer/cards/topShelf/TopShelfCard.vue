<template>
  <styled-wrapper>
    <Card padding="1rem 1rem 0">
      <TopShelfCardHeader :title="card.title" :icon="card.icon" />
      <TopShelfCardContent :card="card" />
    </Card>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import TopShelfCardContent from "./TopShelfCardContent";
import TopShelfCardHeader from "./TopShelfCardHeader";

const StyledWrapper = styled.div``;

export default {
  props: {
    card: Object
  },
  components: {
    StyledWrapper,
    Card,
    TopShelfCardContent,
    TopShelfCardHeader
  }
};
</script>
