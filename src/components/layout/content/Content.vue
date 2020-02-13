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
  min-height: calc(100vh - 72px);
  transform: translateX(0);
  background: ${props => props.theme.colorBackground};

  ${props => (props.cardStyleId === "neumorphic" ? "background: #f3f3f3" : "")};

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    padding: 0 1.625rem 0;
    transform: ${props =>
      props.sidebarIsCollapsed ? "translateX(64px)" : "translateX(200px)"};
    width: ${props =>
      props.sidebarIsCollapsed ? "calc(100% - 64px)" : "calc(100% - 200px)"};
  }

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    width: ${props =>
      props.sidebarIsCollapsed
        ? "calc(100% - 64px - 340px)"
        : "calc(100% - 200px - 340px)"};
  }
`;

export default {
  components: {
    StyledWrapper
  },
  computed: mapGetters(["sidebar", "settings"])
};
</script>
