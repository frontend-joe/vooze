<template>
  <Card padding="1rem">
    <StyledWrapper>
      <StyledTopLeft><TitleStack label="New" value="1885"/></StyledTopLeft>
      <StyledBottomLeft>750K</StyledBottomLeft>
      <StyledTopRight>
        <BadgeIcon badgeSize="56px" isGradient isShadow>
          person
        </BadgeIcon>
      </StyledTopRight>
      <StyledBottomRight>Total Clients</StyledBottomRight>
    </StyledWrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { TitleStack } from "../../../../../shared/common";
import { BadgeIcon } from "../../../../../shared/icons";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 80px auto;
  align-items: start;
`;

const StyledTopLeft = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const StyledBottomLeft = styled.div`
  grid-column: 1;
  grid-row: 2;
  color: ${props => props.theme.colorSubtitle};
`;

const StyledTopRight = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: flex-end;
`;

const StyledBottomRight = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  justify-content: flex-end;
  color: ${props => props.theme.colorSubtitle};
`;

export default {
  components: {
    StyledWrapper,
    StyledTopLeft,
    StyledTopRight,
    StyledBottomLeft,
    StyledBottomRight,
    Card,
    TitleStack,
    BadgeIcon
  }
};
</script>
