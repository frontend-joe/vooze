<template>
  <styled-wrapper>
    <Hidden xs sm>
      <topbar-collapse-button />
    </Hidden>
    <Hidden md lg xl>
      <topbar-burger-button />
    </Hidden>
    <topbar-logo />
    <topbar-search />
    <AppsDropdown />
    <UserDropdown />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import TopbarCollapseButton from "./TopbarCollapseButton";
import TopbarBurgerButton from "./TopbarBurgerButton";
import TopbarLogo from "./TopbarLogo";
import TopbarSearch from "./TopbarSearch";
import UserDropdown from "./userDropdown/Wrapper";
import AppsDropdown from "./TopbarAppsDropdown";
import { Hidden } from "../../shared/responsive";

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
    TopbarBurgerButton,
    TopbarLogo,
    TopbarSearch,
    UserDropdown,
    StyledWrapper,
    AppsDropdown,
    Hidden
  }
};
</script>

<style module>
.wrapper {
}
</style>
