export default function Container({ className, children }) {
  const addClassName = className ? `${className}` : "";

  return (
    <div
      className={`container mx-auto px-5 py-4 md:px-48 md:py-4 ${addClassName}`}
    >
      {children}
    </div>
  );
}
