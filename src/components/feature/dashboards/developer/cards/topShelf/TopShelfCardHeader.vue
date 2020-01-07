<template>
  <styled-wrapper>
    <CoolIcon iconSize="22px" :icon="icon" iconColor="Primary" />
    <StyledTitle>{{ title }}</StyledTitle>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { CoolIcon } from "../../../../../shared/icons";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colorText};
  margin-left: 0.575rem;
`;

export default {
  props: {
    title: String,
    icon: String
  },
  components: {
    StyledWrapper,
    StyledTitle,
    CoolIcon
  }
};
</script>
