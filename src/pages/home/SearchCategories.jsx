export default function SearchCategories() {
  return (
    <form
      action="#"
      className="mt-10 bg-on-primary rounded-4xl flex flex-col gap-y-10 items-start w-full max-w-9/10 mx-auto py-3 px-2"
    >
      <section className="pl-7 flex flex-col gap-y-10">
        <section className="flex gap-x-2">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            className="outline-0"
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
        className="bg-primary text-surface w-full rounded-full px-2 py-3 cursor-pointer text-sm font-bold hover:bg-primary-container transition-colors"
      >
        Search
      </button>
    </form>
  );
}
