<template>
  <styled-wrapper>
    <MatIconButton
      :forDark="settings.themeModeId !== 'light'"
      color="red"
      iconSize="22px"
      @click="toggleSidebarOpen(true)"
      height="72px"
      width="64px"
      >menu</MatIconButton
    >
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
    ...mapActions(["toggleSidebarOpen"])
  },
  computed: mapGetters(["settings"]),
  components: {
    StyledWrapper,
    MatIconButton
  }
};
</script>
