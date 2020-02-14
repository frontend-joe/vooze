<template>
  <StyledDropdownWrapper>
    <StyledButton v-on:click="handleToggleActiveDropdown($event)">
      <StyledButtonIcon iconSize="24px">
        apps
      </StyledButtonIcon>
      <span>
        Apps
      </span>
    </StyledButton>
    <DropdownMenu
      minWidth="240px"
      :isOpen="app.activeDropdown === 'apps-dropdown'"
    >
      <AppList />
    </DropdownMenu>
  </StyledDropdownWrapper>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import styled from "vue-styled-components";
import { DropdownMenu, DropdownWrapper } from "../../../shared/dropdown";
import { MatIcon } from "../../../shared/icons";
import AppList from "./AppList";
//import { CoolButton } from "../../../shared/buttons";

const StyledDropdownWrapper = styled(DropdownWrapper)`
  margin-right: 1rem;
`;

const StyledButton = styled.button`
  background: transparent;
  border: 0;
  color: ${props => props.theme.colorTopbarButton};
  font-size: 14px;
  height: 72px;
  padding: 0 1rem;
  display: flex;
  align-items: center;

  &:hover {
    color: ${props => props.theme.colorTopbarButtonHover};
    background: transparent;
  }

  &:hover > i {
    color: ${props => props.theme.colorTopbarButtonHover} !important;
  }
`;

const StyledButtonIcon = styled(MatIcon)`
  margin-right: 0.5rem;
  color: ${props => props.theme.colorTopbarButton} !important;
`;

export default {
  props: {
    buttonWidth: String,
    buttonHeight: String,
    buttonColor: String
  },
  components: {
    StyledButton,
    DropdownMenu,
    StyledDropdownWrapper,
    StyledButtonIcon,
    AppList
  },
  methods: {
    ...mapActions(["toggleActiveDropdown"]),
    handleToggleActiveDropdown(e) {
      e.stopPropagation();
      this.toggleActiveDropdown("apps-dropdown");
    }
  },
  computed: mapGetters(["app"])
};
</script>
