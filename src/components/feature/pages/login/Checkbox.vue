<template>
  <StyledWrapper>
    <StyledCheckboxControl name="test" type="checkbox" />
    <StyledCheckboxLabel for="test">{{ label }}</StyledCheckboxLabel>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const StyledCheckboxControl = styled.input``;

const StyledCheckboxLabel = styled.label``;

export default {
  props: {
    label: String
  },
  components: {
    StyledWrapper,
    StyledCheckboxControl,
    StyledCheckboxLabel
  }
};
</script>
