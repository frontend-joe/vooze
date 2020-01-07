import axios from "axios";
import { themeDefault } from "../../../themes/themeDefault";
import { themePink } from "../../../themes/themePink";
import { themeRed } from "../../../themes/themeRed";
import { themeBlue } from "../../../themes/themeBlue";
import { themeOrange } from "../../../themes/themeOrange";
import { createTheme } from "./functions";

const state = {
  settings: {
    themeId: "vuezy",
    chartThemeId: "default",
    theme: themeDefault,
    isOpen: false
  }
};

const getters = {
  settings: state => state.settings
};

const actions = {
  loadSettings({ commit, dispatch }) {
    axios.get("/api/settings").then(res => {
      console.log("loadSettings", res);
      commit("setSettings", res.data);
      dispatch("toggleTheme", {
        themeId: res.data.data.themeId,
        chartThemeId: res.data.data.chartThemeId
      });
    });
  },
  updateSettings({ commit, dispatch }, params) {
    axios.put("/api/settings", params).then(res => {
      console.log("updateSettings", res.data);
      commit("setSettings", res.data);
      dispatch("toggleTheme", {
        themeId: res.data.themeId,
        chartThemeId: res.data.chartThemeId
      });
    });
  },
  async toggleSettingsOpen({ commit }, isOpen) {
    //console.log("toggleSettingsOpen", isOpen);
    commit("setSettingsOpen", isOpen);
  },
  async toggleChartTheme({ commit }, chartThemeId) {
    commit("setSettingsChartTheme", chartThemeId);
  },
  async toggleTheme({ commit }, params) {
    const { themeId, chartThemeId } = params;

    console.log("toggleTheme", themeId, chartThemeId);

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

    const createdTheme = createTheme(
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

    commit("setSettingsTheme", createdTheme);
    commit("setSettingsChartTheme", chartThemeId);
  }
};

const mutations = {
  setSettings: (state, settings) => {
    state.settings = Object.assign(state.settings, settings);
    console.log("setSettings", state.settings);
  },
  setSettingsOpen: (state, isOpen) =>
    (state.settings = { ...state.settings, isOpen }),
  setSettingsTheme: (state, theme) => {
    state.settings = { ...state.settings, theme };
    console.log("setSettingsTheme", state.settings);
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
