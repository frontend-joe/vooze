<template>
  <Card>
    <CardHeader>
      <CardTitle cardTitle="Default" />
    </CardHeader>
    <CardContent>
      <styled-wrapper>
        <StyledChip themeColor="Primary">
          Primary
        </StyledChip>
        <StyledChip themeColor="Secondary">
          Secondary
        </StyledChip>
        <StyledChip isGradient>
          Gradient
        </StyledChip>
        <StyledChip themeColor="Red" isRounded>
          Rounded
        </StyledChip>
        <StyledChip themeColor="Accent" hasShadow>
          Shadow
        </StyledChip>
      </styled-wrapper>
    </CardContent>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../../../shared/card";
import { Chip } from "../../../../shared/chip";

const StyledWrapper = styled.div``;

const StyledChip = styled(Chip)`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export default {
  components: {
    StyledWrapper,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    StyledChip
  }
};
</script>
