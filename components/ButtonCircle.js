export default function ButtonCircle({ children, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="w-12 h-12 flex items-center rounded-full bg-light2 dark:bg-dark2 dark:text-white text-2xl hover:scale-110 transition-all ease-in-out active:scale-100"
    >
      {children}
    </button>
  );
}
