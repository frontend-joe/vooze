<template>
  <div id="app">
    <theme-provider v-bind:theme="settings.theme || themeDefault">
      <SettingsButton v-on:toggle-settings-open="handleSettingsButtonClicked" />
      <Settings :isOpen="settings.isOpen" />
      <Overlay
        @click="handleOverlayClicked"
        :open="sidebar.isOpen || settings.isOpen"
      />
      <Topbar v-on:toggle-sidebar-open="toggleSidebarOpen" />
      <Sidebar :open="sidebarOpen" />
      <Content>
        <router-view :theme="settings.theme || themeDefault" />
      </Content>
    </theme-provider>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ThemeProvider } from "vue-styled-components";
import { themeDefault } from "./themes/themeDefault";
import Topbar from "./components/layout/topbar/Topbar";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Content from "./components/layout/content/Content";
import Settings from "./components/layout/settings/Wrapper";
import SettingsButton from "./components/layout/settingsButton/Wrapper";
import { Overlay } from "./components/shared/common";
require("./assets/css/bootstrap.css");
require("./assets/css/tonicons.css");
require("chartist/dist/chartist.min.css");

export default {
  name: "app",
  components: {
    ThemeProvider,
    Topbar,
    Sidebar,
    Content,
    Overlay,
    Settings,
    SettingsButton
  },
  computed: mapGetters(["settings", "sidebar", "app"]),
  methods: {
    ...mapActions([
      "loadSettings",
      "toggleSettingsOpen",
      "toggleSidebarOpen",
      "toggleTheme",
      "toggleActiveDropdown"
    ]),
    handleSettingsButtonClicked() {
      this.toggleSettingsOpen(!this.settings.isOpen);
    },
    handleOverlayClicked() {
      if (this.sidebar.isOpen) {
        this.toggleSidebarOpen(false);
      }
      if (this.settings.isOpen) {
        this.toggleSettingsOpen(false);
      }
    }
  },
  created: function() {
    this.loadSettings();
  },
  mounted: function() {
    setTimeout(() => {
      document.getElementById("preloader-left").classList.add("loaded");
      document.getElementById("preloader-right").classList.add("loaded");
      document.getElementById("spinner-wrapper").classList.add("loaded");
    }, 500);

    window.addEventListener("click", () => {
      if (this.app.activeDropdown) {
        this.toggleActiveDropdown(undefined);
      }
    });
  },
  destroyed: function() {
    window.removeEventListener("click", () =>
      this.toggleActiveDropdown(undefined)
    );
  },
  data: function() {
    return {
      sidebarOpen: false,
      themeDefault: themeDefault
    };
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Alata", sans-serif;
  color: #606060;
}

* {
  box-sizing: border-box;
  line-height: 1;
}

button,
a {
  cursor: pointer;
}

a {
  text-decoration: none;
}

#chart .chart-legend {
  display: none;
}

.graph-svg-tip.comparison {
  display: none;
}

input,
button,
select,
label {
  outline: none;
  font-family: "Alata", sans-serif;
}

::selection {
  background: #2f2da8;
  color: white;
}
</style>
