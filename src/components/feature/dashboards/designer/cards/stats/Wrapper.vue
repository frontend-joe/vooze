<template>
  <Card overflowHidden v-if="data">
    <StyledCardContent>
      <StatItem v-for="item in data.items" :key="item.id" :item="item" />
      <StyledIcon>
        <TonIcon :icon="data.icon" iconSize="48px" iconColor="IconActive" />
      </StyledIcon>
    </StyledCardContent>
    <StyledLabel>{{ data.title }}</StyledLabel>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import StatItem from "./StatItem";
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
  justify-content: center;
  width: 20%;
  flex: 0 0 20%;
`;

export default {
  props: {
    data: Object
  },
  components: {
    Card,
    TonIcon,
    StyledLabel,
    StyledCardContent,
    StyledIcon,
    StatItem
  }
};
</script>
