export default function CardPill({ children, link, className }) {
  const addClassName = className ? `${className}` : "";

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className={`border hover:scale-105 active:scale-100 transition-all ease-in-out flex items-center md:px-8 px-6 py-5 font-bold md:text-2xl text-xl rounded-xl dark:text-white ${addClassName}`}
      >
        {children}
      </div>
    </a>
  );
}
