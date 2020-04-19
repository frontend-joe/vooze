<template>
  <styled-wrapper>
    <list-item v-for="item in items" :key="item.name">
      <list-item-left :item="item" />
      <list-item-right :slides="item.images" />
    </list-item>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import ListItem from "./ListItem";
import ListItemLeft from "./ListItemLeft";
import ListItemRight from "./ListItemRight";

const StyledWrapper = styled.div`
  @media (max-width: ${props => props.theme.screenWidthMd}) {
    margin: 0 1rem 1rem;
    overflow: hidden;
  }
`;

export default {
  components: {
    StyledWrapper,
    ListItem,
    ListItemLeft,
    ListItemRight
  },
  data: function() {
    return {
      items: [
        {
          name: "Eiffel Chair White",
          where: "Sleak and clean",
          price: "£48",
          pricePerSquareFoot: "Special Offer",
          type: {
            text: "Cool",
            color: "#ff9800"
          },
          images: [
            {
              url: require("../../../../../../assets/images/chair3.jpg"),
              liked: false,
              chip: "Featured"
            },
            {
              url: require("../../../../../../assets/images/chair.jpg"),
              liked: true,
              chip: "Featured"
            },
            {
              url: require("../../../../../../assets/images/chair2.jpg"),
              liked: false,
              chip: "Featured"
            }
          ]
        },
        {
          name: "MacBook Pro 16",
          where: "September 2019",
          price: "£2,700",
          pricePerSquareFoot: "or £94 per month",
          type: {
            text: "New 2019",
            color: "#ff4063"
          },
          images: [
            {
              url: require("../../../../../../assets/images/macbookpro.jpg"),
              liked: false,
              chip: "Featured"
            },
            {
              url: require("../../../../../../assets/images/iphonexr.jpg"),
              liked: true,
              chip: "Featured"
            },
            {
              url:
                "http://drift.g-axon.work/html-bs4/default/assets/images/grid/bedroom-6.jpeg",
              liked: false,
              chip: "Featured"
            }
          ]
        },
        {
          name: "iPhone XR",
          where: "October 2019",
          price: "£670",
          pricePerSquareFoot: "Free Voucher",
          type: {
            text: "Special",
            color: "#1dce8e"
          },
          images: [
            {
              url: require("../../../../../../assets/images/iphonexr.jpg"),
              liked: false,
              chip: "Featured"
            },
            {
              url:
                "http://drift.g-axon.work/html-bs4/default/assets/images/grid/living-room-6.jpeg",
              liked: true,
              chip: "Featured"
            },
            {
              url:
                "http://drift.g-axon.work/html-bs4/default/assets/images/grid/bedroom-6.jpeg",
              liked: false,
              chip: "Featured"
            }
          ]
        }
      ]
    };
  }
};
</script>
