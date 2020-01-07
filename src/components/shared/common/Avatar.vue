<template>
  <StyledImage :src="imageSrc" :size="size"> </StyledImage>
</template>

<script>
import styled from "vue-styled-components";

const avatarProps = {
  size: String,
  name: String
};

const StyledImage = styled("img", avatarProps)`
  width: ${props => props.size || "40px"};
  height: ${props => props.size || "40px"};
  border-radius: 50%;
`;

export default {
  props: avatarProps,
  components: {
    StyledImage
  },
  data: function() {
    return {
      images: [
        { name: "benik", url: require("../../../assets/benik.jpeg") },
        { name: "bob", url: require("../../../assets/bob.jpg") },
        { name: "noah", url: require("../../../assets/noah.jpg") },
        { name: "raymond", url: require("../../../assets/raymond.jpg") }
      ]
    };
  },
  computed: {
    imageSrc() {
      const item = this.images.find(obj => obj.name === this.name);
      return item.url;
    }
  }
};
</script>
