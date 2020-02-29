<template>
  <Card flexVertical padding="1.5rem">
    <styled-wrapper>
      <StyledBlock>
        <StyledBlockLabel>
          {{ label }}
        </StyledBlockLabel>
        <StyledBlockValue>
          {{ value }}
        </StyledBlockValue>
      </StyledBlock>
      <CoolIcon :iconColor="iconColor" :icon="icon" iconSize="37px" />
    </styled-wrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../shared/card";
import { CoolIcon } from "../../../shared/icons";

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledBlock = styled.div`
  margin-right: 0.75rem;
  display: flex;
  flex-direction: column;
`;

const StyledBlockLabel = styled.div`
  font-size: 13px;
  color: ${props => props.theme.colorSubtitle};
  margin-bottom: 0.175rem;
`;

const StyledBlockValue = styled.div`
  font-size: 16px;
  ${props => props.theme.colorText};
`;

export default {
  props: {
    label: String,
    value: String,
    icon: String,
    iconColor: String
  },
  components: {
    StyledWrapper,
    Card,
    CoolIcon,
    StyledBlock,
    StyledBlockLabel,
    StyledBlockValue
  }
};
</script>
