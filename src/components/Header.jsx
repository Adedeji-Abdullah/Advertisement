import ProfileDP from "../assets/profile-dp.jpg";

function Header() {
  return (
    <header className="flex justify-between items-center p-1 fixed left-0 right-0 bg-surface-lowest">
      <div className="flex gap-2">
        <span class="material-symbols-outlined text-primary">campaign</span>
        <h1 className="text-lg text-primary">AdVanta</h1>
      </div>
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
