"use client";
import { useAppStore } from "@/stores/app.store";

export default function UserList() {
  const { users } = useAppStore((state) => state);

  return (
    <ul className="list-inside text-sm text-center font-[family-name:var(--font-geist-mono)] w-full justify-items-center">
      {users.map(({ username, email }, index) => (
        <li key={index} className="mb-2 text-lg w-1/2">
          <div className="h-8">{username}</div>
          <div className="h-8">{email}</div>
          <hr className="w-3/5 m-auto my-4" />
        </li>
      ))}
    </ul>
  );
}
