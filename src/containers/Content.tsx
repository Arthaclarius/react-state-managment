import { FC } from "react";
import { Content as ContentLayout } from "~components/Content";
import { IChat, IUser } from "~types";
import Chat from "~containers/Chat";
import InputChat from "~containers/InputChat";
import React from "react";

interface IContentProps {
  currentChat?: IChat;
  user?: IUser;
  onSend?: (message: string) => any;
}

const Content: FC<IContentProps> = ({ user, currentChat, onSend }) => {
  return (
    <ContentLayout>
      {currentChat?.messages ? (
        <Chat messages={currentChat.messages}></Chat>
      ) : (
        "Loading..."
      )}
      {currentChat?.users && (
        <InputChat
          friendName={
            currentChat.users.find((x) => x.id !== user?.id)?.nickname
          }
          onSend={onSend}
        ></InputChat>
      )}
    </ContentLayout>
  );
};

export default Content;
