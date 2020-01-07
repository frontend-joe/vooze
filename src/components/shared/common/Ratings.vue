<template>
  <StyledWrapper>
    <StyledStars>
      <StyledIcon icon="star" />
      <StyledIcon icon="star" />
      <StyledIcon icon="star" />
      <StyledIcon icon="star" />
      <StyledIcon icon="star-half" />
    </StyledStars>
    <StyledLabel> {{ rating }} </StyledLabel>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledStars = styled.div``;

const StyledLabel = styled.div`
  color: ${props => props.theme.colorText};
  font-size: 13px;
  font-weight: bold;
  transform: translateY(1px);
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colorYellow};
  font-size: 14px !important;
  margin-right: 0.25rem;
`;

export default {
  props: {
    rating: Number
  },
  components: {
    StyledWrapper,
    StyledIcon,
    StyledStars,
    StyledLabel
  }
};
</script>
