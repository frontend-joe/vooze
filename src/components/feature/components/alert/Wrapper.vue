<template>
  <styled-wrapper>
    <PageTitle>Alert</PageTitle>
    <div class="row">
      <div class="col-md-6">
        <DefaultAlerts />

        <DismissableAlerts />
        <ColoredAlerts />
      </div>
      <div class="col-md-6">
        <RoundedAlerts />
        <IconAlerts />
      </div>
    </div>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { PageTitle } from "../../../shared/page";
import DefaultAlerts from "./cards/DefaultAlerts";
import RoundedAlerts from "./cards/RoundedAlerts";
import IconAlerts from "./cards/IconAlerts";
import DismissableAlerts from "./cards/DismissableAlerts";
import ColoredAlerts from "./cards/ColoredAlerts";

const StyledWrapper = styled.div``;

export default {
  components: {
    PageTitle,
    StyledWrapper,
    DefaultAlerts,
    RoundedAlerts,
    IconAlerts,
    DismissableAlerts,
    ColoredAlerts
  }
};
</script>
