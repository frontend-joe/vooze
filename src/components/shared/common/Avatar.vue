<template>
  <StyledImage :src="imageSrc" :size="size" :hasShadow="hasShadow">
  </StyledImage>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const avatarProps = {
  size: String,
  name: String,
  hasShadow: Boolean
};

const StyledImage = styled("img", avatarProps)`
  width: ${props => props.size || "40px"};
  height: ${props => props.size || "40px"};
  border-radius: 50%;

  ${props =>
    props.isShadow
      ? `box-shadow: 0 6px 20px 0 ${rgba(props.theme.colorAccent, 0.5)}`
      : ""};
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
        { name: "raymond", url: require("../../../assets/raymond.jpg") },
        { name: "dominic", url: require("../../../assets/images/dominic.jpg") }
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
