import HardWareFleet from "../../assets/images/hardware_fleet.jpg";
import SaasAnalytics from "../../assets/images/saas_analytics.jpg";
import SaasProfile from "../../assets/images/saas_profile.jpg";

export default function FeaturedAdsGrid() {
  return (
    <section className="group relative mx-4 my-6 grid overflow-hidden rounded-2xl bg-white pb-5">
      <h3 className="bg-primary-container absolute top-2 left-2 z-10 rounded-xl px-2 py-0.5 text-lg text-white">
        Pro Account
      </h3>
      <span className="material-symbols-outlined text-primary-container hover:bg-primary-container absolute top-2 right-2 z-10 cursor-pointer rounded-full bg-gray-200 p-1.5 transition-colors hover:text-gray-200">
        favorite
      </span>

      <img
        src={SaasAnalytics}
        alt="saas analytics image"
        className="w-full transition-transform duration-300 group-hover:scale-105"
      />
      <section className="px-5">
        <section className="flex justify-between py-4">
          <h3 className="line-clamp-1">Saas Analytics</h3>
          <h3 className="text-primary-container">$12,500</h3>
        </section>
        <article className="line-clamp-2 text-lg">
          Complete enterprise-grade analytics suite with established user base
          and monthly recurring revenue.
        </article>
        <section className="mt-7 flex justify-between border-t border-t-gray-300 pt-4">
          <div className="flex items-center gap-1">
            <img src={SaasProfile} alt="saas profile" width={40} />
            <p className="font-semibold">Nexus Systems</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined">star</span>
            <p>4.5</p>
          </div>
        </section>
      </section>
    </section>
  );
}
