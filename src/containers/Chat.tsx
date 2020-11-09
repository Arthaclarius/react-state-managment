import React from "react";
import { compose, negate, prop, sortBy } from "ramda";
import { FC } from "react";
import { IMessage } from "~types";
import Message from "~components/Message";
import styled from "styled-components";

interface IChatProps {
  messages: IMessage[];
}

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1 1 auto;
  overflow-y: auto;
`;

const Chat: FC<IChatProps> = ({ messages }) => {
  return (
    <ChatWrapper>
      {sortBy(compose(negate, prop("date")), messages).map(
        ({ id, text, user, date }) => {
          return (
            <Message
              key={id}
              avatar={user.avatar}
              nickname={user.nickname}
              text={text}
              date={date}
            ></Message>
          );
        }
      )}
    </ChatWrapper>
  );
};

export default Chat;
