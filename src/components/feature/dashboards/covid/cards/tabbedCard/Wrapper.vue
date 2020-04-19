<template>
  <Card
    overflowHidden
    minHeight="320px"
    :loading="loading"
    :isSkeleton="loading"
  >
    <CardHeader>
      <CardTitle cardTitle="Region Stats" cardSubtitle="Total since lockdown" />
    </CardHeader>
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

        <Table v-if="!loading" rowBorder>
          <Thead>
            <Tr>
              <Th>
                Nation
              </Th>
              <Th>
                Confirmed
              </Th>
              <Th>
                Recovered
              </Th>
              <Th>
                Churned
              </Th>
              <Th> </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr v-for="item in tabContentList" :key="item.id">
              <Td>
                <StyledFlagBlock>
                  <StyledFlagImage v-if="item.image" :image="item.image" />
                  {{ item.text }}
                </StyledFlagBlock>
              </Td>
              <Td>
                {{ item.confirmed }}
              </Td>
              <Td>
                {{ item.recovered }}
              </Td>
              <Td>
                {{ item.deaths }}
              </Td>
              <Td>
                <Badge :color="item.color" />
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <!-- <HyperLink :loading="loading">See All</HyperLink> -->
      </TabContent>
    </StyledWrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card, CardHeader, CardTitle } from "@/components/shared/card";
// import { HyperLink } from "@/components/shared/buttons";
import { Badge } from "@/components/shared/common";
import { Table, Thead, Tbody, Tr, Th, Td } from "@/components/shared/table";
import {
  SkeletonWrapper,
  SkeletonRectangle,
  SkeletonCircle
} from "@/components/shared/skeleton";
import TabHeader from "./TabHeader";
import TabHeaderButton from "./TabHeaderButton";
import TabContent from "./TabContent";
import List from "./List";
// import ListItem from "./ListItem";

const StyledWrapper = styled.div``;

const StyledSkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.425rem 0;
`;

const StyledFlagBlock = styled.div`
  display: flex;
  align-items: center;
`;

const flagProps = { image: String };
const StyledFlagImage = styled("div", flagProps)`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  flex: 0 0 1.5rem;
  background: url(${props => require(`@/assets/images/${props.image}`)});
  background-position: center;
  background-size: 115%;
  margin-right: 0.5rem;
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
    CardHeader,
    CardTitle,
    TabHeader,
    TabHeaderButton,
    TabContent,
    StyledFlagBlock,
    StyledFlagImage,
    List,
    Badge,
    // ListItem,
    // HyperLink,
    SkeletonRectangle,
    SkeletonCircle,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
  },
  computed: {
    tabHeaders() {
      let data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

      if (this.data && !this.loading) {
        data = this.data;
      }

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
