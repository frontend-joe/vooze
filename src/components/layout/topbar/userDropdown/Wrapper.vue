<template>
  <StyledWrapper>
    <DropdownWrapper>
      <StyledButton @click="handleToggleActiveDropdown">
        <Avatar size="30px" name="dominic" />
        <StyledButtonText class="text">
          Joe
        </StyledButtonText>
        <StyledButtonIcon iconSize="18px" forDark>
          keyboard_arrow_down
        </StyledButtonIcon>
      </StyledButton>
      <DropdownMenu :isOpen="app.activeDropdown === 'user-dropdown'">
        <DropdownHeader />
        <DropdownList />
      </DropdownMenu>
    </DropdownWrapper>
  </StyledWrapper>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import styled from "vue-styled-components";
import { Avatar } from "../../../shared/common";
import { MatIcon } from "../../../shared/icons";
import { DropdownMenu, DropdownWrapper } from "../../../shared/dropdown";
import DropdownHeader from "./Header";
import DropdownList from "./List";

const StyledWrapper = styled.div`
  padding-right: 1rem;
`;

const StyledButton = styled.button`
  background: transparent;
  border: 0;
  height: 72px;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover > .text {
    color: white;
  }

  &:hover > i {
    color: white !important;
  }
`;

const StyledButtonText = styled.span`
  margin-left: 0.625rem;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
`;

const StyledButtonIcon = styled(MatIcon)`
  margin-left: 0.325rem;
  transform: translateY(1px);
  color: rgba(255, 255, 255, 0.75) !important;
`;

export default {
  components: {
    StyledWrapper,
    StyledButton,
    StyledButtonText,
    StyledButtonIcon,
    DropdownMenu,
    DropdownWrapper,
    Avatar,
    DropdownHeader,
    DropdownList
  },
  methods: {
    ...mapActions(["toggleActiveDropdown"]),
    handleToggleActiveDropdown(e) {
      e.stopPropagation();
      this.toggleActiveDropdown("user-dropdown");
    }
  },
  computed: mapGetters(["app"])
};
</script>
