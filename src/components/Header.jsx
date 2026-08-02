import AppNavLink from "./AppNavLink";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import ProfileDP from "../assets/profile-dp.jpg";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="flex justify-between items-center p-1 fixed left-0 right-0 bg-surface-lowest">
      <section className="flex gap-2">
        <span className="material-symbols-outlined text-primary">campaign</span>
        <h1 className="text-lg text-primary">AdVanta</h1>
      </section>
      <nav
        className={clsx("flex gap-8", pathname === "/" ? "mx-auto" : "ml-32")}
      >
        <ul className="flex gap-3.5 items-center">
          <li>
            <AppNavLink to="/">Explore</AppNavLink>
          </li>
          <li>
            <AppNavLink to="/browse">Browse</AppNavLink>
          </li>
          <li>
            <AppNavLink to="/insights">Insights</AppNavLink>
          </li>
          <li>
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
