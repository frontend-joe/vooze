<template>
  <styled-wrapper>
    <div class="row">
      <div class="col-md-6" v-for="card in data" :key="card.id">
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
