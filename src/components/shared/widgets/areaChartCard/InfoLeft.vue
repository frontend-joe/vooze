<template>
  <StyledWrapper>
    <StyledTitle>
      Reach
    </StyledTitle>
    <StyledSubtitle>
      This month impressions
    </StyledSubtitle>
    <StyledBlock>
      <StyledBlockValue>
        74%
      </StyledBlockValue>
      <StyledBlockIcon iconSize="32px">
        arrow_drop_up
      </StyledBlockIcon>
    </StyledBlock>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "../../../shared/icons";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.div`
  font-size: 15px;
  color: ${props => props.theme.colorText};
  margin-bottom: 0.325rem;
`;

const StyledSubtitle = styled.div`
  font-size: 13px;
  color: ${props => props.theme.colorSubtitle};
  margin-bottom: 1rem;
`;

const StyledBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledBlockValue = styled.div`
  font-size: 32px;
  color: ${props => props.theme.colorAccent};
`;

const StyledBlockIcon = styled(MatIcon)`
  color: ${props => props.theme.colorIconActive};
`;

export default {
  components: {
    StyledWrapper,
    StyledTitle,
    StyledSubtitle,
    StyledBlock,
    StyledBlockValue,
    StyledBlockIcon
  }
};
</script>
