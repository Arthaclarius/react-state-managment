import React, { FC } from "react";
import styled from "styled-components";
import { FriendAvatar } from "./FriendAvatar";

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-left: 10px;
`;
const MessageHeader = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #f2ffff;
  margin-bottom: 5px;

  span {
    font-weight: normal;
    font-size: 12px;
    color: #72767d;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #d7d5d9;
  font-size: 13px;
  width: 100%;
  margin: 10px 0;
  padding: 5px 0px 5px 25px;
  box-sizing: border-box;

  :hover {
    background-color: #32353b;
  }
`;

export interface IMessageProps {
  avatar: string;
  nickname: string;
  date: number;
  text: string;
}

const Message: FC<IMessageProps> = ({ avatar, date, nickname, text }) => {
  return (
    <MessageContainer>
      <FriendAvatar src={avatar}></FriendAvatar>
      <MessageContent>
        <MessageHeader>
          {nickname} <span>{new Date(date).toLocaleDateString()}</span>
        </MessageHeader>
        {text}
      </MessageContent>
    </MessageContainer>
  );
};

export default Message;
