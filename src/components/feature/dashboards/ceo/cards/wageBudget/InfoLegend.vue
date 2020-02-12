<template>
  <styled-wrapper>
    <StyledTotalBlock>
      <StyledTotalBlock__label>
        Total
      </StyledTotalBlock__label>
      <StyledTotalBlock__value>
        £1.4M
      </StyledTotalBlock__value>
    </StyledTotalBlock>
    <StyledLegendList>
      <InfoLegendItem
        v-for="(item, index) in items"
        :index="index"
        :key="item.id"
        :item="item"
      />
    </StyledLegendList>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import InfoLegendItem from "./InfoLegendItem";

const StyledWrapper = styled.div`
  width: calc(100% - 1.5rem);
`;

const StyledTotalBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 0 1.25rem;
  border-bottom: 3px solid rgba(255, 255, 255, 0.25);
  margin-bottom: 1rem;
`;

const StyledTotalBlock__value = styled.div`
  font-weight: normal;
  font-size: 25px;

  @media (min-width: ${props => props.theme.screenWidthXl}) {
    font-size: 32px;
  }
`;

const StyledTotalBlock__label = styled.div`
  color: rgba(255, 255, 255, 0.57);
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 0.325rem;

  @media (min-width: ${props => props.theme.screenWidthXl}) {
    font-size: 14px;
  }
`;

const StyledLegendList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`;

export default {
  components: {
    StyledWrapper,
    StyledTotalBlock,
    StyledTotalBlock__value,
    StyledTotalBlock__label,
    InfoLegendItem,
    StyledLegendList
  },
  data: function() {
    return {
      items: [
        {
          id: 1,
          name: "Managers",
          value: 44
        },
        {
          id: 2,
          name: "Developers",
          value: 55
        },
        {
          id: 3,
          name: "Designers",
          value: 32
        }
      ]
    };
  }
};
</script>
