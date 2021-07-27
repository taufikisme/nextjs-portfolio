export default function CardBody({ children, className }) {
  const addClassName = className ? `${className}` : "";
  return (
    <div className={`md:px-12 px-8 py-10 space-y-3 ${addClassName}`}>
      {children}
    </div>
  );
}
