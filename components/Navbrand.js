import Link from "next/link";

export default function Navbrand({ img, name }) {
  return (
    <ul className="flex items-center space-x-3">
      <li>
        <Link href="/">
          <a>
            <img className="h-12 w-auto" src={img} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a id="brandName" className="font-bold text-2xl dark:text-white">
            {name}
          </a>
        </Link>
      </li>
    </ul>
  );
}
