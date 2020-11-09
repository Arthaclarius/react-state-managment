import React, { createContext, useEffect, useMemo, useState } from "react";
import Layout from "~components/Layout";
import Row from "~components/Row";
import { IChat, IUser } from "~types";
import useFetchUsersEffect from "./useFetchUsersEffect";
import SideBar from "~containers/SideBar";
import Content from "~containers/Content";
import usePushMessageCallback from "./usePushMessageCallback";
import useSelectChatCallback from "./useSelectChatCallback";

export interface IAppContext {
  user?: IUser;
  currentChat?: IChat;
  setUser?: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  onSendMessage?: (newMessage: string) => void;
  onSelectChat?: (id: string) => void;
}

const initialContext: IAppContext = {};

export const AppContext = createContext(initialContext);
AppContext.displayName = "AppContext";

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

  const onSelectChat = useSelectChatCallback(setSelectedChat);

  const onSendMessage = usePushMessageCallback(user, currentChat, setUser);

  return (
    <AppContext.Provider
      value={{ user, currentChat, setUser, onSendMessage, onSelectChat }}
    >
      <Layout>
        <Row>
          <SideBar />
          <Content />
        </Row>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
