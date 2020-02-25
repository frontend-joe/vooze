<template>
  <StyledWrapper>
    <StyledTitle>
      {{ errorTitle }}
    </StyledTitle>
    <StyledSubtitle>
      {{ errorSubtitle }}
    </StyledSubtitle>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const StyledTitle = styled.div`
  font-size: 160px;
  font-weight: bold;
  text-shadow: 10px 6px 0px rgba(117, 117, 117, 0.25);
  margin-bottom: 1rem;
`;

const StyledSubtitle = styled.div`
  color: ${props => props.theme.colorText};
`;

export default {
  props: {
    errorTitle: String,
    errorSubtitle: String
  },
  components: {
    StyledWrapper,
    StyledTitle,
    StyledSubtitle
  }
};
</script>
