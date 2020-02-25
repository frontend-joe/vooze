<template>
  <StyledButton
    @click="toggleBlockOpen(section, name)"
    :isCollapsed="isCollapsed"
    :isOpen="isOpen"
    :isHovered="isHovered"
  >
    <StyledIcon iconSize="18px" :isOpen="isOpen">{{ icon }}</StyledIcon>
    <span class="text" v-if="!isCollapsed || isHovered">{{ name }}</span>
    <StyledChevronIcon
      iconSize="18px"
      v-if="(hasItems && !isCollapsed) || isHovered"
      :isOpen="isOpen"
    >
      keyboard_arrow_down
    </StyledChevronIcon>
  </StyledButton>
</template>

<script>
import { MatIcon } from "../../shared/icons";
import styled from "vue-styled-components";

const buttonProps = {
  isOpen: Boolean,
  isCollapsed: Boolean,
  isHovered: Boolean
};
const StyledButton = styled("button", buttonProps)`
  background: transparent;
  border: 0;
  padding: 0 1rem;
  color: ${props =>
    props.isOpen
      ? props.theme.colorAccent
      : props.theme.colorSidebarButtonActive};
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  text-align: left;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    width: ${props =>
      props.isHovered || !props.isCollapsed ? "100%" : "64px"};

    ${props =>
      props.isHovered && !props.isCollapsed
        ? "justify-content: center; text-align: left;"
        : ""}

    ${props =>
      props.isHovered && props.isCollapsed
        ? "justify-content: space-between; text-align: left;"
        : ""}

    ${props =>
      !props.isHovered && props.isCollapsed
        ? "padding: 0; justify-content: center; text-align: center;"
        : ""}
  }

  & .text {
    flex: 1;
    margin-left: 0.625rem;
  }
`;

const iconProps = { isOpen: Boolean };
const StyledIcon = styled(MatIcon, iconProps)`
  color: ${props =>
    props.isOpen
      ? props.theme.colorAccent
      : props.theme.colorSidebarButtonActive} !important;
`;

const chevronIconProps = { isOpen: Boolean };
const StyledChevronIcon = styled(MatIcon, chevronIconProps)`
  color: ${props =>
    props.isOpen
      ? props.theme.colorAccent
      : props.theme.colorSidebarButtonActive} !important;
  transform: ${props => (props.isOpen ? "rotate(0)" : "rotate(-90deg)")};
  transition: transform 0.125s;
`;

export default {
  components: {
    StyledButton,
    StyledIcon,
    StyledChevronIcon
  },
  props: {
    name: String,
    icon: String,
    toggleBlockOpen: Function,
    hasItems: Boolean,
    isOpen: Boolean,
    section: String,
    isCollapsed: Boolean,
    isHovered: Boolean
  }
};
</script>

<style module></style>
