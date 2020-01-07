<template>
  <styled-wrapper>
    <card>
      <CardHeader>
        <CardTitle cardTitle="Coloured" />
      </CardHeader>
      <CardContent>
        <StyledAlert blue>This is a blue alert.</StyledAlert>
        <StyledAlert purple>
          This is a purple alert.
        </StyledAlert>
        <StyledAlert indigo>This is an indigo alert.</StyledAlert>
        <StyledAlert red solid>This is a red solid alert.</StyledAlert>
        <StyledAlert green solid>This is a green solid alert.</StyledAlert>
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
