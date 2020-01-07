<template>
  <card>
    <CardHeader>
      <CardTitle cardTitle="Outline" />
    </CardHeader>
    <CardContent>
      <StyledButton outline primary>Primary</StyledButton>
      <StyledButton outline secondary>Accent</StyledButton>
      <StyledButton outline>Default</StyledButton>
    </CardContent>
  </card>
</template>

<script>
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "../../../../shared/card";
import { CoolButton } from "../../../../shared/buttons";
import styled from "vue-styled-components";

const StyledButton = styled(CoolButton)`
  margin: 0 0.5rem 0.5rem 0;
`;

export default {
  components: {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    StyledButton
  }
};
</script>
