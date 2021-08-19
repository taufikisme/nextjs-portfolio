import Button from "./Button";
import Link from "next/link";

export default function NavlinkBlog() {
  const navLinkClass =
    "hover:border-b-2 mx-1 hover:px-1 hover:mx-0 text-center border-blue-500 transition-all duration-100 ease-in-out dark:text-white";
  return (
    <ul className="space-x-8 font-semibold hidden sm:flex items-center">
      <li>
        <Link href="/">
          <a className={navLinkClass}>Home</a>
        </Link>
      </li>

      <li>
        <Link href="/blog">
          <a className={navLinkClass}>Blog</a>
        </Link>
      </li>

      <li>
        <a href="#contact">
          <Button className="px-6 py-2">Contact</Button>
        </a>
      </li>
    </ul>
  );
}
