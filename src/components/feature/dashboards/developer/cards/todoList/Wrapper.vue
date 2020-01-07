<template>
  <Card>
    <CardHeader>
      <CardTitle cardTitle="Todo List" />
      <CoolButton plain dropdown>Filter</CoolButton>
    </CardHeader>
    <CardContent>
      <styled-wrapper>
        <Textbox icon="search" iconPosition="left" />
        <List :data="data" />
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
import List from "./List";
import { Textbox } from "../../../../../shared/forms";
import { CoolButton } from "../../../../../shared/buttons";

const StyledWrapper = styled.div``;

export default {
  props: {
    data: Array
  },
  components: {
    StyledWrapper,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    List,
    Textbox,
    CoolButton
  },
  created: function() {
    console.log("created", this.data);
  }
};
</script>
