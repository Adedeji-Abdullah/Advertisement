import AppNavLink from "./AppNavLink";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import ProfileDP from "../assets/profile-dp.jpg";

function Header() {
  const { pathname } = useLocation();

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
        width={512}
        height={512}
        className="w-12 rounded-full"
        alt="profile"
      />
    </header>
  );
}

export default Header;
