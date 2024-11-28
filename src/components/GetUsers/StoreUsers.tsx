"use client";
import { useAppStore } from "@/stores/app.store";
import { TUser } from "@/types";
import { useEffect } from "react";

export default function StoreUsers({ userList }: { userList: TUser[] }) {
  const { updateStore } = useAppStore((state) => state);

  useEffect(() => {
    updateStore(userList);
  }, [updateStore, userList]);

  return null;
}
