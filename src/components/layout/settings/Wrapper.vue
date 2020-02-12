<template>
  <styled-wrapper
    :isOpen="isOpen"
    :isNeumorphic="settings.cardStyleId === 'neumorphic'"
  >
    <Header />
    <StyledBlock>
      <StyledBlockHeader>Colors</StyledBlockHeader>
      <ThemePicker v-on:toggle-theme="handleThemeToggled" />
    </StyledBlock>
    <StyledBlock>
      <StyledBlockHeader>Chart Colors</StyledBlockHeader>
      <ChartThemePicker
        :chartColors="settings.theme.chartColors3"
        v-on:toggle-chart-theme="handleChartThemeToggled"
      />
    </StyledBlock>
    <StyledBlock>
      <StyledBlockHeader>Card Style</StyledBlockHeader>
      <CardStylePicker v-on:toggle-card-style="handleCardStyleToggled" />
    </StyledBlock>
  </styled-wrapper>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import styled from "vue-styled-components";
import Header from "./Header";
import {
  ThemePicker,
  ChartThemePicker,
  CardStylePicker
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

  @media (min-width: ${props => props.theme.screenWidthXl}) {
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
    ThemePicker,
    ChartThemePicker,
    CardStylePicker
  },
  computed: mapGetters(["settings"]),
  methods: {
    ...mapActions(["toggleTheme", "toggleChartTheme", "updateSettings"]),
    handleSettingsButtonClicked() {
      //console.log("handleSettingsButtonClicked", this.settings.isOpen);
      this.toggleSettingsOpen(!this.settings.isOpen);
    },
    handleThemeToggled(themeId) {
      //this.settings.themeId = themeId;
      this.updateSettings({ themeId });
    },
    handleCardStyleToggled(cardStyleId) {
      //this.settings.themeId = themeId;
      this.updateSettings({ cardStyleId });
    },
    handleChartThemeToggled(chartThemeId) {
      this.updateSettings({ chartThemeId });
    }
  }
};
</script>
