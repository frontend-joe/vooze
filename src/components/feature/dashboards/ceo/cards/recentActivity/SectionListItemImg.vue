<template>
  <div>
    <styled-image v-if="src" :src="src" />
    <styled-avatar v-if="avatar" :color="avatar.color">
      {{ avatar.letters }}
    </styled-avatar>
  </div>
</template>

<script>
import styled from "vue-styled-components";

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const avatarProps = { color: String };
const StyledAvatar = styled("div", avatarProps)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
  color: white;
  display: flex;
  font-size: 13px;
  letter-spacing: 1px;
  align-items: center;
  justify-content: center;
  ${props =>
    props.color === "blue"
      ? `background: ${props.theme.colorBlue}`
      : ""};

  ${props =>
    props.color === "green"
      ? `background: ${props.theme.colorGreen}`
      : ""};
`;

export default {
  props: {
    src: String,
    avatar: Object
  },
  components: {
    StyledImage,
    StyledAvatar
  }
};
</script>
