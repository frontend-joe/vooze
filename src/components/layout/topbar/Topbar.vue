<template>
  <styled-wrapper
    :isNeumorphic="
      settings.cardStyleId === 'neumorphic' && settings.themeModeId === 'light'
    "
  >
    <Hidden xs sm>
      <topbar-collapse-button />
    </Hidden>
    <Hidden md lg xl>
      <topbar-burger-button />
    </Hidden>
    <topbar-logo />
    <topbar-search
      :isNeumorphic="
        settings.cardStyleId === 'neumorphic' &&
          settings.themeModeId === 'light'
      "
    />
    <AppsDropdown />
    <UserDropdown />
  </styled-wrapper>
</template>

<script>
import { mapGetters } from "vuex";
import styled from "vue-styled-components";
import TopbarCollapseButton from "./TopbarCollapseButton";
import TopbarBurgerButton from "./TopbarBurgerButton";
import TopbarLogo from "./TopbarLogo";
import TopbarSearch from "./TopbarSearch";
import UserDropdown from "./userDropdown/Wrapper";
import AppsDropdown from "./appsDropdown/Wrapper";
import { Hidden } from "../../shared/responsive";

const wrapperProps = { isNeumorphic: Boolean };
const StyledWrapper = styled("div", wrapperProps)`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  height: 72px;
  width: 100%;
  background: ${props =>
    props.isNeumorphic
      ? props.theme.colorCardBackgroundNeu
      : props.theme.colorTopbar};
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
  },
  computed: mapGetters(["settings"])
};
</script>
