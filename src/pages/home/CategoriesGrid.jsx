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
      icon: "grid_view",
      title: "Other",
      color: "on-primary-container",
    },
  ];

  return (
    <section className="my-3.5 grid grid-cols-2 gap-y-3 px-3">
      {categoriesGrid.map((category) => {
        return (
          <section
            key={category.id}
            className="bg-on-primary mx-auto flex size-32 w-full max-w-9/10 cursor-pointer flex-col justify-center rounded-2xl text-center transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            <span className="material-symbols-outlined">{category.icon}</span>
            <p>{category.title}</p>
          </section>
        );
      })}
    </section>
  );
}
