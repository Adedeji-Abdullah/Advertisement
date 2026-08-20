import Headline from "./Headline";
import PopularCategories from "./PopularCategories";
import SearchCategories from "./SearchCategories";

function Home() {
  return (
    <main className="pt-30">
      <Headline />
      <SearchCategories />
      <PopularCategories />
    </main>
  );
}

export default Home;
