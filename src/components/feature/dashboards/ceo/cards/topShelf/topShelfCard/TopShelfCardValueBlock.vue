<template>
  <styled-wrapper>
    <styled-label>
      {{ card.title }}
    </styled-label>
    <styled-value>
      {{ card.value }}
    </styled-value>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  flex: 1;
`;

const StyledLabel = styled.div`
  color: ${props => props.theme.colorText};
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 0.375rem;
`;

const StyledValue = styled.div`
  font-size: 22px;
  font-weight: normal;

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    font-size: 34px;
  }
`;

export default {
  props: {
    card: Object
  },
  components: {
    StyledWrapper,
    StyledLabel,
    StyledValue
  }
};
</script>
