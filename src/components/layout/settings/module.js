import axios from "axios";
import { themeDefault } from "../../../themes/themeDefault";
import { themePink } from "../../../themes/themePink";
import { themeRed } from "../../../themes/themeRed";
import { themeBlue } from "../../../themes/themeBlue";
import { themeOrange } from "../../../themes/themeOrange";
import { themeDark } from "../../../themes/themeDark";
import { themeLight } from "../../../themes/themeLight";
import { addGradients } from "./functions";

const state = {
  settings: {
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
      commit("setSettings", res.data.data);
      dispatch("toggleTheme", {
        themeId: res.data.data.themeId,
        chartThemeId: res.data.data.chartThemeId,
        themeModeId: res.data.data.themeModeId
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
    baseTheme.colorGradientLeft = baseTheme.colorSecondary;
    baseTheme.colorGradientRight = "#00d677";

    if (themeModeId === "dark") {
      baseTheme = { ...baseTheme, ...themeDark };
      chartThemeId = "theme";
      const cardStyleId = "default";
      commit("setSettings", { cardStyleId });
    } else {
      if (themeId === "pink") {
        baseTheme = { ...baseTheme, ...themePink };
      } else if (themeId === "red") {
        baseTheme = { ...baseTheme, ...themeRed };
      } else if (themeId === "blue") {
        baseTheme = { ...baseTheme, ...themeBlue };
      } else if (themeId === "orange") {
        baseTheme = { ...baseTheme, ...themeOrange };
      }
    }

    baseTheme.colorTopbar = baseTheme.colorPrimary;

    baseTheme = addGradients(baseTheme);

    const chartColors3 = [
      baseTheme.colorPrimary,
      baseTheme.colorSecondary,
      baseTheme.colorChartGrey
    ];

    baseTheme.chartColors3 = chartColors3;

    let chartColors;
    switch (chartThemeId) {
      case "default":
        chartColors = baseTheme.chartColors1;
        break;
      case "alternative":
        chartColors = baseTheme.chartColors2;
        break;
      case "theme":
        chartColors = [
          baseTheme.colorPrimary,
          baseTheme.colorSecondary,
          baseTheme.colorChartGrey
        ];
        break;
    }

    baseTheme.chartColors = chartColors;

    if (themeModeId === "dark") {
      baseTheme = { ...baseTheme, ...themeDark };
    }

    if (themeModeId === "light") {
      baseTheme = { ...baseTheme, ...themeLight };
    }

    console.log("createdTheme", baseTheme);

    commit("setSettingsTheme", baseTheme);
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
