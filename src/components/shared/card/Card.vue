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
    <StyledLabel :isSkeleton="isSkeleton" :loading="loading" v-if="cardLabel">
      {{ cardLabel }}
    </StyledLabel>
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

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
  isSkeleton: Boolean
};

const StyledWrapper = styled("div", cardProps)`
  min-height: ${props => props.minHeight || "auto"};
  height: ${props => props.fixedHeight || "auto"};
  padding: ${props => props.padding || "0"};
  overflow: ${props => (props.overflowHidden ? "hidden" : "visible")};
  display: ${props => (props.flexVertical ? "flex" : "block")};
  flex-direction: ${props => (props.flexVertical ? "column" : "row")};
  position: relative;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.205);
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

const labelProps = { loading: Boolean, isSkeleton: Boolean };
const StyledLabel = styled("div", labelProps)`
  position: absolute;
  top: 0;
  left: 0;
  background: ${props =>
    props.loading || props.isSkeleton
      ? props.theme.colorSkeleton
      : props.theme.colorAccent};
  color: white;
  border-bottom-right-radius: 0.75rem;
  font-size: ${props => (props.isSkeleton ? "0" : "12px")};
  height: 26px;
  line-height: 26px;
  text-align: center;
  padding: 0 0.5rem;
  min-width: 60px;
`;

export default {
  props: cardProps,
  components: {
    StyledWrapper,
    StyledLabel
  }
};
</script>
