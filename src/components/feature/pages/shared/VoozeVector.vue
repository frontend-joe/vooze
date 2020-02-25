<template>
  <StyledImage :src="image" />
</template>

<script>
import styled from "vue-styled-components";

const StyledImage = styled.img`
  height: 250px;
`;

export default {
  components: {
    StyledImage
  },
  data: function() {
    return {
      image: require("../../../../assets/images/vooze-vector.svg")
    };
  }
};
</script>
