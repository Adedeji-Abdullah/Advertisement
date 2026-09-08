import SidebarMenu from "./SidebarMenu";

export default function Sidebar({
  isSidebarOpen,
  closeSidebar,
  toggleSidebar,
}) {
  return (
    <section className="tablet:hidden">
      <SidebarMenu
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        toggleSidebar={toggleSidebar}
      />
    </section>
  );
}
