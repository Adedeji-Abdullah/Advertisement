import { NavLink } from "react-router-dom";
import ProfileDP from "../../assets/profile-dp.jpg";

export default function SidebarAccount() {
  return (
    <section className="absolute bottom-0 flex flex-col items-center justify-center gap-4 border-t border-t-gray-300 py-10">
      <section className="bg-inverse-on-surface flex gap-3 rounded-2xl px-5 py-3 font-semibold">
        <img
          src={ProfileDP}
          alt="profile picture"
          className="w-12 rounded-full"
        />
        <div>
          <p>Alex Morgan</p>
          <a href="mailto:alex@advantamarket.com" className="text-gray-600">
            alex@advantamarket.com
          </a>
        </div>
      </section>
      <NavLink
        to="/"
        className="bg-primary text-surface hover:bg-primary-container mx-auto w-full rounded-2xl px-2 py-3 text-center text-base font-bold transition-colors"
      >
        Post an Ad
      </NavLink>
      <NavLink
        to="/"
        className="flex w-full items-center justify-center rounded-2xl border border-gray-400 px-2 py-3 transition-colors hover:bg-gray-100"
      >
        <span className="material-symbols-outlined">logout</span>Log Out
      </NavLink>
    </section>
  );
}
