<template>
  <PageWrapper>
    <DrippingBackground :minWidth="2560" :drips="125" />
    <Dialog dialogTitle="Locked">
      <Textbox icon="lock" placeholder="Password" isPassword />
      <CoolButton lg isFullWidth isGradient>Login</CoolButton>
    </Dialog>
  </PageWrapper>
</template>

<script>
import { CoolButton } from "../../../shared/buttons";
import { PageWrapper, DrippingBackground, Textbox, Dialog } from "../shared";

export default {
  components: {
    PageWrapper,
    Dialog,
    Textbox,
    CoolButton,
    DrippingBackground
  }
};
</script>
