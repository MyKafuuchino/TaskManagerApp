import { useEffect, useState } from "react";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav
      className={`sticky top-0 p-4 ${
        scrollPosition === 0 ? "" : "bg-opacity-50 backdrop-blur-xl"
      }`}
    >
      <h1 className="text-xl font-bold text-center">Task Manager App</h1>
    </nav>
  );
}

export default Navbar;
