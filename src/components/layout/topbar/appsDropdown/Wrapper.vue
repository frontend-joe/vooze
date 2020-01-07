<template>
  <StyledWrapper>
    <StyledButton @click="toggleIsOpen">Apps</StyledButton>
    <StyledMenu :isOpen="isOpen">Menu</StyledMenu>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { CoolButton } from "../../../shared/buttons";

const StyledWrapper = styled.div`
  position: relative;
  margin-right: 1rem;
`;

const StyledButton = styled(CoolButton)`
  background: transparent;
  border: 0;
  color: rgba(255, 255, 255, 0.75);

  &:hover {
    color: white;
    background: transparent;
  }
`;

const menuProps = { isOpen: Boolean };
const StyledMenu = styled("div", menuProps)`
  position: absolute;
  top: 50px;
  left: 0;
  width: 200px;
  height: 200px;
  background: white;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
  border-radius: ${props => props.theme.borderRadius};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: translateY(${props => (props.isOpen ? "0" : "2rem")});

  transition: visibility 0.25s, opacity 0.25s, transform 0.25s;
`;

export default {
  props: {
    buttonWidth: String,
    buttonHeight: String,
    buttonColor: String
  },
  components: {
    StyledWrapper,
    StyledMenu,
    StyledButton
  },
  data: function() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleIsOpen() {
      console.log("toggleIsOpen", this.isOpen);
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
