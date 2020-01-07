<template>
  <card fixedHeight="300px" padding="0 0 20px" overflowHidden flexVertical>
    <CardHeader>
      <CardTitle cardTitle="Wage Budget" cardSubtitle="Total used" />
      <StyledCardTitleLink>More Options</StyledCardTitleLink>
    </CardHeader>
    <StyledCardContent>
      <StyledCardContentLeft>
        <PieChart />
      </StyledCardContentLeft>
      <StyledCardContentRight>
        <InfoLegend />
      </StyledCardContentRight>
    </StyledCardContent>
  </card>
</template>

<script>
import { Card, CardHeader, CardTitle } from "../../../../../shared/card";
import styled from "vue-styled-components";
import PieChart from "./PieChart";
import InfoLegend from "./InfoLegend";

const StyledCardTitleLink = styled.a`
  font-size: 13px;
  color: ${props => props.theme.colorSecondary};
`;

const StyledCardContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  max-width: 100%;
  width: 100%;
`;

const StyledCardContentLeft = styled.div`
  flex: 0 0 auto;
  min-width: 1;
  max-width: 220px;
  position: relative;
  padding-right: 1rem;
`;

const StyledCardContentRight = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
`;

export default {
  components: {
    Card,
    CardHeader,
    CardTitle,
    StyledCardTitleLink,
    StyledCardContent,
    StyledCardContentLeft,
    StyledCardContentRight,
    PieChart,
    InfoLegend
  }
};
</script>
