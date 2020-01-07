<template>
  <styled-wrapper>
    <!-- <StyledTitle>Regions</StyledTitle> -->
    <styled-item-wrapper v-for="item in items" :key="item.id">
      <styled-item-name>
        {{ item.name }}
      </styled-item-name>
      <styled-power-bar-wrapper>
        <styled-power-bar :color="item.color" :width="`${item.value}%`" />
        <styled-power-bar-label> {{ item.value }}% </styled-power-bar-label>
      </styled-power-bar-wrapper>
    </styled-item-wrapper>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div``;

// const StyledTitle = styled.div`
//   font-size: 13px;
//   color: ${props => props.theme.colorSubtitle};
//   margin-bottom: 1rem;
// `;

const StyledItemWrapper = styled.div``;

const StyledItemName = styled.div`
  font-size: 15px;
  color: ${props => props.theme.colorSubtitle};
`;

const StyledPowerBarWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`;

const powerbarProps = { width: String, color: String };
const StyledPowerBar = styled("div", powerbarProps)`
  background: ${props => props.theme[`color${props.color}`]};
  height: 4px;
  border-radius: 3px;
  width: ${props => props.width};
`;

const StyledPowerBarLabel = styled.div`
  font-size: 10px;
  margin-left: 0.475rem;
  color: ${props => props.theme.colorLabel};
`;

export default {
  components: {
    StyledWrapper,
    StyledPowerBar,
    StyledPowerBarLabel,
    StyledPowerBarWrapper,
    StyledItemWrapper,
    StyledItemName
  },
  data: function() {
    return {
      items: [
        {
          id: 1,
          name: "Europe",
          value: 66,
          color: "Chart1"
        },
        {
          id: 2,
          name: "North America",
          value: 23,
          color: "Chart2"
        },
        {
          id: 3,
          name: "Asia",
          value: 11,
          color: "Chart3"
        },
        {
          id: 4,
          name: "Africa",
          value: 6,
          color: "Chart4"
        }
      ]
    };
  }
};
</script>
