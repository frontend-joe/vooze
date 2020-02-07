<template>
  <Card>
    <CardHeader>
      <CardTitle cardTitle="Influencers" cardSubtitle="High profile users" />
      <Chip isGradient hasShadow>+ 20</Chip>
    </CardHeader>
    <CardContent>
      <styled-wrapper>
        <Table v-if="items" rowBorder striped>
          <Thead>
            <Tr>
              <Th :style="{ width: '16px' }"> </Th>
              <Th>Name </Th>
              <Th>Followers</Th>
              <Th>Growth </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr v-for="item in items" :key="item.id">
              <Td>
                <Avatar hasShadow :name="item.name" />
              </Td>
              <Td>
                <b :style="{ textTransform: 'capitalize' }">
                  {{ item.name }}
                </b>
              </Td>
              <Td>
                {{ item.followers }}
              </Td>
              <Td>
                <PowerBar
                  :content="`${item.percentage}%`"
                  v-tippy="{ placement: 'top', arrow: true }"
                  :percentage="item.percentage"
                  :color="item.color"
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </styled-wrapper>
    </CardContent>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../../../../shared/card";
import { PowerBar, Avatar } from "../../../../../shared/common";
import { Chip } from "../../../../../shared/chip";
import { Table, Thead, Tbody, Tr, Th, Td } from "../../../../../shared/table";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    PowerBar,
    Avatar,
    Chip
  },
  data: function() {
    return {
      items: [
        {
          id: 1,
          name: "benik",
          start: "Jan, 2016",
          followers: "134K",
          color: "Primary",
          percentage: 45
        },
        {
          id: 2,
          name: "bob",
          start: "Nov, 2018",
          followers: "284K",
          color: "Secondary",
          percentage: 67
        },
        {
          id: 3,
          name: "raymond",
          start: "Mar, 2018",
          followers: "1.4M",
          color: "ChartGreyDark",
          percentage: 23
        }
      ]
    };
  }
};
</script>
