import { NavLink } from "react-router-dom";

export default function AppNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `nav-link ${isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"}`
      }
    >
      {children}
    </NavLink>
  );
}
