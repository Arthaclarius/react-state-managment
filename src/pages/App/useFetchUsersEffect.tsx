import React, { useEffect } from "react";
import { IUser } from "~types";
import { getUserQuery } from "~queries/getUserQuery";

export default function useFetchUsersEffect(
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>
) {
  useEffect(() => {
    async function fetchUser() {
      const newUser = await getUserQuery();
      console.log("fetchUser -> newUser", newUser);
      setUser(newUser);
    }

    fetchUser();
    return () => setUser(undefined);
  }, []);
}
