<template>
  <StyledWrapper>
    <StyledSection v-for="section in menu" :key="section.header">
      <StyledSectionDivider v-if="section.showDivider" />
      <sidebar-nav-header>{{ section.header }}</sidebar-nav-header>
      <sidebar-nav-block
        v-for="block in section.blocks"
        :key="block.name"
        v-bind:isOpen="block.isOpen"
      >
        <sidebar-nav-label
          v-bind:toggleBlockOpen="toggleBlockOpen"
          v-bind:isOpen="block.isOpen"
          v-bind:section="section.header"
          v-bind:hasItems="block.items ? true : false"
          v-bind:name="block.name"
          v-bind:icon="block.icon"
        />
        <sidebar-nav-button
          v-for="subItem in block.items"
          :key="subItem.name"
          v-bind:name="subItem.name"
          v-bind:icon="subItem.icon"
          v-bind:url="subItem.url"
        />
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

const StyledWrapper = styled.div`
  margin: 0;
  padding: 1rem 0 0;
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
              icon: "dashboard",
              isOpen: true,
              items: [
                {
                  name: "CEO",
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
                  name: "Table",
                  icon: "view_list",
                  url: "/components/table"
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
