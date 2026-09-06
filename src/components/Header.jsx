import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MorphIcon } from "morphicons/react";
import { Menu, X } from "lucide";
import clsx from "clsx";
import AppNavLink from "./AppNavLink";
import Button from "./Button";
import ProfileDP from "../assets/profile-dp.jpg";

function Header() {
  const { pathname } = useLocation();
  const [navVisibility, setNavVisibility] = useState(false);

  const toggleNavVisibilty = () => {
    setNavVisibility(!navVisibility);
  };

  return (
    <header className="bg-surface-lowest fixed right-0 left-0 flex items-center justify-between px-10 py-3">
      <AppNavLink to="/">
        <section className="flex gap-2">
          <span className="material-symbols-outlined text-primary">
            campaign
          </span>
          <h1 className="text-primary text-lg">AdVanta</h1>
        </section>
      </AppNavLink>
      <nav
        className={clsx(
          "tablet:flex hidden gap-8",
          pathname === "/" ? "mx-auto" : "ml-50",
        )}
      >
        <ul className="flex items-center gap-5">
          <li>
            <AppNavLink to="/">Explore</AppNavLink>
          </li>
          <li>
            <AppNavLink to="/browse">Browse</AppNavLink>
          </li>
          <li>
            <AppNavLink to="/insights">Insights</AppNavLink>
          </li>
          <li className={clsx(pathname === "/" ? "visible" : "hidden")}>
            <Button>Post an Ad</Button>
          </li>
        </ul>
      </nav>
      <img
        src={ProfileDP}
        className="w-12 cursor-pointer rounded-full max-sm:hidden"
        alt="profile"
      />
      <button
        className="tablet:hidden cursor-pointer"
        onClick={toggleNavVisibilty}
        aria-expanded={navVisibility}
      >
        <MorphIcon
          icon={navVisibility ? X : Menu}
          size={30}
          className="text-primary rounded-md p-1 transition-colors hover:bg-gray-200"
        />
      </button>
    </header>
  );
}

export default Header;
