<template>
  <StyledWrapper :centered="centered">
    <StyledLabel>{{ label }}</StyledLabel>
    <StyledValue>{{ value }}</StyledValue>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const wrapperProps = {
  centered: Boolean
};

const StyledWrapper = styled("div", wrapperProps)`
  display: flex;
  flex-direction: column;

  align-items: ${props => (props.centered ? "center" : "flex-start")};
`;

const StyledLabel = styled.div`
  font-size: 0.85rem;
  margin-bottom: 0.375rem;
  color: ${props => props.theme.colorLabel};
`;

const StyledValue = styled.div`
  font-size: 1.55rem;
  color: ${props => props.theme.colorText};
`;

export default {
  props: {
    label: String,
    value: String,
    centered: Boolean
  },
  components: {
    StyledWrapper,
    StyledLabel,
    StyledValue
  }
};
</script>
