<template>
  <PageWrapper>
    <DrippingBackground :minWidth="2560" :drips="125" />
    <Dialog dialogTitle="Forgot Password">
      <Textbox icon="email" placeholder="Email" />
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
