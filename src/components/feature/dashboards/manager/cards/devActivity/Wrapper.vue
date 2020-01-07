<template>
  <styled-wrapper>
    <ContentHeader>
      <span>Timeline</span>
      <CoolButton dropdown plain>Today</CoolButton>
    </ContentHeader>
    <List :data="data" />
    <HyperLink>See All</HyperLink>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { ContentHeader } from "../../../../../shared/page";
import { CoolButton, HyperLink } from "../../../../../shared/buttons";
import List from "./List";

const StyledWrapper = styled.div``;

export default {
  props: {
    data: Array
  },
  components: {
    List,
    StyledWrapper,
    ContentHeader,
    CoolButton,
    HyperLink
  }
};
</script>
