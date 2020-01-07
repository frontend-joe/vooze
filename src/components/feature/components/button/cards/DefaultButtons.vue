<template>
  <card>
    <CardHeader>
      <CardTitle cardTitle="Default" />
    </CardHeader>
    <CardContent>
      <StyledButton primary>Primary</StyledButton>
      <StyledButton secondary>Accent</StyledButton>
      <StyledButton>Default</StyledButton>
      <StyledButton :style="{ display: 'none' }" plain
        >Transparent</StyledButton
      >
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
