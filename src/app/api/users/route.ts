import { TUser } from "@/types";

const users: TUser[] = [
  { username: "user 1", email: "username1@mail.com" },
  { username: "user 2", email: "username2@mail.com" },
];

export const GET = async () => {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
  return Response.json(result);
};

export const POST = async (request: Request) => {
  const userData = await request.json();

  await new Promise((resolve) => {
    setTimeout(() => {
      users.push(userData);
      resolve(201);
    }, 1000);
  });

  return Response.json(201);
};
