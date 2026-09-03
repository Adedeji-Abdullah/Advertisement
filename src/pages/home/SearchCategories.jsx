export default function SearchCategories() {
  return (
    <form
      action="#"
      className="bg-on-primary tablet:flex-row tablet:justify-between tablet:items-center tablet:max-w-7/10 lg:max-w-3xl mx-auto mt-10 flex w-full max-w-9/10 flex-col items-start gap-y-10 rounded-4xl px-2 py-3"
    >
      <section className="tablet:flex-row tablet:gap-7 flex flex-col gap-y-10 pl-7">
        <section className="flex gap-x-2">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            className="overflow-auto outline-0"
            placeholder="What are you looking for?"
          />
        </section>
        <section className="flex gap-x-2">
          <span className="material-symbols-outlined">category</span>
          <select name="categories" id="" className="cursor-pointer">
            <option value="all-categories">All categories</option>
            <option value="marketing">Marketing</option>
            <option value="tech-services">Tech Services</option>
            <option value="real-estate">Real Estate</option>
            <option value="creative-design">Creative Design</option>
          </select>
        </section>
      </section>
      <button
        type="submit"
        className="bg-primary text-surface hover:bg-primary-container tablet:max-w-3/10 tablet:ml-0 w-full cursor-pointer rounded-full px-2 py-3 text-sm font-bold transition-colors"
      >
        Search
      </button>
    </form>
  );
}
