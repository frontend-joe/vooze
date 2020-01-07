<template>
  <StyledTitleBlock>
    <StyledTitleBlock__Title>
      Revenue
    </StyledTitleBlock__Title>
    <StyledTitleBlock__Subitle>
      This year
    </StyledTitleBlock__Subitle>
  </StyledTitleBlock>
</template>

<script>
import styled from "vue-styled-components";

const StyledTitleBlock = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const StyledTitleBlock__Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const StyledTitleBlock__Subitle = styled.div`
  font-size: 13px;
  color: ${props => props.theme.colorSubtitle};
`;

export default {
  components: {
    StyledTitleBlock,
    StyledTitleBlock__Title,
    StyledTitleBlock__Subitle
  }
};
</script>
