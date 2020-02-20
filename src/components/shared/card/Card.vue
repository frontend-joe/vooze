<template>
  <styled-wrapper
    :primary="primary"
    :accent="accent"
    :minHeight="minHeight"
    :fixedHeight="fixedHeight"
    :padding="padding"
    :overflowHidden="overflowHidden"
    :flexVertical="flexVertical"
    :color="color"
    :isDark="isDark"
    :cardStyleId="settings.cardStyleId"
  >
    <CardSpinner
      v-if="showLoadingSpinner"
      :loading="loading"
      :isNeumorphic="
        settings.cardStyleId === 'neumorphic' && settings.themeModeId !== 'dark'
      "
    />
    <CardGlimmer
      v-if="isSkeleton && loading"
      :isNeumorphic="
        settings.cardStyleId === 'neumorphic' && settings.themeModeId !== 'dark'
      "
    />
    <CardLabel :isSkeleton="isSkeleton" :loading="loading" v-if="cardLabel">
      {{ cardLabel }}
    </CardLabel>
    <slot />
  </styled-wrapper>
</template>

<script>
import { mapGetters } from "vuex";
import styled, { css } from "vue-styled-components";
import CardGlimmer from "./CardGlimmer";
import CardLabel from "./CardLabel";
import CardSpinner from "./CardSpinner";

const cardProps = {
  primary: Boolean,
  accent: Boolean,
  minHeight: String,
  fixedHeight: String,
  padding: String,
  overflowHidden: Boolean,
  flexVertical: Boolean,
  color: String,
  isDark: Boolean,
  cardLabel: String,
  loading: Boolean,
  isSkeleton: Boolean,
  showLoadingSpinner: Boolean,
  showSkeletonCardTitle: Boolean,
  cardStyleId: String
};

const neumorphicCard = css`
  border-radius: 10px;
  background: ${props => props.theme.colorCardBackgroundNeu};
  ${"" /* background: linear-gradient(135deg, #efefef, #ffffff); */}
  box-shadow: ${props => props.theme.boxShadowNeu};
`;

const StyledWrapper = styled("div", cardProps)`
  min-height: ${props => props.minHeight || "auto"};
  height: ${props => props.fixedHeight || "auto"};
  padding: ${props => props.padding || "0"};
  overflow: ${props => (props.overflowHidden ? "hidden" : "visible")};
  display: ${props => (props.flexVertical ? "flex" : "block")};
  flex-direction: ${props => (props.flexVertical ? "column" : "row")};
  position: relative;
  box-shadow: ${props => props.theme.boxShadowDefault};
  margin-bottom: 2rem;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props =>
    props.primary || props.isDark ? "white" : props.theme.colorText};

  background: ${props => props.theme.colorCardBackground};

  ${props => (props.cardStyleId === "neumorphic" ? neumorphicCard : "")};

  ${"" /* background: linear-gradient(145deg, #ececec, #f7f7f7);
  border-radius: 20px;
  box-shadow: 10px 10px 60px #d7d7d7, -20px -20px 60px #ffffff; */}

  ${props => (props.primary ? `background: ${props.theme.colorPrimary}` : "")};
  ${props => (props.accent ? `background: ${props.theme.colorAccent}` : "")}
  ${props =>
    props.color ? `background: ${props.theme[`color${props.color}`]}` : ""};
`;

export default {
  props: cardProps,
  components: {
    StyledWrapper,
    CardLabel,
    CardGlimmer,
    CardSpinner
  },
  computed: mapGetters(["settings"])
};
</script>
