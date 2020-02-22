<template>
  <PageWrapper>
    <DrippingBackground :minWidth="2560" :drips="125" />
    <Dialog dialogTitle="Locked">
      <StyledAvatarWrapper>
        <Avatar hasShadow name="bob" size="100px" />
        <StyledAvatarName>
          Bob Doe
        </StyledAvatarName>
      </StyledAvatarWrapper>
      <Textbox icon="lock" placeholder="Password" isPassword />
      <CoolButton lg isFullWidth isGradient>Login</CoolButton>
    </Dialog>
  </PageWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { CoolButton } from "../../../shared/buttons";
import { PageWrapper, DrippingBackground, Textbox, Dialog } from "../shared";
import { Avatar } from "../../../shared/common";

const StyledAvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 136px;
  margin-bottom: 2rem;
`;

const StyledAvatarName = styled.div`
  font-size: 18px;
`;

export default {
  components: {
    PageWrapper,
    Dialog,
    Textbox,
    CoolButton,
    DrippingBackground,
    Avatar,
    StyledAvatarWrapper,
    StyledAvatarName
  }
};
</script>
