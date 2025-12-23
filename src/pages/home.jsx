// src/layout/Footer.jsx

import ShippingHero from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import ShippingCalculator from "../components/shippingCalulator";
import { ShippingCTA } from "../components/shippingCTA";
import WhyWeBuiltThis from "../components/WeBuiltThis";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <ShippingHero />
      {/* We built this */}
      <WhyWeBuiltThis />
      {/* How it works */}
      <HowItWorks />
      {/* shipping cost */}
      <ShippingCTA />
      {/* caculator */}
      <ShippingCalculator />
      {/* footer */}
    </div>
  );
};

export default Home;
