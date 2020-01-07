<template>
  <StyledWrapper>
    <StyledIcon iconSize="29px" :color="item.color">
      {{ item.icon }}
    </StyledIcon>
    <Badge :color="item.color" />
    <StyledTextProgressBlock>
      <StyledText>
        {{ item.text }}
      </StyledText>
      <StyledPowerBar
        :percentage="item.percentage"
        :color="item.color"
        :opacity="0.5"
      />
    </StyledTextProgressBlock>
    <StyledDate>
      2 days ago
    </StyledDate>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "../../../../../shared/icons";
import { Badge, PowerBar } from "../../../../../shared/common";

const StyledWrapper = styled.div`
  min-height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colorBorder};

  &:last-child {
    border: 0;
  }
`;

const StyledPowerBar = styled(PowerBar)`
  width: 100px;
`;

const iconProps = { color: String };
const StyledIcon = styled(MatIcon, iconProps)`
  color: ${props => props.theme[`color${props.color}`]} !important;
  margin: 0 0.625rem;
`;

const StyledTextProgressBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.25rem;
  flex: 1;
`;

const StyledText = styled.div`
  font-size: 14px;
  margin-bottom: 0.75rem;
`;

const StyledDate = styled.div`
  font-size: 10px;
  color: ${props => props.theme.colorSubtitle};
`;

export default {
  props: {
    item: Object
  },
  components: {
    StyledWrapper,
    StyledIcon,
    Badge,
    StyledPowerBar,
    StyledTextProgressBlock,
    StyledText,
    StyledDate
  }
};
</script>
