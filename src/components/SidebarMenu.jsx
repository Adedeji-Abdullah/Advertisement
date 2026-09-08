import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { MorphIcon } from "morphicons/react";
import { Menu, X } from "lucide";
import SidebarQuickLinks from "./SidebarQuickLinks";
import AppNavLink from "./AppNavLink";
export default function SidebarMenu({
  isSidebarOpen,
  closeSidebar,
  toggleSidebar,
}) {
  const { pathname } = useLocation();
  const sidebarLinks = [
    {
      id: 1,
      location: "/",
      title: "Explore",
      icon: "explore",
    },
    {
      id: 2,
      location: "/browse",
      title: "Browse",
      icon: "search",
    },
    {
      id: 3,
      location: "/insights",
      title: "Insights",
      icon: "insights",
    },
    {
      id: 4,
      location: "/account",
      title: "Account",
      icon: "person",
    },
  ];

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
          "bg-surface-lowest tablet:hidden fixed top-0 right-0 bottom-0 left-20 z-50 px-8 pt-8 shadow-2xl transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <section className="flex items-center justify-between pb-8">
          {" "}
          <section className="flex items-center gap-2">
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

        <nav className="flex flex-col gap-2 border-y border-y-gray-300 py-4">
          <p className="font-hanken text-outline text-sm uppercase">menu</p>
          {sidebarLinks.map((sidebarLink) => {
            return (
              <section onClick={closeSidebar} key={sidebarLink.id}>
                <AppNavLink to={sidebarLink.location}>
                  <span
                    className={clsx(
                      "hover:bg-surface-dim active:bg-surface-dim flex items-center gap-2 rounded-lg px-3 py-2 transition-colors",
                      pathname === sidebarLink.location
                        ? "bg-surface-dim"
                        : "bg-transparent",
                    )}
                  >
                    <span className="material-symbols-outlined">
                      {sidebarLink.icon}
                    </span>
                    {sidebarLink.title}
                  </span>
                </AppNavLink>
              </section>
            );
          })}
        </nav>
        <SidebarQuickLinks />
      </aside>
    </section>
  );
}
