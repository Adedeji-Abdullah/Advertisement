import clsx from "clsx";
import { MorphIcon } from "morphicons/react";
import { Menu, X } from "lucide";
import AppNavLink from "./AppNavLink";

export default function Sidebar({
  isSidebarOpen,
  closeSidebar,
  toggleSidebar,
}) {
  return (
    <section className="tablet:hidden">
      <span
        className={clsx(
          "tablet:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-300",
          isSidebarOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
        onClick={closeSidebar}
        aria-hidden="true"
      />
      <aside
        className={clsx(
          "bg-surface-lowest tablet:hidden fixed top-0 right-0 bottom-0 left-20 z-50 pt-30 shadow-2xl transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <section className="flex">
          {" "}
          <section className="flex gap-2">
            <span className="material-symbols-outlined text-primary text-4xl!">
              campaign
            </span>
            <h1 className="text-primary text-2xl">AdVanta</h1>
          </section>{" "}
          <button
            className="tablet:hidden cursor-pointer"
            onClick={toggleSidebar}
            aria-expanded={isSidebarOpen}
          >
            <MorphIcon
              icon={isSidebarOpen ? X : Menu}
              size={32}
              className="text-primary rounded-md p-1 transition-colors hover:bg-gray-200"
            />
          </button>
        </section>

        <nav className="flex flex-col gap-6">
          <div onClick={closeSidebar}>
            <AppNavLink to="/">Explore</AppNavLink>
          </div>
          <div onClick={closeSidebar}>
            <AppNavLink to="/browse">Browse</AppNavLink>
          </div>
          <div onClick={closeSidebar}>
            <AppNavLink to="/insights">Insights</AppNavLink>
          </div>
          <div onClick={closeSidebar}>
            <AppNavLink to="/account">Account</AppNavLink>
          </div>
        </nav>
      </aside>
    </section>
  );
}
