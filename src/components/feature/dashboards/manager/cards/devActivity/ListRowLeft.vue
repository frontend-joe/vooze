<template>
  <StyledWrapper> {{ text }} </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  width: 50px;
  flex: 0 0 50px;
  text-align: right;
  font-size: 12px;
  color: ${props => props.theme.colorSubtitle};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default {
  props: { text: String },
  components: {
    StyledWrapper
  }
};
</script>
