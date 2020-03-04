<template>
  <Card padding="1.5rem">
    <StyledWrapper>
      <StyledTopRow>
        <img :src="imageUrl" />
        <StyledBlock>
          <StyledBlockTitle>
            Flying Elephant
          </StyledBlockTitle>
          <StyledBlockSubtitle>
            Callum Hill
          </StyledBlockSubtitle>
        </StyledBlock>
      </StyledTopRow>
      <StyledText>
        Some description about the card. This widget could be used to describe a
        project, a product, user’s profile or may be more.
      </StyledText>
      <CoolButton primary>Go to detail</CoolButton>
    </StyledWrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { CoolButton } from "../../../../../shared/buttons";

const StyledWrapper = styled.div``;

const StyledTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 1rem;
`;

const StyledBlockTitle = styled.div`
  font-size: 19px;
  margin-bottom: 0.5rem;
`;

const StyledBlockSubtitle = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colorSubtitle};
`;

const StyledText = styled.div`
  color: ${props => props.theme.colorSubtitle};
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

export default {
  components: {
    StyledWrapper,
    Card,
    StyledTopRow,
    StyledBlock,
    StyledBlockTitle,
    StyledBlockSubtitle,
    CoolButton,
    StyledText
  },
  data: function() {
    return {
      imageUrl: require("../../../../../../assets/images/icon-project-3.png")
    };
  }
};
</script>
