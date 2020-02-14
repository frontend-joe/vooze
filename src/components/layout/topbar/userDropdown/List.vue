<template>
  <StyledWrapper>
    <StyledItem v-for="item in items" :key="item.text">
      <StyledItemText>{{ item.text }}</StyledItemText>
      <StyledItemIcon>{{ item.icon }}</StyledItemIcon>
    </StyledItem>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "../../../shared/icons";

const StyledWrapper = styled.div`
  padding: 0 0 0.5rem;
`;

const StyledItem = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  padding: 0 1rem;
  font-size: 0.875rem;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &:hover > i {
    color: ${props => props.theme.colorAccent} !important;
  }

  &:hover > span {
    color: ${props => props.theme.colorAccent} !important;
  }
`;

const StyledItemIcon = styled(MatIcon)`
  color: ${props => props.theme.colorSubtitle};
`;

const StyledItemText = styled.span`
  color: ${props => props.theme.colorSubtitle};
  transform: translateY(-1px);
`;

export default {
  components: {
    StyledWrapper,
    StyledItem,
    StyledItemText,
    StyledItemIcon
  },
  data: function() {
    return {
      items: [
        {
          icon: "account_circle",
          text: "Account"
        },
        {
          icon: "settings",
          text: "Settings"
        },
        {
          icon: "exit_to_app",
          text: "Sign out"
        }
      ]
    };
  }
};
</script>
