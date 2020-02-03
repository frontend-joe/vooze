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
  >
    <CardSpinner v-if="showLoadingSpinner" :loading="loading" />
    <CardGlimmer v-if="isSkeleton && loading" />
    <CardLabel :isSkeleton="isSkeleton" :loading="loading" v-if="cardLabel">
      {{ cardLabel }}
    </CardLabel>
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
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
  showSkeletonCardTitle: Boolean
};

const StyledWrapper = styled("div", cardProps)`
  min-height: ${props => props.minHeight || "auto"};
  height: ${props => props.fixedHeight || "auto"};
  padding: ${props => props.padding || "0"};
  overflow: ${props => (props.overflowHidden ? "hidden" : "visible")};
  display: ${props => (props.flexVertical ? "flex" : "block")};
  flex-direction: ${props => (props.flexVertical ? "column" : "row")};
  position: relative;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.275);
  margin-bottom: 2rem;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props =>
    props.primary || props.isDark ? "white" : props.theme.colorText};

  background: ${props => props.theme.colorCardBackground};
  ${props => (props.primary ? `background: ${props.theme.colorPrimary}` : "")};
  ${props => (props.accent ? `background: ${props.theme.colorAccent}` : "")}
  ${props =>
    props.color ? `background: ${props.theme[`color${props.color}`]}` : ""}
`;

export default {
  props: cardProps,
  components: {
    StyledWrapper,
    CardLabel,
    CardGlimmer,
    CardSpinner
  }
};
</script>
