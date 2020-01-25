<template>
  <StyledLikeRow>
    <StyledLikeBlock>
      <StyledLikeBlockLabel>
        Likes
      </StyledLikeBlockLabel>
      <StyledLikeBlockValue>
        2.5k
      </StyledLikeBlockValue>
    </StyledLikeBlock>
    <StyledLikeBlock>
      <StyledLikeBlockLabel>
        Reach
      </StyledLikeBlockLabel>
      <StyledLikeBlockValue>
        1.4k
      </StyledLikeBlockValue>
    </StyledLikeBlock>
  </StyledLikeRow>
</template>

<script>
import styled from "vue-styled-components";

const StyledLikeRow = styled.div`
  display: flex;
`;

const StyledLikeBlock = styled.div`
  border-right: 1px solid ${props => props.theme.colorBorder};
  padding-right: 0.325rem;
  margin-right: 0.325rem;
  display: flex;
  align-items: center;

  &:last-child {
    border: 0;
  }
`;

const StyledLikeBlockLabel = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colorSubtitle};
  margin-right: 0.325rem;
`;

const StyledLikeBlockValue = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colorText};
`;

export default {
  components: {
    StyledLikeRow,
    StyledLikeBlock,
    StyledLikeBlockLabel,
    StyledLikeBlockValue
  }
};
</script>
