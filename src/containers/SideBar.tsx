import { FC, useContext } from "react";
import { SideBar as SideBarLayout } from "~components/SideBar";
import Chats from "~containers/Chats";
import React from "react";
import { AppContext } from "~pages/App/App";

const SideBar = () => {
  const { user, currentChat, onSelectChat } = useContext(AppContext);

  return (
    <SideBarLayout>
      {user && user.chats ? (
        <Chats
          userId={user.id}
          chats={user.chats}
          selectedChat={currentChat?.id}
          onSelectChat={onSelectChat}
        ></Chats>
      ) : (
        "Loading..."
      )}
    </SideBarLayout>
  );
};

export default SideBar;
