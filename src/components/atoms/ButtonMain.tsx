interface ButtonMainProps {
  action: () => void;
  text: string;
}
export default function ButtonMain({ action, text }: ButtonMainProps) {
  return (
    <button
      onClick={action}
      className="group cursor-pointer font-semibold overflow-hidden relative z-100 border border-gray-300 group px-8 py-2 rounded-2xl shadow-xl"
    >
      <span className="pointer-events-none w-full relative z-10 text-blue-500 group-hover:text-white text-xl duration-500">
        {text}
      </span>
      <span className="pointer-events-none absolute w-full h-full rounded-2xl bg-blue-500 -left-27 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
      <span className="pointer-events-none absolute w-full h-full rounded-2xl bg-blue-500 -right-27 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
    </button>
  );
}
