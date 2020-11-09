import React, { useEffect, useMemo, useState } from "react";
import Layout from "~components/Layout";
import Row from "~components/Row";
import { IUser } from "~types";
import useFetchUsersEffect from "./useFetchUsersEffect";
import SideBar from "~containers/SideBar";
import Content from "~containers/Content";
import usePushMessageCallback from "./usePushMessageCallback";
import useSelectChatCallback from "./useSelectChatCallback";

const App = () => {
  const [user, setUser] = useState<IUser | undefined>();
  const [selectedChat, setSelectedChat] = useState<string | undefined>();
  const currentChat = useMemo(
    () => user?.chats?.find((chat) => chat.id === selectedChat),
    [selectedChat]
  );

  useEffect(() => {
    if (!user?.chats?.[0].id || selectedChat) return;

    setSelectedChat(user.chats[0].id);
  }, [user?.chats]);

  useFetchUsersEffect(setUser);

  const onSelectedChat = useSelectChatCallback(setSelectedChat);

  const onSendMessage = usePushMessageCallback(user, currentChat, setUser);

  return (
    <Layout>
      <Row>
        <SideBar
          user={user}
          selectedChat={selectedChat}
          onSelectedChat={onSelectedChat}
        />
        <Content user={user} currentChat={currentChat} onSend={onSendMessage} />
      </Row>
    </Layout>
  );
};

export default App;
