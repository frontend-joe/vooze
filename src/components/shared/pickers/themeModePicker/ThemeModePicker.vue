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
        <StyledScreenTopbar :style="{ background: item.topbarColor }" />
        <StyledContentRow>
          <StyledScreenSidebar :style="{ background: item.sidebarColor }" />
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

const StyledScreenTopbar = styled.div`
  width: 100%;
  height: 10px;
  border-bottom: 1px solid ${props => props.theme.colorBorder};
`;

const StyledScreenSidebar = styled.div`
  flex: 1;
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
          topbarColor: "#f7f7f7",
          sidebarColor: "white",
          contentColor: "white"
        },
        {
          disabled: false,
          id: "dark",
          label: "Dark",
          topbarColor: "#1a1323",
          sidebarColor: "#1a1323",
          contentColor: "#1a1323"
        },
        {
          disabled: false,
          id: "semidark",
          label: "Semi Dark",
          topbarColor: "#6228ea",
          sidebarColor: "#1a1323",
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
