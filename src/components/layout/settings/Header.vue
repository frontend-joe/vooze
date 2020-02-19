<template>
  <styled-wrapper>
    Settings
    <MatIconButton @click="$emit('close-button-clicked')">
      close
    </MatIconButton>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIconButton } from "../../shared/buttons";

const StyledWrapper = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colorSubtitle};
  font-weight: normal;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colorBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    & button {
      display: none;
    }
  }
`;

export default {
  components: {
    StyledWrapper,
    MatIconButton
  }
};
</script>
