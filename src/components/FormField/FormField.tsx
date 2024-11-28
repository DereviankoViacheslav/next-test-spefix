import { ChangeEvent } from "react";

export type TFormField = {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  min?: number;
  max?: number;
};

export function FormField({
  name,
  type,
  value = "",
  onChange,
  placeholder,
  label,
  min,
  max,
}: TFormField & {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <label className="flex mb-6 text-base flex-col">
        <span className="mb-2">{label}</span>
        <input
          onChange={onChange}
          value={value}
          name={name}
          type={type}
          min={min}
          max={max}
          className={`py-4 px-6 border rounded bg-transparent ${type === "checkbox" ? "h-4 mr-2" : "h-12"}`}
          placeholder={placeholder}
          required
        />
      </label>
    </>
  );
}
