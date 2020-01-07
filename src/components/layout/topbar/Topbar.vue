<template>
  <styled-wrapper>
    <topbar-collapse-button
      v-on:toggle-sidebar-open="$emit('toggle-sidebar-open')"
    />
    <topbar-logo />
    <topbar-search />
    <AppsDropdown />
    <topbar-user-dropdown />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import TopbarCollapseButton from "./TopbarCollapseButton";
import TopbarLogo from "./TopbarLogo";
import TopbarSearch from "./TopbarSearch";
import TopbarUserDropdown from "./TopbarUserDropdown";
import AppsDropdown from "./appsDropdown/Wrapper";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  height: 72px;
  width: 100%;
  background: ${props => props.theme.colorTopbar};
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default {
  components: {
    TopbarCollapseButton,
    TopbarLogo,
    TopbarSearch,
    TopbarUserDropdown,
    StyledWrapper,
    AppsDropdown
  }
};
</script>

<style module>
.wrapper {
}
</style>
