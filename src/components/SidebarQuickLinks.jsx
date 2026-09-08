import { NavLink } from "react-router-dom";
export default function SidebarQuickLinks() {
  return (
    <section className="pt-7">
      <p className="font-hanken text-outline text-md pb-3">Quick Links</p>
      <nav>
        <ul className="flex flex-col gap-3">
          <li>
            <NavLink
              to="/"
              className="hover:text-primary text-base transition-colors"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="hover:text-primary text-base transition-colors"
            >
              Help Center
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="hover:text-primary text-base transition-colors"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="hover:text-primary text-base transition-colors"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
