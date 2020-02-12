<template>
  <styled-wrapper>
    Settings

    <MatIconButton>
      close
    </MatIconButton>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIconButton } from "../../shared/buttons";

const StyledWrapper = styled.div`
  font-size: 16px;
  font-weight: normal;
  height: 72px;
  display: flex;
  align-items: center;
  margin: 0 1rem 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colorBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.screenWidthXl}) {
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
