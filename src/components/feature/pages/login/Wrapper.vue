<template>
  <StyledWrapper>
    <StyledDripping>
      <DrippingBackground :minWidth="2560" :drips="125" />
    </StyledDripping>
    <StyledCard>
      <StyledCardHeader>
        Login
      </StyledCardHeader>
      <Textbox autoFocus icon="person" placeholder="Username" />
      <Textbox icon="lock" placeholder="Password" />
      <Checkbox label="Remember Me" />
      <CoolButton lg isFullWidth isGradient>Login</CoolButton>
    </StyledCard>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../shared/card";
import { CoolButton } from "../../../shared/buttons";
import Textbox from "./Textbox";
import Checkbox from "./Checkbox";
import { DrippingBackground } from "../shared";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  ${"" /* background-image: url(${require("../../../../assets/images/vooze-bg-gloop.jpg")});
  background-size: cover;
  background-position: center; */}
  background: #242424;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 400px;
  padding: 2.5rem; 1.5rem;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.025),
    0 6px 30px 5px rgba(0, 0, 0, 0.05), 0 8px 10px -7px rgba(0, 0, 0, 0.075);
`;

const StyledCardHeader = styled.div`
  font-size: 19px;
  margin-bottom: 3rem;
`;

const StyledDripping = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export default {
  components: {
    StyledWrapper,
    StyledCard,
    StyledCardHeader,
    StyledDripping,
    Textbox,
    Checkbox,
    CoolButton,
    DrippingBackground
  }
};
</script>
