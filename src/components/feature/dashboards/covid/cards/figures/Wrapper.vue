<template>
  <styled-wrapper>
    <div class="row">
      <div class="col-sm-6" v-for="item in skeletonData" :key="item.id">
        <FigureCard :loading="loading" :item="item" />
      </div>
    </div>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import FigureCard from "./FigureCard";

const StyledWrapper = styled.div``;

export default {
  props: {
    data: Array,
    loading: Boolean
  },
  computed: {
    skeletonData() {
      let data = [
        {
          id: 1
        },
        {
          id: 2
        }
      ];

      if (this.data) {
        data = this.data;
      }

      return data;
    }
  },
  components: {
    StyledWrapper,
    FigureCard
  }
};
</script>
