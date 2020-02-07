<template>
  <styled-wrapper
    :sidebarIsCollapsed="sidebar.isCollapsed"
    :cardStyleId="settings.cardStyleId"
  >
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { mapGetters } from "vuex";

const wrapperProps = {
  sidebarIsCollapsed: Boolean,
  cardStyleId: String
};
const StyledWrapper = styled("div", wrapperProps)`
  padding: 0 1.625rem;
  transform: translateX(0);

  background: ${props =>
    props.cardStyleId === "neumorphic" ? "#f5f5f5" : "white"};

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    padding: 0 1.625rem 0;
    transform: ${props =>
      props.sidebarIsCollapsed ? "translateX(64px)" : "translateX(200px)"};
    width: ${props =>
      props.sidebarIsCollapsed ? "calc(100% - 64px)" : "calc(100% - 200px)"};
  }
`;

export default {
  components: {
    StyledWrapper
  },
  computed: mapGetters(["sidebar", "settings"])
};
</script>
