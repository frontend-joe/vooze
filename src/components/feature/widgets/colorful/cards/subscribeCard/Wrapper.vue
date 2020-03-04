<template>
  <StyledCard padding="1.5rem" :gradient="gradient" overflowHidden>
    <StyledLabel>
      £25/month
    </StyledLabel>
    <StyledIcon icon="ti-Line-Heart" />
    <StyledTitle>3,642 Likes</StyledTitle>
    <StyledSubtitle>This week</StyledSubtitle>
    <StyledDescription>
      Now kickstart with your next design. Subscribe today and save $20/month
    </StyledDescription>
    <CoolButton lg accent>Subscribe</CoolButton>
  </StyledCard>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { TonIcon } from "../../../../../shared/icons";
import { CoolButton } from "../../../../../shared/buttons";

const cardProps = { gradient: String };
const StyledCard = styled(Card, cardProps)`
  color: white;
  ${props => (props.gradient === "Blue" ? props.theme.gradientBlue : "")};
  ${props => (props.gradient === "Pink" ? props.theme.gradientPink : "")};
  ${props => (props.gradient === "Yellow" ? props.theme.gradientYellow : "")};
  ${props => (props.gradient === "Green" ? props.theme.gradientGreen : "")};
  ${props => (props.gradient === "Purple" ? props.theme.gradientPurple : "")};
`;

const StyledLabel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${props => props.theme.colorAccent};
  color: white;
  border-bottom-left-radius: 0.75rem;
  font-size: 12px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  padding: 0 0.5rem;
  min-width: 60px;
`;

const StyledTitle = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 1rem;
  padding-top: 1rem;
`;

const StyledSubtitle = styled.div`
  font-size: 14px;
  margin-bottom: 1rem;
`;

const StyledDescription = styled.div`
  font-size: 13px;
  margin-bottom: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.67);
`;

const StyledIcon = styled(TonIcon)`
  color: white;
  font-size: 40px;
`;

export default {
  props: {
    gradient: String
  },
  components: {
    StyledCard,
    StyledLabel,
    StyledIcon,
    CoolButton,
    StyledTitle,
    StyledSubtitle,
    StyledDescription
  }
};
</script>
