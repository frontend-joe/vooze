<template>
  <PageWrapper>
    <DrippingBackground :minWidth="2560" :drips="125" />
    <Dialog dialogTitle="Register">
      <Textbox autoFocus icon="email" placeholder="Email" />
      <Textbox icon="lock" placeholder="Password" isPassword />
      <Textbox icon="lock" placeholder="Confirm Password" isPassword />
      <Checkbox label="I am a human" />
      <CoolButton lg isFullWidth isGradient>Register</CoolButton>
    </Dialog>
  </PageWrapper>
</template>

<script>
import { CoolButton } from "../../../shared/buttons";
import {
  PageWrapper,
  DrippingBackground,
  Textbox,
  Checkbox,
  Dialog
} from "../shared";

export default {
  components: {
    PageWrapper,
    Dialog,
    Textbox,
    Checkbox,
    CoolButton,
    DrippingBackground
  }
};
</script>
