import { getUsers } from "@/actions/users";
import StoreUsers from "./StoreUsers";

export default async function GetUsers() {
  const userList = await getUsers();

  return <StoreUsers userList={userList} />;
}
