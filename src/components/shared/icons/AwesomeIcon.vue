<template>
  <StyledWrapper :icon="icon" />
</template>

<script>
import styled from "vue-styled-components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const StyledWrapper = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colorPrimary};
`;

export default {
  props: {
    icon: String
  },
  components: {
    StyledWrapper
  }
};
</script>
