import Scrollspy from "react-scrollspy";
import Button from "./Button";

export default function Navlink() {
  const navLinkClass =
    "hover:border-b-2 mx-1 hover:px-1 hover:mx-0 text-center border-blue-500 transition-all duration-100 ease-in-out dark:text-white";

  return (
    <Scrollspy
      items={["about", "techstack", "project", "contact1"]}
      currentClassName="border-b-2 border-blue-500"
      className="space-x-8 font-semibold hidden sm:flex items-center"
    >
      <li>
        <a href="#about" className={navLinkClass}>
          About
        </a>
      </li>

      <li>
        <a href="#techstack" className={navLinkClass}>
          Tech Stack
        </a>
      </li>

      <li>
        <a href="#project" className={navLinkClass}>
          Project
        </a>
      </li>

      <li>
        <a href="#contact">
          <Button className="px-6 py-2">Contact</Button>
        </a>
      </li>
      {/* <li>
        <ButtonCircle handleClick={handleModeChange}>
          <span className="mx-auto">
            {mode === "light" ? <FaMoon /> : <FaSun />}
          </span>
        </ButtonCircle>
      </li> */}
    </Scrollspy>
  );
}
