export default function Footer({ children, className }) {
  const addClassName = className ? `${className}` : "";
  return (
    <div
      className={`h-full shadow-lg py-4 bg-white dark:bg-dark1 dark:text-white text-center ${addClassName}`}
    >
      {children}
    </div>
  );
}
