<template>
  <styled-section>
    <styled-title>
      {{title}}
    </styled-title>
    <slot />
  </styled-section>
</template>

<script>
import styled from "vue-styled-components";

const StyledSection = styled.div`
  margin-bottom: 0.5rem;
`;

const StyledTitle = styled.div`
  color: ${props => props.theme.colorSubtitle};
  font-size: 13px
  margin-bottom: 1.25rem;
`;

export default {
  props: {
    title: String
  },
  components: {
    StyledTitle,
    StyledSection
  }
};
</script>
