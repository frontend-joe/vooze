<template>
  <styled-wrapper>
    <MatIconButton
      forDark
      iconSize="28px"
      @click="toggleSidebarCollapsed(!sidebar.isCollapsed)"
      height="72px"
      width="64px"
    >
      {{ sidebar.isCollapsed ? "menu" : "menu_open" }}
    </MatIconButton>
  </styled-wrapper>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import styled from "vue-styled-components";
import { MatIconButton } from "../../shared/buttons";

const StyledWrapper = styled.div`
  flex: 0 0 auto;
`;

export default {
  methods: {
    ...mapActions(["toggleSidebarCollapsed"])
  },
  computed: mapGetters(["sidebar"]),
  components: {
    StyledWrapper,
    MatIconButton
  }
};
</script>
