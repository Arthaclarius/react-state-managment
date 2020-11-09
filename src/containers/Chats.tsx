import React, { FC, useCallback } from "react";
import Friend from "~components/Friend";
import { IChat } from "~types";

interface IChatsProps {
  userId: string;
  chats: IChat[];
  selectedChat?: string;
  onSelectedChat?: (id: string) => any;
}
const Chats: FC<IChatsProps> = ({
  userId,
  chats,
  selectedChat,
  onSelectedChat,
}) => {
  const onClickHandler = useCallback(
    (id: string) => () => {
      onSelectedChat?.(id);
    },
    [onSelectedChat]
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
