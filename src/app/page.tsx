import { Form } from "@/components/Form/Form";
import UserList from "@/components/UserList/UserList";
import { Footer } from "@/components/Footer/Footer";
import GetUsers from "@/components/GetUsers/GetUsers";

export default async function Home() {
  return (
    <div className="grid grid-rows-[5px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full">
        <h1 className="uppercase text-4xl justify-items-center">Spefix</h1>
        <h2 className="uppercase text-2xl justify-items-center">user list</h2>
        <GetUsers />
        <UserList />
        <div className="flex gap-4 flex-col justify-center sm:flex-row w-3/4">
          <Form formTitle="Create new user" btnTitle="Add user" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
