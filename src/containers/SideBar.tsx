import { FC } from "react";
import { SideBar as SideBarLayout } from "~components/SideBar";
import { IUser } from "~types";
import Chats from "~containers/Chats";
import React from "react";

interface ISideBarProps {
  user?: IUser;
  selectedChat?: string;
  onSelectedChat?: (id: string) => any;
}

const SideBar: FC<ISideBarProps> = ({ user, selectedChat, onSelectedChat }) => {
  return (
    <SideBarLayout>
      {user && user.chats ? (
        <Chats
          userId={user.id}
          chats={user.chats}
          selectedChat={selectedChat}
          onSelectedChat={onSelectedChat}
        ></Chats>
      ) : (
        "Loading..."
      )}
    </SideBarLayout>
  );
};

export default SideBar;
