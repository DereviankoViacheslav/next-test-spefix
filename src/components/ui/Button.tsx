import Image from "next/image";

export function Button({
  type,
  children,
}: Readonly<{
  type: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
}>) {
  return (
    <button
      type={type}
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full"
    >
      <Image
        className="dark:invert"
        src="/plus.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      {children}
    </button>
  );
}
