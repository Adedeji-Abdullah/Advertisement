export default function SearchCategories() {
  return (
    <form
      action="#"
      className="mt-10 bg-on-primary flex flex-col gap-y-10 items-center w-full max-w-7/10 mx-auto"
    >
      <section className="flex gap-x-2">
        <span className="material-symbols-outlined">search</span>
        <input type="text" placeholder="What are you looking for?" />
      </section>
      <section className="flex gap-x-2">
        <span className="material-symbols-outlined">category</span>
        <select name="categories" id="">
          <option value="all-categories">All categories</option>
          <option value="marketing">Marketing</option>
          <option value="tech-services">Tech Services</option>
          <option value="real-estate">Real Estate</option>
          <option value="creative-design">Creative Design</option>
        </select>
      </section>
      <button type="submit">Search</button>
    </form>
  );
}
