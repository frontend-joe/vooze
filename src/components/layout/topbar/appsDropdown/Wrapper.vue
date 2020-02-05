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
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
  height: 72px;
  padding: 0 1rem;
  display: flex;
  align-items: center;

  &:hover {
    color: white;
    background: transparent;
  }

  &:hover > i {
    color: white !important;
  }
`;

const StyledButtonIcon = styled(MatIcon)`
  margin-right: 0.5rem;
  color: rgba(255, 255, 255, 0.75) !important;
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
      console.log("handleToggleActiveDropdown", e);
      e.stopPropagation();
      this.toggleActiveDropdown("apps-dropdown");
    }
  },
  computed: mapGetters(["app"])
};
</script>
