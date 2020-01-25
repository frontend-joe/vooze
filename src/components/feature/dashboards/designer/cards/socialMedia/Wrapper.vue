<template>
  <StyledWrapper>
    <div class="row">
      <div
        class="col-lg-6 col-xl-3"
        v-for="card in skeletonData"
        :key="card.id"
      >
        <SocialMedia :loading="loading" :title="card.title" />
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
    data: Array,
    loading: Boolean
  },
  computed: {
    skeletonData() {
      let data = [
        {
          id: 1,
          title: "Facebook"
        },
        {
          id: 2,
          title: "Instagram"
        },
        {
          id: 3,
          title: "Twitter"
        },
        {
          id: 4,
          title: "YouTube"
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
    SocialMedia
  }
};
</script>
