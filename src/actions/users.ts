"use server";
import { TUser } from "@/types";

const revalidate = 60;

export const getUsers = async (): Promise<TUser[]> => {
  const path = `${process.env.API_BASE_PATH}/api/users`;
  const res = await fetch(path, { next: { revalidate } });

  if (!res.ok) {
    return [];
  }

  const data: TUser[] = await res.json();

  return data;
};

export const addUser = async (userData: TUser): Promise<Error | 201> => {
  const path = `${process.env.API_BASE_PATH}/api/users}`;
  try {
    await fetch(path, {
      method: "POST",
      body: JSON.stringify(userData),
    });

    return 201;
  } catch (error) {
    return new Error(`Ошибка при регистрации на квест: ${error}`);
  }
};
