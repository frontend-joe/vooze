<template>
  <StyledWrapper>
    <div class="row">
      <div class="col-lg-6 col-xl-3" v-for="card in data" :key="card.id">
        <SocialMedia :title="card.title" />
      </div>
    </div>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { SocialMedia } from "../../../../../shared/widgets";

const StyledWrapper = styled.div``;

export default {
  props: {
    data: Array
  },
  components: {
    StyledWrapper,
    SocialMedia
  }
};
</script>
