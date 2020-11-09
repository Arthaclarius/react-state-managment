import { useCallback } from "react";
import React from "react";

export default function useSelectChatCallback(
  setSelectedChat: React.Dispatch<React.SetStateAction<string | undefined>>
) {
  return useCallback(
    (id: string) => {
      setSelectedChat(id);
    },
    [setSelectedChat]
  );
}
