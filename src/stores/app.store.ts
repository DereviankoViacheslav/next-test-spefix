import { TUser } from "@/types";
import { create } from "zustand";

type State = {
  users: TUser[];

  updateStore: (data: TUser[]) => void;
};

export const useAppStore = create<State>((set, get) => ({
  users: [],

  updateStore: (data) => {
    const users = get().users;
    users.push(...data);

    set({ users });
  },
}));
