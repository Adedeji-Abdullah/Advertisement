export default function PopularCategories() {
  return (
    <section className="bg-surface-lowest mt-10 flex items-end justify-between px-7 py-8">
      <section>
        <h3>Popular Categories</h3>
        <p className="font-geist text-sm text-gray-500">
          Explore curated listings by industry
        </p>
      </section>
      <a
        href="/browse"
        className="text-primary flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2"
      >
        View All
        <span className="material-symbols-outlined text-primary">
          arrow_forward
        </span>
      </a>
    </section>
  );
}
