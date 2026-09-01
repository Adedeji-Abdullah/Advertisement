export default function CategoriesGrid() {
  const categoriesGrid = [
    {
      id: 1,
      icon: "rocket_launch",
      title: "Startups",
      color: "on-primary-container",
    },
    {
      id: 2,
      icon: "code",
      title: "Tech",
      color: "secondary-container",
    },
    {
      id: 3,
      icon: "palette",
      title: "Creative",
      color: "on-tertiary-container",
    },
    {
      id: 4,
      icon: "trending_up",
      title: "Growth",
      color: "on-primary-container",
    },
    {
      id: 5,
      icon: "real_estate_agent",
      title: "Property",
      color: "secondary-container",
    },
    {
      id: 6,
      icon: "rocket_launch",
      title: "Startups",
      color: "on-primary-container",
    },
  ];
  return (
    <section className="my-3.5 px-2.5">
      <section className="bg-on-primary flex size-32 w-full max-w-2/5 flex-col justify-center text-center">
        <span className="material-symbols-outlined">rocket_launch</span>
        <h3>Startups</h3>
      </section>
    </section>
  );
}
