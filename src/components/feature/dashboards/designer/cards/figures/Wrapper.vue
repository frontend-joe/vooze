<template>
  <styled-wrapper>
    <div class="row">
      <div class="col-md-6" v-for="item in data" :key="item.id">
        <FigureCard :item="item" />
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
    data: Array
  },
  components: {
    StyledWrapper,
    FigureCard
  }
};
</script>
