<template>
  <styled-wrapper>
    <Skeleton v-if="loading" />
    <Card v-if="!loading" padding="1rem 1rem 0" fixedHeight="110px">
      <TopShelfCardHeader :title="card.title" :icon="card.icon" />
      <TopShelfCardContent v-if="card.color" :card="card" />
    </Card>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import TopShelfCardContent from "./TopShelfCardContent";
import TopShelfCardHeader from "./TopShelfCardHeader";
import Skeleton from "./Skeleton";

const StyledWrapper = styled.div``;

export default {
  props: {
    card: Object,
    loading: Boolean
  },
  components: {
    StyledWrapper,
    Card,
    TopShelfCardContent,
    TopShelfCardHeader,
    Skeleton
  }
};
</script>
