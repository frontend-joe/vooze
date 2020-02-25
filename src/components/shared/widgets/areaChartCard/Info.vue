<template>
  <StyledWrapper>
    <StyledLeft>
      <InfoLeft />
    </StyledLeft>
    <StyledRight>
      <InfoRight />
    </StyledRight>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import InfoLeft from "./InfoLeft";
import InfoRight from "./InfoRight";

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0;
`;

const StyledLeft = styled.div`
  flex: 1;
`;

const StyledRight = styled.div``;

export default {
  components: {
    StyledWrapper,
    StyledLeft,
    StyledRight,
    InfoLeft,
    InfoRight
  }
};
</script>
