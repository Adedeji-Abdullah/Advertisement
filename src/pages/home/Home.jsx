import Headline from "./Headline";
import SearchCategories from "./SearchCategories";
import PopularCategories from "./PopularCategories";
import FeaturedAds from "./FeaturedAds";

function Home() {
  return (
    <main className="pt-30">
      <Headline />
      <SearchCategories />
      <PopularCategories />
      <FeaturedAds />
    </main>
  );
}

export default Home;
