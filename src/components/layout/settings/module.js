import axios from "axios";
import { themeDefault } from "../../../themes/themeDefault";
import { themePink } from "../../../themes/themePink";
import { themeRed } from "../../../themes/themeRed";
import { themeBlue } from "../../../themes/themeBlue";
import { themeOrange } from "../../../themes/themeOrange";
import { themeDark } from "../../../themes/themeDark";
import { createTheme } from "./functions";

const state = {
  settings: {
    themeId: "vuezy",
    chartThemeId: "default",
    cardStyleId: "default",
    themeModeId: "semidark",
    theme: themeDefault,
    isOpen: true
  }
};

const getters = {
  settings: state => state.settings
};

const actions = {
  loadSettings({ commit, dispatch }) {
    axios.get("/api/settings").then(res => {
      commit("setSettings", res.data);
      dispatch("toggleTheme", {
        themeId: res.data.data.themeId,
        chartThemeId: res.data.data.chartThemeId
      });
    });
  },
  updateSettings({ commit, dispatch }, params) {
    axios.put("/api/settings", params).then(res => {
      commit("setSettings", res.data);
      dispatch("toggleTheme", {
        themeModeId: res.data.themeModeId,
        themeId: res.data.themeId,
        chartThemeId: res.data.chartThemeId
      });
    });
  },
  async toggleSettingsOpen({ commit }, isOpen) {
    commit("setSettingsOpen", isOpen);
  },
  async toggleChartTheme({ commit }, chartThemeId) {
    commit("setSettingsChartTheme", chartThemeId);
  },
  async toggleTheme({ commit }, params) {
    let { themeId, chartThemeId, themeModeId } = params;

    let baseTheme = themeDefault;
    let colorAccent = themeDefault.colorAccent;
    let colorAccentFaint = themeDefault.colorAccentFaint;
    let colorPrimary = themeDefault.colorPrimary;
    let colorPrimaryFaint = themeDefault.colorPrimaryFaint;
    let colorSecondary = themeDefault.colorSecondary;
    let colorSecondaryFaint = themeDefault.colorSecondaryFaint;
    let colorGradientLeft = colorSecondary;
    let colorGradientRight = "#00d677";
    let colorSidebar = themeDefault.colorSidebar;

    if (themeModeId === "dark") {
      colorPrimary = themeDark.colorPrimary;
      // colorPrimaryFaint = themeDark.colorPrimaryFaint;
      colorSecondary = themeDark.colorSecondary;
      // colorSecondaryFaint = themeDark.colorSecondaryFaint;
      // colorSidebar = themeDark.colorSidebar;
      // colorTopbar = themeDark.colorTopbar;
      // colorAccent = themeDark.colorAccent;
      // colorBackground = themeDark.colorBackground;
      // colorCardBackground = themeDark.colorCardBackground;
      // colorCardHeader = themeDark.colorCardHeader;
      // colorProgressBackground = themeDark.colorProgressBackground;
      // colorText = themeDark.colorText;
      // colorSubtitle = themeDark.colorSubtitle;
      // colorBorder = themeDark.colorBorder;
      colorGradientLeft = themeDark.colorPrimary;
      colorGradientRight = themeDark.colorSecondary;
      // colorSkeleton = themeDark.colorSkeleton;
      //
      chartThemeId = "theme";
      const cardStyleId = "default";

      commit("setSettings", { cardStyleId });
    } else {
      if (themeId === "pink") {
        colorPrimary = themePink.colorPrimary;
        colorPrimaryFaint = themePink.colorPrimaryFaint;
        colorSecondary = themePink.colorSecondary;
        colorSecondaryFaint = themePink.colorSecondaryFaint;
        colorAccent = themePink.colorAccent;
        colorAccentFaint = themePink.colorAccentFaint;
        colorGradientLeft = colorPrimary;
        colorGradientRight = colorSecondary;
        colorSidebar = themePink.colorSidebar;
      } else if (themeId === "red") {
        colorPrimary = themeRed.colorPrimary;
        colorSecondary = themeRed.colorSecondary;
        colorPrimaryFaint = themeRed.colorPrimaryFaint;
        colorSecondaryFaint = themeRed.colorSecondaryFaint;
        colorAccent = themeRed.colorAccent;
        colorAccentFaint = themeRed.colorAccentFaint;
        colorGradientLeft = colorPrimary;
        colorGradientRight = colorSecondary;
        colorSidebar = themeRed.colorSidebar;
      } else if (themeId === "blue") {
        colorPrimary = themeBlue.colorPrimary;
        colorSecondary = themeBlue.colorSecondary;
        colorPrimaryFaint = themeBlue.colorPrimaryFaint;
        colorSecondaryFaint = themeBlue.colorSecondaryFaint;
        colorAccent = themeBlue.colorAccent;
        colorAccentFaint = themeBlue.colorAccentFaint;
        colorGradientLeft = colorPrimary;
        colorGradientRight = colorSecondary;
        colorSidebar = themeBlue.colorSidebar;
      } else if (themeId === "orange") {
        colorPrimary = themeOrange.colorPrimary;
        colorSecondary = themeOrange.colorSecondary;
        colorPrimaryFaint = themeOrange.colorPrimaryFaint;
        colorSecondaryFaint = themeOrange.colorSecondaryFaint;
        colorAccent = themeOrange.colorAccent;
        colorAccentFaint = themeOrange.colorAccentFaint;
        colorGradientLeft = colorPrimary;
        colorGradientRight = colorSecondary;
        colorSidebar = themeOrange.colorSidebar;
      }
    }

    const chartColors3 = [
      colorPrimary,
      colorSecondary,
      baseTheme.colorChartGrey
    ];
    let chartColors;

    switch (chartThemeId) {
      case "default":
        chartColors = baseTheme.chartColors1;
        break;
      case "alternative":
        chartColors = baseTheme.chartColors2;
        break;
      case "theme":
        chartColors = [colorPrimary, colorSecondary, baseTheme.colorChartGrey];
        break;
    }

    let createdTheme = createTheme(
      baseTheme,
      colorPrimary,
      colorPrimaryFaint,
      colorSecondary,
      colorSecondaryFaint,
      colorAccent,
      colorAccentFaint,
      colorGradientLeft,
      colorGradientRight,
      chartColors3,
      chartColors,
      colorSidebar
    );

    if (themeModeId === "dark") {
      createdTheme = { ...createdTheme, ...themeDark };
    }

    console.log("createdTheme", createdTheme);

    commit("setSettingsTheme", createdTheme);
    commit("setSettingsChartTheme", chartThemeId);
  }
};

const mutations = {
  setSettings: (state, settings) => {
    state.settings = Object.assign(state.settings, settings);
  },
  setSettingsOpen: (state, isOpen) =>
    (state.settings = { ...state.settings, isOpen }),
  setSettingsTheme: (state, theme) => {
    state.settings = { ...state.settings, theme };
  },
  setSettingsChartTheme: (state, chartThemeId) =>
    (state.settings = { ...state.settings, chartThemeId })
};

export default {
  state,
  getters,
  actions,
  mutations
};
