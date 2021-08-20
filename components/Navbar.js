import Container from "./Container";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

export default function Navbar({ children, className }) {
  const addClassName = className ? `${className}` : "";

  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const mynavbar = document.getElementById("myNav");
    if (scrollY > 20) {
      mynavbar.classList.add("shadow-md");
    } else {
      mynavbar.classList.remove("shadow-md");
    }

    let h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";

    let percent =
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

    setProgress(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="myNav"
      className={`bg-white dark:bg-dark1 w-screen z-40 fixed transition-all ${addClassName}`}
    >
      <Fade top>
        <Container className="flex justify-between">{children}</Container>
      </Fade>
    </div>
  );
}
