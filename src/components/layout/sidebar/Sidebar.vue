<template>
  <styled-wrapper
    @mouseover="toggleIsHovered(true)"
    @mouseleave="toggleIsHovered(false)"
    :open="sidebar.isOpen"
    :collapsed="sidebar.isCollapsed"
    :isHovered="sidebar.isHovered"
  >
    <sidebar-nav
      :isCollapsed="sidebar.isCollapsed"
      :isHovered="sidebar.isHovered"
    />
  </styled-wrapper>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import styled from "vue-styled-components";

const theProps = {
  open: Boolean,
  collapsed: Boolean,
  isHovered: Boolean
};

const StyledWrapper = styled("div", theProps)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background: ${props => props.theme.colorSidebar};
  color: white;
  padding-top: 0;
  transform: ${props => (props.open ? "translateX(0)" : "translateX(-200px)")};
  transition: transform 0.25s, width 0.25s;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    transform: translateX(0);
    z-index: 10;
    padding-top: 72px;
    width: ${props => (!props.collapsed || props.isHovered ? "200px" : "64px")};
  }
`;

import SidebarNav from "./SidebarNav";
export default {
  props: theProps,
  components: {
    StyledWrapper,
    SidebarNav
  },
  methods: {
    ...mapActions(["toggleIsHovered"])
  },
  computed: mapGetters(["sidebar"])
};
</script>
