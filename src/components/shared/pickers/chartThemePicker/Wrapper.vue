<template>
  <styled-wrapper>
    <StyledBlock
      @click="$emit('toggle-chart-theme', theme.id)"
      v-for="theme in themes"
      :key="theme.id"
    >
      <StyledBlockColor
        v-for="color in theme.colors"
        :key="color"
        :color="color"
      />
    </StyledBlock>
    <StyledBlock @click="$emit('toggle-chart-theme', 'theme')">
      <StyledBlockColor
        v-for="color in chartColors"
        :key="color"
        :color="color"
      />
    </StyledBlock>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { themeDefault } from "../../../../themes/themeDefault";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

const StyledBlock = styled("button", theProps)`
  width: 26px;
  display: flex;
  align-items: flex-end;
  margin: 0;
  margin-right: 1.25rem;
  background: transparent;
  border: 0;
  padding: 0.5rem 0 0;
`;

const theProps = { color: String, index: Number };
const StyledBlockColor = styled("div", theProps)`
  background: ${props => props.color};
  border: transparent;
  margin: 0;
  padding: 0;
  width: 33.33%;
  height: 22px;
  flex: 1 0 auto 33.33%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  &:first-child {
    height: 12px;
    margin-right: 2px;
  }

  &:last-child {
    height: 14px;
    margin-left: 2px;
  }
`;

export default {
  props: {
    chartColors: Array
  },
  components: {
    StyledWrapper,
    StyledBlock,
    StyledBlockColor
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
