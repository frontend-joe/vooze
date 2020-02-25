<template>
  <StyledWrapper :isCollapsed="isCollapsed" :isHovered="isHovered">
    <StyledSection v-for="section in menu" :key="section.header">
      <StyledSectionDivider v-if="section.showDivider && !isCollapsed" />
      <sidebar-nav-header v-if="!isCollapsed || isHovered">{{
        section.header
      }}</sidebar-nav-header>
      <sidebar-nav-block
        v-for="block in section.blocks"
        :key="block.name"
        :isOpen="block.isOpen"
      >
        <sidebar-nav-label
          :toggleBlockOpen="toggleBlockOpen"
          :isOpen="block.isOpen"
          :section="section.header"
          :hasItems="block.items ? true : false"
          :name="block.name"
          :icon="block.icon"
          :isCollapsed="isCollapsed"
          :isHovered="isHovered"
        />
        <div v-if="!isCollapsed || isHovered">
          <sidebar-nav-button
            v-for="subItem in block.items"
            :key="subItem.name"
            :name="subItem.name"
            :icon="subItem.icon"
            :url="subItem.url"
          />
        </div>
      </sidebar-nav-block>
    </StyledSection>
  </StyledWrapper>
</template>

<script>
import { mapActions } from "vuex";
import styled from "vue-styled-components";
import SidebarNavButton from "./SidebarNavButton";
import SidebarNavBlock from "./SidebarNavBlock";
import SidebarNavLabel from "./SidebarNavLabel";
import SidebarNavHeader from "./SidebarNavHeader";

const wrapperProps = { isCollapsed: Boolean, isHovered: Boolean };
const StyledWrapper = styled("div", wrapperProps)`
  margin: 0;
  padding: 1rem 0 0;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    ${props => (props.isCollapsed && !props.isHovered ? "width: 64px" : "")}
  }
`;

const StyledSection = styled.div`
  margin: 0;
`;

const StyledSectionDivider = styled.div`
  border-top: 1px solid ${props => props.theme.colorSidebarSectionDivider};
  margin: 1.5rem 1rem 0;
  height: 1px;
`;

export default {
  props: {
    isCollapsed: Boolean,
    isHovered: Boolean
  },
  components: {
    StyledWrapper,
    StyledSection,
    StyledSectionDivider,
    SidebarNavButton,
    SidebarNavBlock,
    SidebarNavLabel,
    SidebarNavHeader
  },
  methods: {
    ...mapActions(["toggleSidebarOpen"]),
    toggleBlockOpen(section, name) {
      let sectionItem = this.menu.find(obj => obj.header === section);

      let block = sectionItem.blocks.find(obj => obj.name === name);

      if (block.items) {
        block.isOpen = !block.isOpen;
      }

      // close all blocks
      for (let section of this.menu) {
        for (let block of section.blocks) {
          if (block.name !== name) {
            block.isOpen = false;
          }
        }
      }
    }
  },
  data: function() {
    return {
      menu: [
        {
          header: "Main",
          blocks: [
            {
              name: "Dashboards",
              icon: "speed",
              isOpen: true,
              items: [
                {
                  name: "Director",
                  icon: "meeting_room",
                  url: "/"
                },
                {
                  name: "Manager",
                  icon: "work_outline",
                  url: "/dashboards/manager"
                },
                {
                  name: "Developer",
                  icon: "code",
                  url: "/dashboards/developer"
                },
                {
                  name: "Designer",
                  icon: "color_lens",
                  url: "/dashboards/designer"
                }
              ]
            },
            {
              name: "Widgets",
              icon: "widgets",
              isOpen: false,
              items: [
                {
                  name: "Charts",
                  icon: "pie_chart",
                  url: "/widgets/charts"
                },
                {
                  name: "Colorful",
                  icon: "invert_colors",
                  url: "/widgets/colorful"
                }
              ]
            }
          ]
        },
        {
          header: "Data Visualisation",
          showDivider: true,
          blocks: [
            {
              name: "Charts",
              icon: "insert_chart",
              isOpen: false,
              items: [
                {
                  name: "Apex Charts",
                  icon: "bubble_chart",
                  url: "/charts/apex"
                },
                {
                  name: "ChartJs",
                  icon: "show_chart",
                  url: "/charts/chartjs"
                }
              ]
            }
          ]
        },
        {
          header: "Components",
          showDivider: true,
          blocks: [
            {
              name: "Basic",
              icon: "fiber_manual_record",
              isOpen: false,
              items: [
                {
                  name: "Alert",
                  icon: "alarm",
                  url: "/components/alerts"
                },
                {
                  name: "Button",
                  icon: "space_bar",
                  url: "/components/buttons"
                },
                {
                  name: "Chip",
                  icon: "remove",
                  url: "/components/chips"
                },
                {
                  name: "Table",
                  icon: "view_list",
                  url: "/components/table"
                }
              ]
            }
          ]
        },
        {
          header: "Pages",
          showDivider: true,
          blocks: [
            {
              name: "Auth",
              icon: "lock",
              isOpen: false,
              items: [
                {
                  name: "Login",
                  icon: "account_circle",
                  url: "/pages/auth/login"
                },
                {
                  name: "Register",
                  icon: "assignment",
                  url: "/pages/auth/register"
                },
                {
                  name: "Forgot Password",
                  icon: "feedback",
                  url: "/pages/auth/forgot"
                },
                {
                  name: "Lock Screen",
                  icon: "lock_open",
                  url: "/pages/auth/locked"
                }
              ]
            },
            {
              name: "Error",
              icon: "error_outline",
              isOpen: false,
              items: [
                {
                  name: "404",
                  icon: "help_outline",
                  url: "/pages/errors/404"
                },
                {
                  name: "500",
                  icon: "new_releases",
                  url: "/pages/errors/500"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
