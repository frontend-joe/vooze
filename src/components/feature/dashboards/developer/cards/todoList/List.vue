<template>
  <StyledWrapper>
    <ListItem v-for="item in data" :key="item.id" :item="item" />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import ListItem from "./ListItem";

const StyledWrapper = styled.div`
  padding: 1rem 0 0;
`;

export default {
  props: {
    data: Array
  },
  components: {
    StyledWrapper,
    ListItem
  },
  created: function() {
    console.log("data", this.data);
  }
};
</script>
