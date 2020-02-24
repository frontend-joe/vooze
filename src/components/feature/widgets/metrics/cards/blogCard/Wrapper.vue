<template>
  <StyledCard padding="1.5rem" fixedHeight="400px">
    <StyledImage :src="card.image" />
    <StyledTitle>
      {{ card.title }}
    </StyledTitle>
    <StyledText>
      {{ card.text }}
    </StyledText>
    <StyledBottomRow>
      <Avatar :name="card.name" />
      <StyledAuthor>
        {{ card.name }}
      </StyledAuthor>
      <StyledIcon>favorite_border</StyledIcon>
      <StyledIconText>{{ card.likes }}</StyledIconText>
      <StyledIcon>message</StyledIcon>
      <StyledIconText>{{ card.messages }}</StyledIconText>
    </StyledBottomRow>
  </StyledCard>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { Avatar } from "../../../../../shared/common";
import { MatIcon } from "../../../../../shared/icons";

const StyledCard = styled(Card)`
  &:hover > img {
    transform: translateY(-55px);
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  border-radius: 0.5rem;
  transform: translateY(-40px);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);

  transition: transform 0.25s;
`;

const StyledTitle = styled.div`
  font-size: 18px;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colorAccent};
`;

const StyledText = styled.div`
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5;
  color: ${props => props.theme.colorSubtitle};
  margin-bottom: 1rem;
`;

const StyledBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledAuthor = styled.div`
  margin-left: 1rem;
  flex: 1;
  text-transform: capitalize;
  color: ${props => props.theme.colorAccent};
`;

const StyledIcon = styled(MatIcon)`
  margin: 0 0.5rem 0 1.5rem;
  color: ${props => props.theme.colorAccent} !important;
`;

const StyledIconText = styled.div`
  color: ${props => props.theme.colorSubtitle};
`;

export default {
  props: {
    card: Object
  },
  components: {
    StyledCard,
    StyledImage,
    StyledTitle,
    StyledText,
    Avatar,
    StyledBottomRow,
    StyledAuthor,
    StyledIcon,
    StyledIconText
  }
};
</script>
