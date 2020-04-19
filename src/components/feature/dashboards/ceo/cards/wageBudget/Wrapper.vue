<template>
  <StyledCard padding="0 0 20px" overflowHidden flexVertical>
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
  </StyledCard>
</template>

<script>
import { Card, CardHeader, CardTitle } from "../../../../../shared/card";
import styled from "vue-styled-components";
import PieChart from "./PieChart";
import InfoLegend from "./InfoLegend";

const StyledCardTitleLink = styled.a`
  font-size: 13px;
  color: ${props => props.theme.colorText};
`;

const StyledCard = styled(Card)`
  height: 300px;

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    height: 400px;
    padding-bottom: 2rem;
  }
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
  padding: 0 1rem;

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    max-width: 320px;
  }
`;

const StyledCardContentRight = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
`;

export default {
  components: {
    StyledCard,
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
