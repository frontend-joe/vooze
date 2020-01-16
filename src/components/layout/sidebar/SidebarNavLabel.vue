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
  width: ${props => (props.isHovered || !props.isCollapsed ? "100%" : "64px")};
  background: transparent;
  border: 0;
  padding: ${props => (props.isHovered || !props.isCollapsed ? "0 1rem" : "0")};
  color: ${props =>
    props.isOpen
      ? props.theme.colorAccent
      : props.theme.colorSidebarButtonActive};
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  font-weight: 500;
  text-align: ${props => (props.isCollapsed ? "center" : "left")};
  display: flex;
  align-items: center;
  justify-content: ${props => (props.isCollapsed ? "center" : "flex-start")};

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
