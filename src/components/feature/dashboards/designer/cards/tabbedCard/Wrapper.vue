<template>
  <Card minHeight="320px">
    <StyledWrapper>
      <TabHeader>
        <TabHeaderButton
          v-for="tab in tabHeaders"
          :key="tab.id"
          :isActive="tab.isActive"
        >
          {{ tab.title }}
        </TabHeaderButton>
      </TabHeader>

      <TabContent>
        <List>
          <ListItem
            v-for="item in tabContentList"
            :key="item.id"
            :item="item"
          />
        </List>
        <HyperLink>See All</HyperLink>
      </TabContent>
    </StyledWrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { HyperLink } from "../../../../../shared/buttons";
import TabHeader from "./TabHeader";
import TabHeaderButton from "./TabHeaderButton";
import TabContent from "./TabContent";
import List from "./List";
import ListItem from "./ListItem";

const StyledWrapper = styled.div``;

export default {
  props: {
    data: Array
  },
  computed: {
    tabHeaders() {
      if (!this.data) {
        return;
      }
      // This creates a new empty object, copies the item into it,
      // then calculates `fullAddress` and copies that entry into it
      return this.data.map(obj =>
        Object.assign({}, obj, {
          title: obj.title
        })
      );
    },
    tabContentList() {
      if (!this.data) {
        return;
      }
      // This creates a new empty object, copies the item into it,
      // then calculates `fullAddress` and copies that entry into it
      return this.data
        .find(obj => obj.isActive)
        .items.map(obj =>
          Object.assign({}, obj, {
            obj
          })
        );
    }
  },
  components: {
    StyledWrapper,
    Card,
    TabHeader,
    TabHeaderButton,
    TabContent,
    List,
    ListItem,
    HyperLink
  }
};
</script>
