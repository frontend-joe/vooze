<template>
  <styled-wrapper
    :isOpen="isOpen"
    :isNeumorphic="settings.cardStyleId === 'neumorphic'"
  >
    <Header v-on:close-button-clicked="toggleSettingsOpen(false)" />
    <StyledBlock>
      <StyledBlockHeader>Theme</StyledBlockHeader>
      <ThemeModePicker
        :activeItem="settings.themeModeId"
        v-on:toggle-theme-mode="handleThemeModeToggled"
      />
    </StyledBlock>
    <StyledBlock v-if="settings.themeModeId !== 'dark'">
      <StyledBlockHeader>Colors</StyledBlockHeader>
      <ColorPicker
        :activeItem="settings.themeId"
        v-on:toggle-theme="handleThemeToggled"
      />
    </StyledBlock>
    <StyledBlock v-if="settings.themeModeId !== 'dark'">
      <StyledBlockHeader>Chart Colors</StyledBlockHeader>
      <ChartThemePicker
        :activeItem="settings.chartThemeId"
        :chartColors="settings.theme.chartColors3"
        v-on:toggle-chart-theme="handleChartThemeToggled"
      />
    </StyledBlock>
    <StyledBlock v-if="settings.themeModeId !== 'dark'">
      <StyledBlockHeader>Card Style</StyledBlockHeader>
      <CardStylePicker
        :activeItem="settings.cardStyleId"
        v-on:toggle-card-style="handleCardStyleToggled"
      />
    </StyledBlock>
  </styled-wrapper>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import styled from "vue-styled-components";
import Header from "./Header";
import {
  ColorPicker,
  ChartThemePicker,
  CardStylePicker,
  ThemeModePicker
} from "../../shared/pickers";

const componentProps = { isOpen: Boolean, isNeumorphic: Boolean };
const StyledWrapper = styled("div", componentProps)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 15;
  width: 260px;
  height: 100%;
  transform: translateX(${props => (props.isOpen ? "0" : "260px")});
  transition: transform 0.25s;

  background: ${props =>
    props.isNeumorphic
      ? props.theme.colorCardBackgroundNeu
      : props.theme.colorCardBackground};

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    transform: translateX(0);
    top: 72px;
    width: 340px;
    z-index: 10;

    box-shadow: ${props =>
      props.isNeumorphic
        ? props.theme.boxShadowNeu
        : props.theme.boxShadowDefault};
  }
`;

const StyledBlock = styled.div`
  margin-bottom: 2rem;
`;

const StyledBlockHeader = styled.div`
  padding: 0 1rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 3;
`;

export default {
  props: {
    isOpen: Boolean
  },
  components: {
    StyledWrapper,
    StyledBlock,
    StyledBlockHeader,
    Header,
    ColorPicker,
    ChartThemePicker,
    CardStylePicker,
    ThemeModePicker
  },
  computed: mapGetters(["settings"]),
  methods: {
    ...mapActions([
      "toggleTheme",
      "toggleChartTheme",
      "updateSettings",
      "toggleSettingsOpen"
    ]),
    handleSettingsButtonClicked() {
      this.toggleSettingsOpen(!this.settings.isOpen);
    },
    handleThemeToggled(themeId) {
      this.updateSettings({ themeId });
    },
    handleCardStyleToggled(cardStyleId) {
      this.updateSettings({ cardStyleId });
    },
    handleThemeModeToggled(themeModeId) {
      console.log("handleThemeModeToggled");
      this.updateSettings({ themeModeId });
    },
    handleChartThemeToggled(chartThemeId) {
      this.updateSettings({ chartThemeId });
    }
  }
};
</script>
