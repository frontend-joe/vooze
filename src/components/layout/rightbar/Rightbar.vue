<template>
  <StyledWrapper>
    <Calendar />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import Calendar from "./Calendar";

const StyledWrapper = styled.div`
  position: fixed;
  padding: 72px 1.65rem 1rem;
  top: 0;
  right: 0;
  height: 100%;
  width: 340px;
  background: #f3f3f3;
  box-shadow: ${props => props.theme.boxShadowNeu};
  display: none;

  @media (min-width: ${props => props.theme.screenWidthXl}) {
    display: block;
  }
`;

export default {
  components: {
    StyledWrapper,
    Calendar
  }
};
</script>
