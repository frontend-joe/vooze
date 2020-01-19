<template>
  <styled-wrapper>
    <div class="row">
      <div class="col-6" v-for="card in skeletonCards" :key="card.id">
        <TopShelfCard :loading="loading" :card="card" />
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
    data: Array,
    loading: Boolean
  },
  components: {
    StyledWrapper,
    TopShelfCard
  },
  computed: {
    skeletonCards() {
      let cards = [
        {
          id: 1,
          title: "",
          value: "0"
        },
        {
          id: 2,
          title: "",
          value: "0"
        },
        {
          id: 3,
          title: "",
          value: "0"
        },
        {
          id: 4,
          title: "",
          value: "0"
        }
      ];

      if (this.data) {
        cards = this.data;
      }

      return cards;
    }
  }
};
</script>
