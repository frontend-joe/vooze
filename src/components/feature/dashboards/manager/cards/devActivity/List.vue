<template>
  <StyledWrapper>
    <ListRow :item="item" v-for="item in data" :key="item.id" />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import ListRow from "./ListRow";

const StyledWrapper = styled.div``;

export default {
  props: {
    data: Array
  },
  components: {
    StyledWrapper,
    ListRow
  }
};
</script>
