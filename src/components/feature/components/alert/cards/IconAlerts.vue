<template>
  <styled-wrapper>
    <card>
      <CardHeader>
        <CardTitle cardTitle="Icon" />
      </CardHeader>
      <CardContent>
        <StyledAlert primary icon="warning">Password is not valid.</StyledAlert>
        <StyledAlert secondary rounded icon="info">
          We are accessible to everyone.
        </StyledAlert>
        <StyledAlert rounded primary icon="assignment" showContentBox>
          By reading this statement you are agreeing to the Terms and Conditions
          laid out in chapter 4 of this document.
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

const StyledAlert = styled(Alert)`
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
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
