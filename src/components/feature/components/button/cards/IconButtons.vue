<template>
  <card>
    <CardHeader>
      <CardTitle cardTitle="Icons" />
    </CardHeader>
    <CardContent>
      <StyledButtonList>
        <StyledButton icon="arrow_back" iconPosition="left" primary
          >Back</StyledButton
        >
        <StyledButton icon="arrow_right_alt" iconPosition="right" secondary
          >Next</StyledButton
        >
        <StyledButton icon="check_circle" iconPosition="right">Ok</StyledButton>
        <StyledButton
          red
          dropdown
          outline
          icon="error_outline"
          iconPosition="left"
          >Action</StyledButton
        >
      </StyledButtonList>
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

const StyledButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

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
    StyledButtonList
  }
};
</script>
