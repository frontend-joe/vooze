<template>
  <card>
    <CardHeader>
      <CardTitle cardTitle="Colors" />
    </CardHeader>
    <CardContent>
      <StyledButton red>Red</StyledButton>
      <StyledButton blue>Blue</StyledButton>
      <StyledButton green>Green</StyledButton>
      <StyledButton orange>Orange</StyledButton>
      <StyledButton purple>Purple</StyledButton>
      <StyledButton teal>Teal</StyledButton>
      <StyledButton pink>Pink</StyledButton>
      <StyledButton indigo>Indigo</StyledButton>
      <StyledButton yellow>Yellow</StyledButton>
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
