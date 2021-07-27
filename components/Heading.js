export default function Heading({ children }) {
  return (
    <h2 className="md:text-5xl text-4xl mx-auto font-bold text-gray-800 dark:text-white">
      {children}
    </h2>
  );
}
