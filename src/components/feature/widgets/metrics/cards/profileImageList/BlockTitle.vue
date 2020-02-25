<template>
  <styled-title>{{title}}</styled-title>
</template>

<script>
import styled from "vue-styled-components";

const StyledTitle = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.colorSubtitle};
  margin-bottom: 0.85rem;
`;

export default {
  props: {
    title: String
  },
  components: {
    StyledTitle
  }
};
</script>
