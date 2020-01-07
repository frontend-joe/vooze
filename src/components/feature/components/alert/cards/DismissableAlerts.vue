<template>
  <styled-wrapper>
    <card>
      <CardHeader>
        <CardTitle cardTitle="Dismissable" />
      </CardHeader>
      <CardContent>
        <StyledAlert
          primary
          dismissable
          :isDismissed="primaryIsDismissed"
          v-on:on-dismissed="handlePrimaryDismissed"
        >
          This is a primary dismissable alert.
        </StyledAlert>
        <StyledAlert
          secondary
          dismissable
          :isDismissed="secondaryIsDismissed"
          v-on:on-dismissed="handleSecondaryDismissed"
        >
          This is a secondary dismissable alert.
        </StyledAlert>
        <StyledAlert
          orange
          solid
          dismissable
          :isDismissed="tertiaryIsDismissed"
          v-on:on-dismissed="handleTertiaryDismissed"
        >
          Your disk is nearly full.
        </StyledAlert>
      </CardContent>
    </card>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "../../../../shared/card";
import { Alert } from "../../../../shared/common";

const StyledWrapper = styled.div``;

const alertProps = { isDismissed: Boolean };

const StyledAlert = styled(Alert, alertProps)`
  margin-bottom: ${props => (props.isDismissed ? "0px" : "0.5rem")};
`;

export default {
  components: {
    StyledWrapper,
    StyledAlert,
    Card,
    CardHeader,
    CardTitle,
    CardContent
  },
  methods: {
    handlePrimaryDismissed: function() {
      this.primaryIsDismissed = !this.primaryIsDismissed;
    },
    handleSecondaryDismissed: function() {
      this.secondaryIsDismissed = !this.secondaryIsDismissed;
    },
    handleTertiaryDismissed: function() {
      this.tertiaryIsDismissed = !this.tertiaryIsDismissed;
    }
  },
  data: function() {
    return {
      primaryIsDismissed: false,
      secondaryIsDismissed: false,
      tertiaryIsDismissed: false
    };
  }
};
</script>
