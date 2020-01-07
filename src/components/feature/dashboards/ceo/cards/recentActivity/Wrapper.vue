<template>
  <card padding="1rem">
    <styled-card-header>
      Recent Activity
    </styled-card-header>
    <div v-for="section in sections" :key="section.name">
      <section-wrapper :title="section.name">
        <section-list>
          <section-list-item v-for="item in section.items" :key="item.text">
            <section-list-item-img :src="item.img" :avatar="item.avatar" />
            <section-list-item-text>{{ item.text }}</section-list-item-text>
          </section-list-item>
        </section-list>
      </section-wrapper>
    </div>
    <styled-card-footer-button>
      Read More
    </styled-card-footer-button>
  </card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import Section from "./Section";
import SectionList from "./SectionList";
import SectionListItem from "./SectionListItem";
import SectionListItemImg from "./SectionListItemImg";
import SectionListItemText from "./SectionListItemText";

const StyledCardHeader = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StyledCardFooterButton = styled.button`
  padding-top: 1rem;
  background: transparent;
  border: 0;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0;
  color: ${props => props.theme.colorSecondary};
`;

export default {
  components: {
    Card,
    StyledCardHeader,
    StyledCardFooterButton,
    sectionWrapper: Section,
    SectionList,
    SectionListItem,
    SectionListItemImg,
    SectionListItemText
  },
  data: function() {
    return {
      sections: [
        {
          name: "Today",
          items: [
            {
              img: require("../../../../../../assets/noah.jpg"),
              text: "Noah left a 5 star review on Broadstone House"
            },
            {
              avatar: {
                letters: "AB",
                color: "blue"
              },
              text: "Amanda Brody is a new client."
            },
            {
              img: require("../../../../../../assets/bob.jpg"),
              text: "Bob made 7 new contacts."
            },
            {
              img: require("../../../../../../assets/raymond.jpg"),
              text: "Raymond became a top seller."
            }
          ]
        },
        {
          name: "Yesterday",
          items: [
            {
              img: require("../../../../../../assets/domnic-harris.jpg"),
              text: "Dominic left the organization."
            },
            {
              avatar: {
                letters: "DH",
                color: "green"
              },
              text: "Dale Harper became a top seller."
            },
            {
              img: require("../../../../../../assets/benik.jpeg"),
              text: "Benik had record high viewings in one day."
            }
          ]
        }
      ]
    };
  }
};
</script>
