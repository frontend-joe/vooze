<template>
  <styled-wrapper>
    <StyledBlock v-for="figure in figures" :key="figure.label">
      <StyledBlock__Value>
        {{ figure.value }}
      </StyledBlock__Value>
      <StyledBlock__Label>
        {{ figure.label }}
      </StyledBlock__Label>
    </StyledBlock>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.colorBorder};
  width: 100%;
`;

const StyledBlock = styled.div`
  width: 33.3333%;
  border-right: 1px solid ${props => props.theme.colorBorder};
  margin-right: 1rem;

  &:last-child {
    border: 0;
    margin: 0;
  }
`;

const StyledBlock__Value = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const StyledBlock__Label = styled.div`
  color: ${props => props.theme.colorSubtitle};
  font-size: 13px;
  text-align: left;
`;

export default {
  components: {
    StyledWrapper,
    StyledBlock,
    StyledBlock__Label,
    StyledBlock__Value
  },
  data: function() {
    return {
      figures: [
        {
          label: "Logins",
          value: "335K"
        },
        {
          label: "Top Device",
          value: "iPhone XR"
        },
        {
          label: "Top App",
          value: "Vuezy"
        }
      ]
    };
  }
};
</script>
