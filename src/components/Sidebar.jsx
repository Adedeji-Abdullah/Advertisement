import SidebarMenu from "./SidebarMenu";

export default function Sidebar({
  isSidebarOpen,
  closeSidebar,
  toggleSidebar,
}) {
  return (
    <SidebarMenu
      isSidebarOpen={isSidebarOpen}
      closeSidebar={closeSidebar}
      toggleSidebar={toggleSidebar}
    />
  );
}
