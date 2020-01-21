<template>
  <Card
    overflowHidden
    minHeight="320px"
    :loading="loading"
    :isSkeleton="loading"
  >
    <StyledWrapper>
      <TabHeader>
        <TabHeaderButton
          v-for="tab in tabHeaders"
          :key="tab.id"
          :isActive="tab.isActive"
        >
          {{ tab.title }}

          <SkeletonRectangle v-if="loading" marginBottom="0" />
        </TabHeaderButton>
      </TabHeader>

      <TabContent>
        <List v-if="loading">
          <StyledSkeletonWrapper v-for="item in tabContentList" :key="item.id">
            <SkeletonCircle skeletonSize="32px" marginRight="1rem" />
            <SkeletonWrapper :flex="1">
              <SkeletonRectangle marginBottom="0" :skeletonWidth="item.width" />
            </SkeletonWrapper>
            <SkeletonCircle skeletonSize="12px" marginRight="1rem" />
            <SkeletonCircle skeletonSize="12px" marginRight="0.5rem" />
          </StyledSkeletonWrapper>
        </List>

        <List v-if="!loading">
          <ListItem
            v-for="item in tabContentList"
            :key="item.id"
            :item="item"
          />
        </List>
        <HyperLink :loading="loading">See All</HyperLink>
      </TabContent>
    </StyledWrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { HyperLink } from "../../../../../shared/buttons";
import {
  SkeletonWrapper,
  SkeletonRectangle,
  SkeletonCircle
} from "../../../../../shared/skeleton";
import TabHeader from "./TabHeader";
import TabHeaderButton from "./TabHeaderButton";
import TabContent from "./TabContent";
import List from "./List";
import ListItem from "./ListItem";

const StyledWrapper = styled.div``;

const StyledSkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.425rem 0;
`;

export default {
  props: {
    data: Array,
    loading: Boolean
  },
  components: {
    StyledWrapper,
    SkeletonWrapper,
    StyledSkeletonWrapper,
    Card,
    TabHeader,
    TabHeaderButton,
    TabContent,
    List,
    ListItem,
    HyperLink,
    SkeletonRectangle,
    SkeletonCircle
  },
  computed: {
    tabHeaders() {
      let data = [
        {
          id: 1,
          title: ""
        },
        {
          id: 2,
          title: ""
        },
        {
          id: 3,
          title: ""
        },
        {
          id: 4,
          title: ""
        }
      ];

      if (this.data && !this.loading) {
        data = this.data;
      }

      console.log("data", data);

      // This creates a new empty object, copies the item into it,
      // then calculates `fullAddress` and copies that entry into it
      return data.map(obj =>
        Object.assign({}, obj, {
          title: obj.title
        })
      );
    },
    tabContentList() {
      let data = [
        {
          id: 1,
          items: [
            {
              id: 1,
              text: "Test",
              width: "50%"
            },
            {
              id: 2,
              text: "Test",
              width: "40%"
            },
            {
              id: 3,
              text: "Test",
              width: "30%"
            },
            {
              id: 4,
              text: "Test",
              width: "20%"
            }
          ],
          isActive: true
        },
        {
          id: 2,
          items: []
        },
        {
          id: 3,
          items: []
        },
        {
          id: 4,
          items: []
        }
      ];

      if (this.data && !this.loading) {
        data = this.data;
      }

      console.log("data", data);
      // This creates a new empty object, copies the item into it,
      // then calculates `ful lAddress` and copies that entry into it
      return data
        .find(obj => obj.isActive)
        .items.map(obj =>
          Object.assign({}, obj, {
            obj
          })
        );
    }
  }
};
</script>
