export default function BGRound({ children }) {
  return (
    <div className="bg-white dark:bg-dark1 md:rounded-extra rounded-4xl md:rounded-b-none rounded-b-none md:mt-20 mt-10">
      {children}
    </div>
  );
}
