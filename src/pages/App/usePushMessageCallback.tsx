import { useCallback } from "react";
import faker from "faker";
import { IChat, IUser } from "~types";
import React from "react";

export default function usePushMessageCallback(
  user: IUser | undefined,
  currentChat: IChat | undefined,
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>
) {
  return useCallback(
    (newMessage: string): void => {
      if (!user || !currentChat) return;

      user.chats
        ?.find((x) => x.id === currentChat.id)
        ?.messages.push({
          id: faker.random.uuid(),
          text: newMessage,
          date: new Date().valueOf(),
          user: { ...user, friends: undefined, chats: undefined },
        });

      setUser({
        ...user,
        chats: user.chats && [...user.chats],
      });
    },
    [user, currentChat]
  );
}
