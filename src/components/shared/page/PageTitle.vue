<template>
  <StyledWrapper>
    <StyledBreadCrumb v-if="section">
      <StyledBreadCrumbSection>
        {{ section }}
      </StyledBreadCrumbSection>
      <StyledBreadCrumbSeparator>/</StyledBreadCrumbSeparator>
    </StyledBreadCrumb>
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  padding: 0;
  height: 80px;
  display: flex;
  font-size: 16px;
  font-weight: normal;
  align-items: center;
`;

const StyledBreadCrumb = styled.div`
  display: flex;
  align-items: center;
`;

const StyledBreadCrumbSection = styled.div`
  color: ${props => props.theme.colorSubtitle};
`;

const StyledBreadCrumbSeparator = styled.div`
  color: ${props => props.theme.colorSubtitle};
  font-size: 17px;
  margin: 0 0.5rem;
`;

export default {
  props: {
    section: String
  },
  components: {
    StyledWrapper,
    StyledBreadCrumb,
    StyledBreadCrumbSection,
    StyledBreadCrumbSeparator
  }
};
</script>
