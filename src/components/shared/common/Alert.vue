<template>
  <styled-wrapper :isDismissed="isDismissed">
    <StyledAlert
      :solid="solid"
      :icon="icon"
      :primary="primary"
      :secondary="secondary"
      :rounded="rounded"
      :isDismissed="isDismissed"
      :red="red"
      :blue="blue"
      :green="green"
      :purple="purple"
      :orange="orange"
      :teal="teal"
      :pink="pink"
      :yellow="yellow"
      :indigo="indigo"
    >
      <StyledIcon iconSize="21px" v-if="icon">{{ icon }}</StyledIcon>

      <StyledAlertTitle v-if="alertTitle">
        {{ alertTitle }}
      </StyledAlertTitle>

      <slot v-if="!showContentBox"> </slot>

      <StyledContentBox v-if="showContentBox">
        <slot> </slot>
      </StyledContentBox>

      <StyledDismissButton
        v-on:click="$emit('on-dismissed')"
        iconSize="21px"
        v-if="dismissable"
      >
        <StyledDismissButtonIcon iconSize="17px">close</StyledDismissButtonIcon>
      </StyledDismissButton>
    </StyledAlert>
  </styled-wrapper>
</template>

<script>
import styled, { css } from "vue-styled-components";
import { MatIcon } from "../icons";

const alertProps = {
  solid: Boolean,
  primary: Boolean,
  secondary: Boolean,
  rounded: Boolean,
  dismissable: Boolean,
  isDismissed: Boolean,
  icon: String,
  showContentBox: Boolean,
  alertTitle: String,
  red: Boolean,
  blue: Boolean,
  green: Boolean,
  purple: Boolean,
  orange: Boolean,
  teal: Boolean,
  pink: Boolean,
  yellow: Boolean,
  indigo: Boolean
};

const StyledAlertTitle = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StyledWrapper = styled("div", alertProps)`
  overflow: hidden;
  height: ${props => (props.isDismissed ? "0px" : "none")};
  max-height: ${props => (props.isDismissed ? "0px" : "none")};
  transition: height 0.25s;
`;

const generateAlert = (background, textColor) => {
  return css`
    background: ${props => (props.solid ? textColor : background)};
    color: ${props => (props.solid ? "#ffffff" : textColor)};

    & > i,
    & > button > i {
      color: ${props => (props.solid ? "#ffffff" : textColor)} !important;
    }
  `;
};

const StyledAlert = styled("div", alertProps)`
  position: relative;
  border-radius: ${props =>
    props.rounded ? "30px" : props.theme.borderRadius};
  padding: ${props => (props.rounded ? "1rem 1.25rem" : "1rem")};
  font-size: 14px;
  opacity: ${props => (props.isDismissed ? 0 : 1)};

  transition: opacity 0.25s;
  display: flex;
  align-items: center;

  ${props =>
    props.primary
      ? generateAlert(props.theme.colorPrimaryFaint, props.theme.colorPrimary)
      : ""};
  ${props =>
    props.secondary
      ? generateAlert(
          props.theme.colorSecondaryFaint,
          props.theme.colorSecondary
        )
      : ""};
  ${props =>
    props.red
      ? generateAlert(props.theme.colorRedFaint, props.theme.colorRed)
      : ""};
  ${props =>
    props.orange
      ? generateAlert(props.theme.colorOrangeFaint, props.theme.colorOrange)
      : ""};

  ${props =>
    props.blue
      ? generateAlert(props.theme.colorBlueFaint, props.theme.colorBlue)
      : ""};

  ${props =>
    props.purple
      ? generateAlert(props.theme.colorPurpleFaint, props.theme.colorPurple)
      : ""};

  ${props =>
    props.indigo
      ? generateAlert(props.theme.colorIndigoFaint, props.theme.colorIndigo)
      : ""};

  ${props =>
    props.green
      ? generateAlert(props.theme.colorGreenFaint, props.theme.colorGreen)
      : ""};
`;

const StyledIcon = styled(MatIcon)`
  margin-right: 0.75rem;
`;

const StyledContentBox = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  flex: 1 1 auto;
  line-height: 1.5;
`;

const StyledDismissButtonIcon = styled(MatIcon)``;

const StyledDismissButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  z-index: 10;
  background: transparent;
  border: 0;
  margin: 0;
`;

export default {
  props: alertProps,
  components: {
    StyledWrapper,
    StyledAlert,
    StyledIcon,
    StyledDismissButton,
    StyledDismissButtonIcon,
    StyledContentBox,
    StyledAlertTitle
  }
};
</script>
