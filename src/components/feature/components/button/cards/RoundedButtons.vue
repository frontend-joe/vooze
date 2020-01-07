<template>
  <card>
    <CardHeader>
      <CardTitle cardTitle="Rounded" />
    </CardHeader>
    <CardContent>
      <ButtonList>
        <StyledButton rounded primary>Primary</StyledButton>
        <StyledButton rounded secondary dropdown>Accent</StyledButton>
        <StyledButton rounded>Default</StyledButton>
        <StyledButton rounded outline purple dropdown
          >Outline Purple</StyledButton
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
