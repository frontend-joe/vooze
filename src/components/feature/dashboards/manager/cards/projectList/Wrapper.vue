<template>
  <styled-wrapper>
    <ContentHeader>
      <span>Projects</span>
      <CoolButton
        sm
        primary
        rounded
        icon="arrow_right_alt"
        iconPosition="right"
      >
        Start New
      </CoolButton>
    </ContentHeader>
    <Card fixedHeight="526px" :loading="loading" showLoadingSpinner>
      <CardHeader>
        <CardTitle cardTitle="Active Projects" />
        <CoolButton plain dropdown>
          Sort by
        </CoolButton>
      </CardHeader>
      <CardContent>
        <Table v-if="!loading" rowBorder striped>
          <Thead>
            <Tr>
              <Th :style="{ width: '16px' }"> </Th>
              <Th>
                Project Title
              </Th>
              <Th>Deadline</Th>
              <Th>Team</Th>
              <Th>
                Progress
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr v-for="item in data" :key="item.id">
              <Td>
                <Badge
                  :style="{ display: 'none' }"
                  :color="item.color"
                  :opacity="0.625"
                />
                <CoolIcon
                  :icon="item.icon"
                  iconSize="22px"
                  :iconColor="item.color"
                />
              </Td>
              <Td>
                <b>
                  {{ item.title }}
                </b>
              </Td>
              <Td>
                {{ item.due }}
              </Td>
              <Td>
                <StyledImageList>
                  <StyledImageWrapper
                    :content="person.name"
                    v-tippy="{ placement: 'top', arrow: true }"
                    v-for="(person, index) in item.team"
                    :key="person.id"
                  >
                    <StyledImage :src="images[index]" />
                  </StyledImageWrapper>
                </StyledImageList>
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
      </CardContent>
    </Card>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "../../../../../shared/card";
import { CoolButton } from "../../../../../shared/buttons";
import { ContentHeader } from "../../../../../shared/page";
import { CoolIcon } from "../../../../../shared/icons";
import { Table, Thead, Tbody, Tr, Th, Td } from "../../../../../shared/table";
import { PowerBar, Badge } from "../../../../../shared/common";

const StyledWrapper = styled.div``;

const StyledImageList = styled.div`
  display: flex;
`;

const StyledImageWrapper = styled.div`
  width: 22px;
  height: 30px;
  position: relative;
  cursor: pointer;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid white;
  transform: translateX(-10px);

  &:first-child {
    transform: translateX(0);
  }
`;

export default {
  props: {
    data: Array,
    loading: Boolean
  },
  data: function() {
    return {
      images: [
        require("../../../../../../assets/noah.jpg"),
        require("../../../../../../assets/benik.jpeg"),
        require("../../../../../../assets/raymond.jpg")
      ]
    };
  },
  components: {
    StyledWrapper,
    StyledImage,
    StyledImageWrapper,
    StyledImageList,
    ContentHeader,
    Card,
    CardHeader,
    CardTitle,
    CoolButton,
    CardContent,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    PowerBar,
    CoolIcon,
    Badge
  }
};
</script>
