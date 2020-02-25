<template>
  <StyledWrapper :fixedWidth="fixedWidth">
    <StyledTextbox
      :rounded="rounded"
      :icon="icon"
      :iconPosition="iconPosition"
      :placeholder="placeholder || 'Search ...'"
      :value="textboxValue"
      type="text"
      v-model="textboxValue"
    />
    <StyledIcon v-if="icon" iconSize="18px" :iconPosition="iconPosition">{{
      icon
    }}</StyledIcon>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { darken } from "polished";
import { MatIcon } from "../icons";

const wrapperProps = { fixedWidth: String };
const StyledWrapper = styled("div", wrapperProps)`
  width: ${props => props.fixedWidth || "100%"};
  position: relative;
`;

const textboxProps = {
  rounded: Boolean,
  icon: String,
  iconPosition: String
};
const StyledTextbox = styled("input", textboxProps)`
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  border-radius: ${props =>
    props.rounded ? "20px" : props.theme.borderButtonRadius};
  background: ${props => props.theme.colorBackground};
  color: ${props => props.theme.colorText};
  border: 1px solid ${props => props.theme.colorBorder};
  padding: ${props =>
    props.icon && props.iconPosition === "left"
      ? "0 1rem 0 2.5rem"
      : props.icon && props.iconPosition === "right"
      ? "0 2.5rem 0 1rem"
      : "0 1rem"};

  &:hover {
    border-color: ${props => darken(0.025, props.theme.colorBorder)};
  }

  &:focus {
    border-color: ${props => darken(0.05, props.theme.colorBorder)};
  }

  &::placeholder {
    color: ${props => props.theme.colorPlaceholder};
  }

  &:focus + i {
    color: ${props => props.theme.colorAccent} !important;
  }
`;

const iconProps = { iconPosition: String };
const StyledIcon = styled(MatIcon, iconProps)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => (props.iconPosition === "left" ? "0.925rem" : "auto")};
  right: ${props => (props.iconPosition === "left" ? "auto" : "0.925rem")};
  color: ${props => props.theme.colorPlaceholder} !important;
`;

export default {
  props: {
    value: String,
    placeholder: String,
    icon: String,
    iconPosition: String,
    rounded: Boolean,
    fixedWidth: String
  },
  components: {
    StyledWrapper,
    StyledTextbox,
    StyledIcon
  },
  data: function() {
    return {
      textboxValue: this.value || ""
    };
  }
};
</script>
