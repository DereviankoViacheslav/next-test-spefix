"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { FormField, TFormField } from "@/components/FormField/FormField";
import { Button } from "../ui/Button";
import { TUser } from "@/types";
import { addUser } from "@/actions/users";
import { useAppStore } from "@/stores/app.store";

const formFields: TFormField[] = [
  {
    name: "username",
    type: "text",
    label: "Name",
    placeholder: "User name",
    min: 2,
    max: 16,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "username@mail.com",
  },
];

export function Form({
  formTitle,
  btnTitle,
}: {
  formTitle: string;
  btnTitle: string;
}) {
  const { updateStore } = useAppStore((state) => state);
  const [userData, setUserData] = useState<TUser>({
    username: "",
    email: "",
  });

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateStore([userData]);
    addUser(userData);
    setUserData({ username: "", email: "" });
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form onSubmit={submit}>
      <h2 className="mb-6 font-bold text-3xl">{formTitle}</h2>
      {formFields.map(({ name, type, label, placeholder, min, max }) => {
        return (
          <FormField
            key={name}
            type={type}
            name={name}
            value={userData[name]}
            label={label || ""}
            placeholder={placeholder || ""}
            min={min}
            max={max}
            onChange={onChange}
          />
        );
      })}
      <Button type="submit">{btnTitle}</Button>
    </form>
  );
}
