<template>
  <Card>
    <styled-wrapper>
      <StyledIcon icon="ti-Line-Email" />
      <Textbox placeholder="Email" />
      <CoolButton lg isGradient>
        Subscribe
      </CoolButton>
    </styled-wrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { CoolButton } from "../../../../../shared/buttons";
import { TonIcon } from "../../../../../shared/icons";
import { Textbox } from "../../../../../shared/forms";

const StyledWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  height: 250px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const StyledIcon = styled(TonIcon)`
  font-size: 40px;
`;

export default {
  components: {
    StyledWrapper,
    Card,
    CoolButton,
    StyledIcon,
    Textbox
  }
};
</script>
