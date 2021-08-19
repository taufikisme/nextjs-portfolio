export default function Card({ children, className, variant }) {
  const addClassName = className ? `${className}` : "";

  const variants = {
    slider:
      "bg-blue-circle bg-no-repeat md:bg-pos-110-200 bg-pos-140-200 md:h-64 h-72 md:mx-10 mx-5 md:px-16 px-8 py-10 space-y-4",
    project: "shadow-xl",
    blog: "bg-blue-circle bg-no-repeat md:bg-pos-110-200 bg-pos-140-200 md:h-64 mb-10 shadow-md",
    loading: "md:h-64 mb-10 shadow-md",
  };

  const pickedVariant = variants[variant];

  return (
    <div
      className={`bg-white dark:bg-dark1 dark:text-white mx-auto rounded-3xl overflow-hidden ${pickedVariant} ${addClassName}`}
    >
      {children}
    </div>
  );
}
