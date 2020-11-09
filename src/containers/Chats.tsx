import React, { FC, useCallback } from "react";
import Friend from "~components/Friend";
import { IChat } from "~types";

interface IChatsProps {
  userId: string;
  chats: IChat[];
  selectedChat?: string;
  onSelectChat?: (id: string) => any;
}
const Chats: FC<IChatsProps> = ({
  userId,
  chats,
  selectedChat,
  onSelectChat,
}) => {
  const onClickHandler = useCallback(
    (id: string) => () => {
      onSelectChat?.(id);
    },
    [onSelectChat]
  );

  return (
    <>
      {chats.map(({ id, users }) => {
        const { avatar, nickname } =
          users.find((u) => u.id !== userId) ?? users[0];

        return (
          <Friend
            key={id}
            avatar={avatar}
            nickname={nickname}
            selected={selectedChat === id}
            onClick={onClickHandler(id)}
          ></Friend>
        );
      })}
    </>
  );
};

export default Chats;
