<template>
  <StyledWrapper>
    <FigureCardSkeleton v-if="loading" />
    <Card
      fixedHeight="130px"
      v-if="!loading"
      overflowHidden
      padding="0 2rem"
      :loading="loading"
      :cardLabel="item.title"
    >
      <StyledCardContent>
        <StyledText>
          <StyledValue>{{ item.value }}</StyledValue>
          <StyledUpdated> {{ item.updated }}</StyledUpdated>
        </StyledText>
        <StyledIcon>
          <TonIcon iconSize="48px" :icon="item.icon" iconColor="IconActive" />
        </StyledIcon>
      </StyledCardContent>
    </Card>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { TonIcon } from "../../../../../shared/icons";
import FigureCardSkeleton from "./FigureCardSkeleton";

const StyledWrapper = styled.div``;

const StyledCardContent = styled.div`
  display: flex;
  height: 130px;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1 0 50%;
  width: 50%;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const StyledValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colorText};
  margin-bottom: 0.425rem;
`;

const StyledUpdated = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colorSubtitle};
`;

export default {
  props: {
    item: Object,
    loading: Boolean
  },
  components: {
    StyledWrapper,
    Card,
    StyledCardContent,
    StyledText,
    StyledIcon,
    StyledValue,
    StyledUpdated,
    TonIcon,
    FigureCardSkeleton
  }
};
</script>
