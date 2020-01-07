<template>
  <styled-wrapper>
    <div class="row">
      <div v-for="card in data" :key="card.id" class="col-md-6 col-lg-3">
        <TopShelfCard :card="card" />
      </div>
    </div>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import TopShelfCard from "./TopShelfCard";

const StyledWrapper = styled.div``;

export default {
  props: {
    data: Array
  },
  components: {
    StyledWrapper,
    TopShelfCard
  }
};
</script>
