<template>
  <styled-wrapper :sidebarIsCollapsed="sidebar.isCollapsed">
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { mapGetters } from "vuex";

const wrapperProps = {
  sidebarIsCollapsed: Boolean
};
const StyledWrapper = styled("div", wrapperProps)`
  padding: 72px 1.625rem;
  transform: translateX(0);

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    padding: 72px 1.625rem 0;
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
  computed: mapGetters(["sidebar"])
};
</script>
