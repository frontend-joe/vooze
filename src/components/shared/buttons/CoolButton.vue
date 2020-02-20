<template>
  <cool-button
    :sm="sm"
    :lg="lg"
    :isGradient="isGradient"
    :isFullWidth="isFullWidth"
    :icon="icon"
    :iconPosition="iconPosition"
    :primary="primary"
    :secondary="secondary"
    :success="success"
    :outline="outline"
    :rounded="rounded"
    :dropdown="dropdown"
    :plain="plain"
    :red="red"
    :blue="blue"
    :green="green"
    :purple="purple"
    :orange="orange"
    :teal="teal"
    :pink="pink"
    :yellow="yellow"
    :indigo="indigo"
    @click="$emit('click')"
  >
    <StyledIcon
      :sm="sm"
      :iconPosition="iconPosition"
      v-if="icon && iconPosition === 'left'"
      >{{ icon }}</StyledIcon
    >
    <span>
      <slot />
    </span>
    <StyledIcon
      :sm="sm"
      :iconPosition="iconPosition"
      v-if="icon && iconPosition === 'right'"
      >{{ icon }}</StyledIcon
    >
    <StyledDropdownIcon :sm="sm" class="dropdown-icon" v-if="dropdown"
      >keyboard_arrow_down</StyledDropdownIcon
    >
  </cool-button>
</template>

<script>
import styled, { css } from "vue-styled-components";
import { darken } from "polished";
import { MatIcon } from "../icons";

const btnProps = {
  click: {
    type: Function,
    required: false
  },
  isFullWidth: Boolean,
  isGradient: Boolean,
  sm: Boolean,
  lg: Boolean,
  primary: Boolean,
  secondary: Boolean,
  success: Boolean,
  outline: Boolean,
  rounded: Boolean,
  dropdown: Boolean,
  plain: Boolean,
  red: Boolean,
  blue: Boolean,
  green: Boolean,
  purple: Boolean,
  orange: Boolean,
  teal: Boolean,
  pink: Boolean,
  yellow: Boolean,
  indigo: Boolean,
  icon: String,
  iconPosition: String
};

const buttonDefaults = css`
  border: 0;

  ${props =>
    !props.dropdown && !props.icon
      ? props.sm
        ? "padding: 0 0.625rem"
        : "padding: 0 1rem"
      : ""};

  ${props =>
    props.dropdown
      ? props.sm
        ? "padding: 0 0.375rem 0 0.75rem"
        : "padding: 0 0.5rem 0 1rem"
      : ""};

  padding: ${props =>
    props.dropdown ? "" : props.sm ? "0 0.75rem" : "0 1rem"};
  min-width: 80px;
  width: ${props => (props.isFullWidth ? "100%" : "auto")};

  font-weight: normal;
  font-size: 13px;
  ${props => (props.sm ? "font-size: 12px" : "")};
  ${props => (props.lg ? "font-size: 14px" : "")};

  display: ${props => (props.dropdown || props.icon ? "flex" : "inline-block")};
  ${props => (props.dropdown || props.icon ? "align-items: center;" : "")};
  height: ${props => (props.sm ? "32px" : "40px")};
  line-height: 1;
  border-radius: ${props =>
    props.rounded ? "20px" : props.theme.borderButtonRadius};
`;

const generateButton = (
  outline,
  color,
  colorHover,
  textColor,
  textColorOutline,
  textColorHover,
  textColorOutlineHover,
  borderColorHover,
  isGradient
) => {
  return css`
    background: ${!outline ? color : "transparent"};

    ${props => (isGradient ? props.theme.colorPrimaryGradient : "")};
    color: ${!outline ? textColor : textColorOutline};
    border: 1px solid ${color};

    &:hover {
      background: ${colorHover || (!outline ? darken(0.05, color) : color)};
      border-color: ${borderColorHover ||
        (!outline && !isGradient ? darken(0.05, color) : color)};
      color: ${!outline ? textColorHover : textColorOutlineHover};

      & > i {
        color: ${!outline ? textColorHover : textColorOutlineHover} !important;
      }
    }

    & > i {
      color: ${!outline ? textColor : textColorOutline} !important;
    }
  `;
};

const defaultButton = css`
  ${props =>
    generateButton(
      props.outline,
      props.theme.colorButtonDefault,
      undefined,
      props.theme.colorText,
      props.theme.colorText,
      props.theme.colorText,
      props.theme.colorText
    )}
`;

const plainButton = css`
  ${props =>
    generateButton(
      props.outline,
      "transparent",
      "#ebebeb",
      props.theme.colorText,
      props.theme.colorText,
      props.theme.colorText,
      props.theme.colorWhite
    )}
`;

const gradientButton = css`
  ${props => props.theme.colorPrimaryGradient};
  color: white;
`;

const standardColorButton = color => {
  return css`
    ${props =>
      generateButton(
        props.outline,
        color,
        undefined,
        props.theme.colorWhite,
        color,
        props.theme.colorWhite,
        props.theme.colorWhite
      )}
  `;
};

const CoolButton = styled("button", btnProps)`
  ${buttonDefaults};

  ${props =>
    props.primary ? standardColorButton(props.theme.colorPrimary) : ""};
  ${props =>
    props.secondary ? standardColorButton(props.theme.colorSecondary) : ""};
  ${props => (props.red ? standardColorButton(props.theme.colorRed) : "")};
  ${props => (props.blue ? standardColorButton(props.theme.colorBlue) : "")};
  ${props => (props.green ? standardColorButton(props.theme.colorGreen) : "")};
  ${props =>
    props.purple ? standardColorButton(props.theme.colorPurple) : ""};
  ${props =>
    props.orange ? standardColorButton(props.theme.colorOrange) : ""};
  ${props => (props.teal ? standardColorButton(props.theme.colorTeal) : "")};
  ${props =>
    props.yellow ? standardColorButton(props.theme.colorYellow) : ""};
  ${props =>
    props.indigo ? standardColorButton(props.theme.colorIndigo) : ""};
  ${props => (props.pink ? standardColorButton(props.theme.colorPink) : "")};

  ${props =>
    !props.primary &&
    !props.secondary &&
    !props.red &&
    !props.blue &&
    !props.green &&
    !props.purple &&
    !props.orange &&
    !props.teal &&
    !props.yellow &&
    !props.pink &&
    !props.indigo &&
    !props.isGradient
      ? defaultButton
      : ""}

  ${props => (props.plain ? plainButton : "")};
  ${props => (props.isGradient ? gradientButton : "")};

  & > span {
    transform: translateY(-1px);
  }
`;

const StyledDropdownIcon = styled(MatIcon, btnProps)`
  font-size: ${props => (props.sm ? "14px" : "18px")} !important;
  margin-left: 0.5rem;
`;

const StyledIcon = styled(MatIcon, btnProps)`
  font-size: ${props => (props.sm ? "14px" : "18px")} !important;
  ${props => (props.iconPosition === "left" ? "margin-right: 0.5rem" : "")};
  ${props => (props.iconPosition === "right" ? "margin-left: 0.5rem" : "")};
`;

export default {
  props: btnProps,
  components: {
    CoolButton,
    StyledIcon,
    StyledDropdownIcon
  }
};
</script>
