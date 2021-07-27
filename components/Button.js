export default function Button({ className, children, variant }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "with-icon": "px-6 py-2 inline-flex items-center",
    glow: "px-8 py-4 text-2xl shadow-green",
  };

  const pickedVariant = variant ? `${variants[variant]}` : "";

  return (
    <button
      className={`bg-gradient-to-r from-green-400 via-blue-500 to-green-400 rounded-full bg-size-200 bg-pos-100 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:scale-95 active:shadow-none active:bg-pos-0 transition-all duration-200 ease-in-out text-white font-semibold ${pickedVariant} ${addClassName}`}
    >
      {children}
    </button>
  );
}
