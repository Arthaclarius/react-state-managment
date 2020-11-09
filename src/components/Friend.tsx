import React, { FC, useCallback } from "react";
import styled, { css } from "styled-components";
import { FriendAvatar } from "./FriendAvatar";

interface IFriendBoxProps {
  selected?: boolean;
}

const friendBoxHoverMixin = css`
  color: #fffcf9;
  background-color: #34373c;
`;

const FriendBox = styled.div<IFriendBoxProps>`
  display: flex;
  flex-direction: row;
  height: 45px;
  color: #72767d;
  font-weight: bold;
  cursor: pointer;
  margin: 5px 15px;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;

  ${(props) => (props.selected ? friendBoxHoverMixin : "")}
  :hover {
    ${friendBoxHoverMixin}
  }

  span {
    margin-left: 10px;
  }
`;

interface IFriendProps {
  nickname: string;
  avatar: string;
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Friend: FC<IFriendProps> = ({ avatar, nickname, selected, onClick }) => {
  return (
    <FriendBox selected={selected} onClick={onClick}>
      <FriendAvatar src={avatar}></FriendAvatar>
      <span>{nickname}</span>
    </FriendBox>
  );
};

export default Friend;
