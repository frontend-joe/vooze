<template>
  <StyledWrapper>
    <ListRowLeft :text="item.when" />
    <ListRowMarker :color="item.color" />
    <ListRowCard :name="item.name" :text="item.text" :by="item.by" />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import ListRowLeft from "./ListRowLeft";
import ListRowMarker from "./ListRowMarker";
import ListRowCard from "./ListRowCard";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;

  &:first-child .markerline {
    height: 50%;
    top: 50%;
  }

  &:last-child .markerline {
    height: 50%;
    top: 0;
  }
`;

export default {
  props: {
    item: Object
  },
  components: {
    StyledWrapper,
    ListRowLeft,
    ListRowMarker,
    ListRowCard
  }
};
</script>
