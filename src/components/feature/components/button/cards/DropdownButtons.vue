<template>
  <card>
    <CardHeader>
      <CardTitle cardTitle="Dropdown" />
    </CardHeader>
    <CardContent>
      <ButtonList>
        <StyledButton dropdown primary>Primary</StyledButton>
        <StyledButton dropdown secondary>Accent</StyledButton>
        <StyledButton dropdown>Default</StyledButton>
        <StyledButton :style="{ display: 'none' }" dropdown plain
          >Transparent</StyledButton
        >
      </ButtonList>
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
import { CoolButton, ButtonList } from "../../../../shared/buttons";
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
    StyledButton,
    ButtonList
  }
};
</script>
