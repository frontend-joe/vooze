<template>
  <PageWrapper>
    <DrippingBackground :minWidth="2560" :drips="125" />
    <Dialog dialogTitle="Login">
      <Textbox autoFocus icon="person" placeholder="Username" />
      <Textbox icon="lock" placeholder="Password" isPassword />
      <Checkbox label="Remember Me" />
      <CoolButton lg isFullWidth isGradient>Login</CoolButton>
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
