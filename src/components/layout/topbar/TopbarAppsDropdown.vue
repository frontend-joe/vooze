<template>
  <StyledDropdownWrapper>
    <StyledButton v-on:click="handleToggleActiveDropdown($event)">
      Apps
    </StyledButton>
    <DropdownMenu :isOpen="app.activeDropdown === 'apps-dropdown'">
      Menu
    </DropdownMenu>
  </StyledDropdownWrapper>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import styled from "vue-styled-components";
import { DropdownMenu, DropdownWrapper } from "../../shared/dropdown";
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

  &:hover {
    color: white;
    background: transparent;
  }
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
    StyledDropdownWrapper
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
