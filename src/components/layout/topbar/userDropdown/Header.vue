<template>
  <StyledWrapper>
    <Avatar size="40px" name="dominic" />

    <StyledTextStack>
      <StyledTextStackTitle>
        Joe
      </StyledTextStackTitle>
      <StyledTextStackSubtitle>
        Developer
      </StyledTextStackSubtitle>
    </StyledTextStack>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Avatar } from "../../../shared/common";

const StyledWrapper = styled.div`
  ${props => props.theme.colorPrimaryGradient};
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const StyledTextStack = styled.div`
  margin-left: 1rem;
`;

const StyledTextStackTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 0.275rem;
`;

const StyledTextStackSubtitle = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.57);
`;

export default {
  components: {
    StyledWrapper,
    Avatar,
    StyledTextStackSubtitle,
    StyledTextStackTitle,
    StyledTextStack
  }
};
</script>
