import world from "../assets/world.svg";
import time from "../assets/time.svg";
import dollar from "../assets/dollar.svg";
import group from "../assets/group.svg";

const FeatureIcon = ({ icon, alt }) => (
  <div
    className="flex justify-center items-center mb-4"
    style={{
      borderRadius: "40px",
      background: "#E0EAFF",
      width: 44,
      height: 44,
      margin: "0 auto",
    }}
  >
    <img src={icon} alt={alt} style={{ width: 28, height: 28 }} />
  </div>
);



export default function WhyWeBuiltThis() {
  const features = [
    {
      title: "Transparent Pricing",
      description:
        "No hidden fees. See exactly what you'll pay before you commit to your purchase.",
      icon: group,
      alt: "Transparent Pricing Icon",
    },
    {
      title: "USA & UK Coverage",
      description:
        "Import from your favorite stores like Amazon, Walmart, ASOS, and eBay with confidence.",
      icon: world,
      alt: "USA & UK Coverage Icon",
    },
    {
      title: "All-Inclusive Rates",
      description:
        "Shipping, customs, duties, VAT, and local fees — all calculated in one place.",
      icon: dollar,
      alt: "All-Inclusive Rates Icon",
    },
    {
      title: "Instant Estimates",
      description:
        "Get your complete shipping cost calculation in seconds, not days.",
      icon: time,
      alt: "Instant Estimates Icon",
    },
  ];

  return (
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          Why We Built This
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <FeatureIcon icon={feature.icon} alt={feature.alt} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-3 sm:space-y-5 rounded-[12px] border border-[#EEE] bg-white p-4 sm:p-6 text-[#1F1F1F] font-roboto text-base sm:text-lg lg:text-[20px] font-normal leading-[1.4]">
          <p>
            After hearing countless stories of Barbadians getting hit with
            unexpected customs charges and confusing fee structures, we decided
            to create a simple solution. Ship Simple makes international
            shopping stress-free by showing you the complete landed cost
            upfront.
          </p>
          <p>
            Whether you're ordering electronics from Amazon, fashion from ASOS,
            or auto parts from eBay, you deserve to know the real total cost
            before clicking "buy."
          </p>
        </div>
      </div>
    </section>
  );
}
