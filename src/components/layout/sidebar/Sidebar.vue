<template>
  <styled-wrapper :open="sidebar.isOpen">
    <sidebar-nav />
  </styled-wrapper>
</template>

<script>
import { mapGetters } from "vuex";
import styled from "vue-styled-components";

const theProps = { open: Boolean };
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
  transition: transform 0.25s;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    transform: translateX(0);
    z-index: 10;
    padding-top: 72px;
  }
`;

import SidebarNav from "./SidebarNav";
export default {
  props: {
    open: Boolean
  },
  components: {
    StyledWrapper,
    SidebarNav
  },
  computed: mapGetters(["sidebar"])
};
</script>
