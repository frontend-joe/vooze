<template>
  <styled-wrapper>
    <styled-wrapper-inner>
      <block v-for="block in blocks" :key="block.name">
        <block-image :highlighted="block.highlighted" :src="block.img" />
        <block-title :title="block.name" />
        <block-rating-row
          :highlighted="block.highlighted"
          :icon="block.icon"
          :rating="block.rating"
          :department="block.department"
        />
      </block>
    </styled-wrapper-inner>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
//import VueCustomScrollbar from "vue-custom-scrollbar";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Block from "./Block";
import BlockImage from "./BlockImage";
import BlockTitle from "./BlockTitle";
import BlockRatingRow from "./BlockRatingRow";

const StyledWrapper = styled(VuePerfectScrollbar)`
  overflow: auto;
  margin-bottom: 2rem;
`;

const StyledWrapperInner = styled.div`
  display: flex;
`;

export default {
  components: {
    StyledWrapper,
    StyledWrapperInner,
    Block,
    BlockImage,
    BlockTitle,
    BlockRatingRow
  },
  data: function() {
    return {
      blocks: [
        {
          name: "Noah Griffin",
          img: require("../../../../../../assets/noah.jpg"),
          rating: 4.5,
          department: "Developer"
        },
        {
          name: "Bob Castle",
          img: require("../../../../../../assets/bob.jpg"),
          rating: 4.2,
          department: "Director",
          highlighted: true
        },
        {
          name: "Raymond Belle",
          img: require("../../../../../../assets/raymond.jpg"),
          rating: 4.1,
          department: "Manager"
        },
        {
          name: "Taylor Race",
          img: require("../../../../../../assets/noah-owens.jpg"),
          rating: 3.8,
          department: "Developer"
        },
        {
          name: "Karl East",
          img: require("../../../../../../assets/benik.jpeg"),
          rating: 3.4,
          department: "Designer"
        }
      ]
    };
  }
};
</script>
