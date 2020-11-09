import { FC, useContext } from "react";
import { Content as ContentLayout } from "~components/Content";
import Chat from "~containers/Chat";
import InputChat from "~containers/InputChat";
import React from "react";
import { AppContext } from "~pages/App/App";

const Content = () => {
  const { user, currentChat, onSendMessage } = useContext(AppContext);

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
          onSend={onSendMessage}
        ></InputChat>
      )}
    </ContentLayout>
  );
};

export default Content;
