<template>
  <Card overflowHidden>
    <StyledBackgroundColor>
      <StyledSendButton>
        <MatIcon iconColor="white" iconSize="24px">
          send
        </MatIcon>
      </StyledSendButton>
      <StyledTopRow>
        <MatIconButton forDark>menu</MatIconButton>
        <MatIconButton forDark>more_vert</MatIconButton>
      </StyledTopRow>
      <StyledAvatarRow>
        <Avatar name="bob" size="88px" hasShadow />
        <StyledAvatarTitle>
          Pierre Wayland
        </StyledAvatarTitle>
        <StyledAvatarSubtitle>
          Senior Dev
        </StyledAvatarSubtitle>
      </StyledAvatarRow>
    </StyledBackgroundColor>
    <StyledContent>
      Cenas in erat accumsan, hendrerit lorem vel, pulvinar odio. Quisque eu
      conva.
    </StyledContent>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Card } from "../../../../../shared/card";
import { MatIconButton } from "../../../../../shared/buttons";
import { Avatar } from "../../../../../shared/common";
import { MatIcon } from "../../../../../shared/icons";

const StyledTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledAvatarRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledBackgroundColor = styled.div`
  position: relative;
  padding: 1.5rem;
  background: ${props => props.theme.colorPrimary};
  background-image: linear-gradient(0deg, #3f51b5, #7684cf);
`;

const StyledAvatarTitle = styled.div`
  color: white;
  font-size: 15px;
  margin-bottom: 0.325rem;
  padding-top: 1rem;
`;

const StyledAvatarSubtitle = styled.div`
  color: rgba(255, 255, 255, 0.67);
  font-size: 13px;
`;

const StyledSendButton = styled.button`
  position: absolute;
  right: 1.5rem;
  bottom: 0;
  border: 0;
  transform: translateY(50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.theme.colorAccent};
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 8px 17px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled.div`
  padding: 2.5rem 2.5rem;
  text-align: center;
  line-height: 1.75;
  color: ${props => props.theme.colorText};
`;

export default {
  components: {
    StyledTopRow,
    Card,
    MatIconButton,
    StyledBackgroundColor,
    StyledAvatarRow,
    Avatar,
    StyledSendButton,
    MatIcon,
    StyledContent,
    StyledAvatarTitle,
    StyledAvatarSubtitle
  }
};
</script>
