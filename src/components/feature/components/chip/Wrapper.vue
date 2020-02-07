<template>
  <StyledWrapper>
    <PageTitle>Chip</PageTitle>
    <div class="row">
      <div class="col-md-6">
        <DefaultChips />
      </div>
    </div>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import DefaultChips from "./cards/DefaultChips";
import { PageTitle } from "../../../shared/page";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    DefaultChips,
    PageTitle
  }
};
</script>
