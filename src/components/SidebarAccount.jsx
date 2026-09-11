import ProfileDP from "../assets/profile-dp.jpg";

export default function SidebarAccount() {
  return (
    <section className="absolute bottom-0 flex flex-col items-center justify-center gap-4 border-t border-t-gray-300 pt-10">
      <section className="flex">
        <img
          src={ProfileDP}
          alt="profile picture"
          className="w-12 rounded-full"
        />
        <div>
          <p>Alex Morgan</p>
          <a href="mailto:alex@advantamarket.com">alex@advantamarket.com</a>
        </div>
      </section>
      <button>Post an Ad</button>
      <button className="flex items-center">
        <span class="material-symbols-outlined">logout</span>Log Out
      </button>
    </section>
  );
}
