<template>
  <StyledWrapper>
    <StyledBlock>
      <StyledBlockValue>£836</StyledBlockValue>
      <StyledBlockLabel>Total Value</StyledBlockLabel>
    </StyledBlock>
    <StyledPercentage>
      8.9%
    </StyledPercentage>
    <StyledIcon iconSize="32px">
      arrow_drop_down
    </StyledIcon>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "../../../shared/icons";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem 1.5rem 0;
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 1rem;
`;

const StyledBlockValue = styled.div`
  font-size: 30px;
  margin-bottom: 0.325rem;
`;

const StyledBlockLabel = styled.div`
  color: ${props => props.theme.colorSubtitle};
  font-size: 13px;
`;

const StyledPercentage = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colorRed};
`;

const StyledIcon = styled(MatIcon)`
  color: ${props => props.theme.colorRed} !important;
`;

export default {
  components: {
    StyledWrapper,
    StyledBlock,
    StyledBlockValue,
    StyledBlockLabel,
    StyledPercentage,
    StyledIcon
  }
};
</script>
