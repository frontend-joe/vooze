<template>
  <styled-wrapper>
    <card>
      <CardHeader>
        <CardTitle cardTitle="Default" />
      </CardHeader>
      <CardContent>
        <StyledAlert primary>This is a primary alert.</StyledAlert>
        <StyledAlert secondary solid>
          This is a solid secondary alert.
        </StyledAlert>
        <StyledAlert red>This is a red alert.</StyledAlert>
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

const StyledAlert = styled(Alert)`
  margin-bottom: 0.5rem;
`;

export default {
  components: {
    StyledWrapper,
    StyledAlert,
    Card,
    CardHeader,
    CardTitle,
    CardContent
  }
};
</script>
