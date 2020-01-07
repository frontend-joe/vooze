<template>
  <styled-wrapper>
    <PageTitle>Button</PageTitle>
    <div class="row">
      <div class="col-md-6">
        <DefaultButtons />
        <DropdownButtons />
        <ColoredButtons />
      </div>
      <div class="col-md-6">
        <OutlineButtons />
        <RoundedButtons />
        <IconButtons />
      </div>
    </div>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import DefaultButtons from "./cards/DefaultButtons";
import OutlineButtons from "./cards/OutlineButtons";
import RoundedButtons from "./cards/RoundedButtons";
import DropdownButtons from "./cards/DropdownButtons";
import ColoredButtons from "./cards/ColoredButtons";
import IconButtons from "./cards/IconButtons";
import { PageTitle } from "../../../shared/page";

const StyledWrapper = styled.div``;

export default {
  components: {
    PageTitle,
    StyledWrapper,
    DefaultButtons,
    OutlineButtons,
    RoundedButtons,
    DropdownButtons,
    ColoredButtons,
    IconButtons
  }
};
</script>
