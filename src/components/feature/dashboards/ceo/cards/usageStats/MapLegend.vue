<template>
  <styled-wrapper>
    <!-- <StyledTitle>Regions</StyledTitle> -->
    <styled-item-wrapper v-for="item in items" :key="item.id">
      <StyledTopRow>
        <styled-item-name>
          {{ item.name }}
        </styled-item-name>
        <styled-power-bar-label> {{ item.value }}% </styled-power-bar-label>
      </StyledTopRow>
      <styled-power-bar-wrapper>
        <styled-power-bar :color="item.color" :width="`${item.value}%`" />
      </styled-power-bar-wrapper>
    </styled-item-wrapper>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  width: 100%;
`;

// const StyledTitle = styled.div`
//   font-size: 13px;
//   color: ${props => props.theme.colorSubtitle};
//   margin-bottom: 1rem;
// `;

const StyledItemWrapper = styled.div`
  margin-bottom: 1.875rem;

  &:last-child {
    margin-bottom: 0.75rem;
  }
`;

const StyledTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const StyledItemName = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colorSubtitle};
`;

const StyledPowerBarWrapper = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colorProgressBackground};
`;

const powerbarProps = { width: String, color: String };
const StyledPowerBar = styled("div", powerbarProps)`
  background: ${props => props.theme[`color${props.color}`]};
  height: 4px;
  border-radius: 2px;
  width: ${props => props.width};
  opacity: 0.85;
`;

const StyledPowerBarLabel = styled.div`
  font-size: 16px;
  margin-left: 0.475rem;
  color: ${props => props.theme.colorText};
`;

export default {
  components: {
    StyledWrapper,
    StyledPowerBar,
    StyledPowerBarLabel,
    StyledPowerBarWrapper,
    StyledItemWrapper,
    StyledItemName,
    StyledTopRow
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
