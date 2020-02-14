<template>
  <styled-wrapper>
    <StyledColor
      @click="$emit('toggle-theme', theme.id)"
      v-for="theme in themes"
      :key="theme.primary"
    >
      <StyledBadgeIcon
        badgeSize="16px"
        iconSize="12px"
        color="Green"
        v-if="activeItem === theme.id"
      >
        check
      </StyledBadgeIcon>
      <StyledPrimaryColor :color="theme.primary" />
      <StyledSecondaryColor :color="theme.secondary" />
    </StyledColor>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { themeDefault } from "../../../../themes/themeDefault";
import { themePink } from "../../../../themes/themePink";
import { themeRed } from "../../../../themes/themeRed";
import { themeBlue } from "../../../../themes/themeBlue";
import { themeOrange } from "../../../../themes/themeOrange";
import { BadgeIcon } from "../../icons";

const StyledWrapper = styled.div`
  display: flex;
  padding: 0 1rem;
`;

const StyledColor = styled.button`
  display: flex;
  background: transparent;
  position: relative;
  border: 0;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const colorHeight = "28px";
const colorWidth = "14px";
const colorProps = { color: String };

const StyledPrimaryColor = styled("div", colorProps)`
  width: ${colorWidth};
  height: ${colorHeight};
  border-top-left-radius: ${colorWidth};
  border-bottom-left-radius: ${colorWidth};
  background: ${props => props.color};
`;

const StyledSecondaryColor = styled("div", colorProps)`
  width: ${colorWidth};
  height: ${colorHeight};
  border-top-right-radius: ${colorWidth};
  border-bottom-right-radius: ${colorWidth};
  background: ${props => props.color};
`;

const StyledBadgeIcon = styled(BadgeIcon)`
  position: absolute;
  right: -5px;
  top: -5px;
`;

export default {
  props: {
    activeItem: String
  },
  data: function() {
    return {
      themes: [
        {
          id: "vuezy",
          primary: themeDefault.colorPrimary,
          secondary: themeDefault.colorSecondary
        },
        {
          id: "pink",
          primary: themePink.colorPrimary,
          secondary: themePink.colorSecondary
        },
        {
          id: "red",
          primary: themeRed.colorPrimary,
          secondary: themeRed.colorSecondary
        },
        {
          id: "blue",
          primary: themeBlue.colorPrimary,
          secondary: themeBlue.colorSecondary
        },
        {
          id: "orange",
          primary: themeOrange.colorPrimary,
          secondary: themeOrange.colorSecondary
        }
      ]
    };
  },
  components: {
    StyledWrapper,
    StyledColor,
    StyledPrimaryColor,
    StyledSecondaryColor,
    StyledBadgeIcon
  }
};
</script>
