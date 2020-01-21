<template>
  <Card minHeight="320px" overflowHidden :loading="loading" showLoadingSpinner>
    <CardHeader v-if="!loading">
      <CardTitle cardTitle="Top Tutorial" />
      <MatIconButton
        circle
        backgroundColor="Primary"
        accent
        height="40px"
        forDark
        width="40px"
        iconSize="17px"
      >
        thumb_up
      </MatIconButton>
    </CardHeader>
    <CardContent v-if="!loading">
      <StyledImageRow>
        <StyledImage :src="imageUrl" />
        <StyledTitleBlock>
          <StyledTitle>
            Figma For Beginners
          </StyledTitle>
          <StyledRatings :rating="4.5" />
          <StyledPowerBarRow>
            <StyledPowerBar color="Green" :percentage="45" />
          </StyledPowerBarRow>
        </StyledTitleBlock>
      </StyledImageRow>
      <StyledTextRow>
        Figma allows you to design and prototype your digital experiences,
        together, in real-tim...
      </StyledTextRow>
      <HyperLink>Read More</HyperLink>
    </CardContent>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "../../../../../shared/card";
import { MatIconButton, HyperLink } from "../../../../../shared/buttons";
import { Ratings, PowerBar } from "../../../../../shared/common";

const StyledImageRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.75rem;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 1.85rem;
  margin-bottom: 1rem;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    margin-bottom: 0;
  }
`;

const StyledTitleBlock = styled.div``;

const StyledTitle = styled.div`
  color: ${props => props.theme.colorPrimary};
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0.75rem;
`;

const StyledRatings = styled(Ratings)`
  margin-bottom: 1rem;
`;

const StyledPowerBarRow = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPowerBar = styled(PowerBar)`
  width: 80px;
`;

// const StyledPowerBarLabel = styled.div`
//   font-size: 12px;
//   color: ${props => props.theme.colorSubtitle};
//   margin-left: 0.5rem;
// `;

const StyledTextRow = styled.div`
  line-height: 1.35;
  font-weight: normal;
  margin-bottom: 1rem;
`;

export default {
  props: {
    loading: Boolean
  },
  components: {
    StyledImageRow,
    StyledImage,
    StyledTitleBlock,
    StyledTitle,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    MatIconButton,
    StyledRatings,
    StyledPowerBarRow,
    StyledPowerBar,
    //StyledPowerBarLabel,
    StyledTextRow,
    HyperLink
  },
  data: function() {
    return {
      imageUrl: require("../../../../../../assets/images/figma-logo.png")
    };
  }
};
</script>
