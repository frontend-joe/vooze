<template>
  <StyledWrapper>
    <Avatar size="32px" :name="item.image" />
    <StyledText>
      {{ item.text }}
    </StyledText>
    <Badge :color="item.color" :style="{ marginRight: '1rem' }" />
    <MatIconButton iconSize="15px">more_vert</MatIconButton>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Avatar, Badge } from "../../../../../shared/common";
import { MatIconButton } from "../../../../../shared/buttons";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.425rem 0;
`;

const StyledText = styled.div`
  flex: 1;
  font-size: 0.825rem;
  margin-left: 1rem;
`;

export default {
  props: {
    item: Object
  },
  components: {
    StyledWrapper,
    Avatar,
    Badge,
    StyledText,

    MatIconButton
  }
};
</script>
