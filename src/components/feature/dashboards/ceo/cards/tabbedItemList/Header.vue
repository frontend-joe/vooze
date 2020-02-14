<template>
  <styled-wrapper>
    <header-top-row>
      <header-top-row-title>
        Properties
      </header-top-row-title>
      <header-top-row-search />
    </header-top-row>
    <header-tab-list>
      <header-tab-list-button
        v-for="tab in tabs"
        :key="tab"
        v-on:set-active-tab="$emit('set-active-tab', tab)"
        :tabId="tab"
        :active="tab === activeTab"
      >
        {{ tab }}
      </header-tab-list-button>
    </header-tab-list>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import HeaderTopRow from "./HeaderTopRow";
import HeaderTopRowTitle from "./HeaderTopRowTitle";
import HeaderTopRowSearch from "./HeaderTopRowSearch";
import HeaderTabList from "./HeaderTabList";
import HeaderTabListButton from "./HeaderTabListButton";

const StyledWrapper = styled.div`
  background: ${props => props.theme.colorCardHeader};
  padding: 1rem 2rem 0;
`;

export default {
  props: {
    activeTab: String
  },
  components: {
    StyledWrapper,
    HeaderTopRow,
    HeaderTopRowTitle,
    HeaderTopRowSearch,
    HeaderTabList,
    HeaderTabListButton
  },
  data: function() {
    return {
      tabs: ["Popular", "Birmingham", "Solihull", "Coventry"]
    };
  }
};
</script>
