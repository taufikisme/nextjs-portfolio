export default function CardHeader({ children, className }) {
  const addClassName = className ? `${className}` : "";

  return (
    <h2
      className={`font-bold md:text-3xl text-2xl text-blue-500 ${addClassName}`}
    >
      {children}
    </h2>
  );
}
