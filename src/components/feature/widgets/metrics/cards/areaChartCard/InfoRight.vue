<template>
  <StyledWrapper>
    <StyledIcon iconSize="40px">arrow_right_alt</StyledIcon>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "../../../../../shared/icons";

const StyledWrapper = styled.div``;

const StyledIcon = styled(MatIcon)`
  color: ${props => props.theme.colorAccent} !important;
`;

export default {
  components: {
    StyledWrapper,
    StyledIcon
  }
};
</script>
