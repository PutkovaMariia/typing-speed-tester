import { content } from "@/const/contentTyped";

export default function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto text-center pt-3 lg:pt-10">
      <h1
        className="font-dancingScript text-5xl lg:text-7xl font-extrabold tracking-tight
                     text-transparent bg-clip-text bg-gradient-to-r
                     from-sky-300 via-blue-500 to-indigo-900 leading-normal"
      >
          {content.title}
      </h1>

      <p className="font-playfairDisplay mt-2 text-sm lg:text-base text-slate-600">
          {content.subtitle}
      </p>
    </header>
  );
}
