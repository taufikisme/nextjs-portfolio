import Container from "./Container";

export default function Navbar({ children }) {
  return (
    <div
      id="myNav"
      className="bg-white dark:bg-dark1 w-screen z-40 fixed transition-all"
    >
      <Container className="flex justify-between">{children}</Container>
    </div>
  );
}
