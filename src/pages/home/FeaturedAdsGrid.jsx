import HardWareFleet from "../../assets/images/hardware_fleet.jpg";
import SaasAnalytics from "../../assets/images/saas_analytics.jpg";

export default function FeaturedAdsGrid() {
  return (
    <section className="group mx-4 my-6 grid overflow-hidden rounded-2xl bg-white">
      <img
        src={SaasAnalytics}
        alt="saas analytics image"
        className="w-full transition-transform duration-300 group-hover:scale-110"
      />
      <section className="flex justify-between p-4">
        <h3>Saas Analytics...</h3>
        <h3>$12,500</h3>
      </section>
    </section>
  );
}
