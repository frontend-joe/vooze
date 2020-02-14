<template>
  <styled-wrapper>
    <StyledBlock
      @click="$emit('toggle-chart-theme', theme.id)"
      v-for="theme in themes"
      :key="theme.id"
    >
      <StyledBadgeIcon
        badgeSize="16px"
        iconSize="12px"
        color="Green"
        v-if="activeItem === theme.id"
      >
        check
      </StyledBadgeIcon>
      <StyledBlockColorList>
        <StyledBlockColor
          class="block-color"
          v-for="color in theme.colors"
          :key="color"
          :color="color"
        />
      </StyledBlockColorList>
    </StyledBlock>
    <StyledBlock @click="$emit('toggle-chart-theme', 'theme')">
      <StyledBadgeIcon
        badgeSize="16px"
        iconSize="12px"
        color="Green"
        v-if="activeItem === 'theme'"
      >
        check
      </StyledBadgeIcon>
      <StyledBlockColorList>
        <StyledBlockColor
          class="block-color"
          v-for="color in chartColors"
          :key="color"
          :color="color"
        />
      </StyledBlockColorList>
    </StyledBlock>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { themeDefault } from "../../../../themes/themeDefault";
import { BadgeIcon } from "../../icons";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

const StyledBlock = styled("button", theProps)`
  position: relative;
  margin: 0;
  margin-right: 1.25rem;
  background: transparent;
  border: 0;
  padding: 0.5rem 0 0;
`;

const StyledBlockColorList = styled.div`
  display: flex;
  align-items: flex-end;
  width: 26px;

  & > .block-color:first-child {
    height: 12px;
    margin-right: 2px;
  }

  & > .block-color:last-child {
    height: 14px;
    margin-left: 2px;
  }
`;

const theProps = { color: String, index: Number };
const StyledBlockColor = styled("div", theProps)`
  background: ${props => props.color};
  border: transparent;
  margin: 0;
  padding: 0;
  width: 33.33%;
  height: 22px;
  flex: 1 0 33.33%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const StyledBadgeIcon = styled(BadgeIcon)`
  position: absolute;
  right: -10px;
  top: 0;
`;

export default {
  props: {
    chartColors: Array,
    activeItem: String
  },
  components: {
    StyledWrapper,
    StyledBlock,
    StyledBlockColor,
    StyledBlockColorList,
    StyledBadgeIcon
  },
  data: function() {
    return {
      themes: [
        {
          id: "default",
          colors: themeDefault.chartColors1
        },
        {
          id: "alternative",
          colors: themeDefault.chartColors2
        }
      ]
    };
  }
};
</script>
