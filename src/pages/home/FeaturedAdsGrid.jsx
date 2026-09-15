import HardWareFleet from "../../assets/images/hardware_fleet.jpg";
import HardWareFleetProfile from "../../assets/images/hardware_fleet_profile.jpg";
import SaasAnalytics from "../../assets/images/saas_analytics.jpg";
import SaasProfile from "../../assets/images/saas_profile.jpg";
import LuxuryLoft from "../../assets/images/luxury_loft.jpg";
import LuxuryLoftProfile from "../../assets/images/luxury_loft_profile.jpg";
import clsx from "clsx";

export default function FeaturedAdsGrid() {
  const adgrids = [
    {
      id: 1,
      tier: "Pro Account",
      image: SaasAnalytics,
      title: "Saas Analytics",
      price: "12,500",
      text: "Complete enterprise-grade analytics suite with established user base and monthly recurring revenue.",
      profile: SaasProfile,
      name: "Nexus Systems",
      rating: 4.5,
    },
    {
      id: 2,
      tier: "New Listing",
      image: LuxuryLoft,
      title: "Luxury Loft",
      price: "20,500",
      text: "Exclusive high-rise residential property in the heart of the business district with panoramic views.",
      profile: LuxuryLoftProfile,
      name: "Skyline Realty",
      rating: 5.0,
    },
    {
      id: 3,
      tier: "Certified",
      image: HardWareFleet,
      title: "Hardware Fleet",
      price: "45,000",
      text: "Complete set of workstation grade hardware for design teams, including warranties and support.",
      profile: HardWareFleetProfile,
      name: "Core Distribution",
      rating: 4.8,
    },
  ];

  return (
    <section className="tablet:grid-cols-2 grid lg:grid-cols-3">
      {adgrids.map((adgrid) => {
        return (
          <section
            className="group relative mx-4 my-6 overflow-hidden rounded-2xl bg-white pb-5"
            key={adgrid.id}
          >
            <h3 className="bg-primary-container absolute top-2 left-2 z-10 rounded-xl px-2 py-0.5 text-lg text-white">
              {adgrid.tier}{" "}
            </h3>
            <span className="material-symbols-outlined text-primary-container hover:bg-primary-container absolute top-2 right-2 z-10 cursor-pointer rounded-full bg-gray-200 p-1.5 transition-colors hover:text-gray-200">
              favorite
            </span>

            <img
              src={adgrid.image}
              className="w-full transition-transform duration-300 group-hover:scale-105"
            />
            <section className="px-5">
              <section className="flex justify-between py-4">
                <h3 className="line-clamp-1">{adgrid.title}</h3>
                <h3 className="text-primary-container">{`$${adgrid.price}`}</h3>
              </section>
              <article className="line-clamp-2 text-lg">{adgrid.text}</article>
              <section className="mt-7 flex justify-between border-t border-t-gray-300 pt-4">
                <div className="flex items-center gap-1">
                  <img
                    src={adgrid.profile}
                    alt="saas profile"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <p className="font-semibold">{adgrid.name}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined">star</span>
                  <p>{adgrid.rating}</p>
                </div>
              </section>
            </section>
          </section>
        );
      })}
    </section>
  );
}
