<template>
  <StyledWrapper>
    <StyledButton
      @click="$emit('toggle-theme-mode', item.id)"
      v-for="item in items"
      :key="item.id"
      :disabled="item.disabled"
    >
      <StyledBadgeIcon
        badgeSize="16px"
        iconSize="12px"
        color="Green"
        v-if="activeItem === item.id"
      >
        check
      </StyledBadgeIcon>
      <StyledScreen>
        <StyledScreenTopbar :color="item.topbarColor" />
        <StyledContentRow>
          <StyledScreenSidebar :color="item.sidebarColor" />
          <StyledScreenContent :style="{ background: item.contentColor }" />
        </StyledContentRow>
      </StyledScreen>
      <StyledButtonLabel>{{ item.label }}</StyledButtonLabel>
    </StyledButton>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { BadgeIcon } from "../../icons";

const StyledWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const StyledButton = styled.button`
  border: 0;
  background: transparent;
  position: relative;
  display: flex;
  padding: 0;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`;

const StyledButtonLabel = styled.div`
  color: ${props => props.theme.colorSubtitle};
  font-size: 13px;
`;

const StyledScreen = styled.div`
  height: 40px;
  width: 60px;
  background: transparent;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.colorBorder};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 0.75rem;
`;

const StyledContentRow = styled.div`
  display: flex;
  flex: 1;
`;

const topbarProps = { color: String };
const StyledScreenTopbar = styled("div", topbarProps)`
  width: 100%;
  height: 10px;
  background: ${props => props.theme[`color${props.color}`]};
  border-bottom: 1px solid ${props => props.theme.colorBorder};
`;

const sidebarProps = { color: String };
const StyledScreenSidebar = styled("div", sidebarProps)`
  flex: 1;
  background: ${props => props.theme[`color${props.color}`]};
  border-right: 1px solid ${props => props.theme.colorBorder};
`;

const StyledScreenContent = styled.div`
  width: 80%;
`;

const StyledBadgeIcon = styled(BadgeIcon)`
  position: absolute;
  right: -3px;
  top: -3px;
`;

export default {
  props: {
    activeItem: String
  },
  data: function() {
    return {
      items: [
        {
          disabled: false,
          id: "light",
          label: "Light",
          topbarColor: "WhiteAlways",
          sidebarColor: "WhiteAlways",
          contentColor: "white"
        },
        {
          disabled: false,
          id: "dark",
          label: "Dark",
          topbarColor: "Black",
          sidebarColor: "Black",
          contentColor: "#1a1323"
        },
        {
          disabled: false,
          id: "semidark",
          label: "Semi Dark",
          topbarColor: "Primary",
          sidebarColor: "SidebarDefault",
          contentColor: "white"
        }
      ]
    };
  },
  components: {
    StyledWrapper,
    StyledScreen,
    StyledScreenTopbar,
    StyledScreenSidebar,
    StyledScreenContent,
    StyledContentRow,
    StyledButton,
    StyledButtonLabel,
    StyledBadgeIcon
  }
};
</script>
