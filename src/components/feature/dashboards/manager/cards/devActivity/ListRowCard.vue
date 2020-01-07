<template>
  <Card>
    <styled-wrapper>
      <StyledLeft> <Avatar size="60px" :name="name"/></StyledLeft>
      <StyledRight>
        <StyledBy>
          {{ by }}
        </StyledBy>
        <StyledText>
          {{ text }}
        </StyledText>
      </StyledRight>
    </styled-wrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { Avatar } from "../../../../../shared/common";

const StyledWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const StyledLeft = styled.div``;

const StyledRight = styled.div`
  padding-left: 1rem;
`;

const StyledBy = styled.div`
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0.325rem;
  color: ${props => props.theme.colorSubtitle};
`;

const StyledText = styled.div`
  font-size: 12px;
  line-height: 1.25;
  color: ${props => props.theme.colorText};
`;

export default {
  props: {
    name: String,
    by: String,
    text: String
  },
  components: {
    StyledWrapper,
    Card,
    StyledLeft,
    StyledRight,
    Avatar,
    StyledBy,
    StyledText
  }
};
</script>
