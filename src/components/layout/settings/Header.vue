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
  font-weight: bold;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid ${props => props.theme.colorBorder};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default {
  components: {
    StyledWrapper,
    MatIconButton
  }
};
</script>
