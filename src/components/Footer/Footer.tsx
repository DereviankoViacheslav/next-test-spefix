import Image from "next/image";

export function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/DereviankoViacheslav"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        My GitHub
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/DereviankoViacheslav/resume/blob/main/Full-stack_Developer.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        My CV on GitHub
      </a>
    </footer>
  );
}
