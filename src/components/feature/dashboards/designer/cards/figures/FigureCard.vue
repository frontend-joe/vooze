<template>
  <Card overflowHidden padding="0 2rem">
    <StyledLabel>
      {{ item.title }}
    </StyledLabel>
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
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { TonIcon } from "../../../../../shared/icons";

const StyledLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: ${props => props.theme.colorAccent};
  color: white;
  border-bottom-right-radius: 0.75rem;
  font-size: 12px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  padding: 0 0.5rem;
  min-width: 60px;
`;

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
    item: Object
  },
  components: {
    Card,
    StyledLabel,
    StyledCardContent,
    StyledText,
    StyledIcon,
    StyledValue,
    StyledUpdated,
    TonIcon
  }
};
</script>
