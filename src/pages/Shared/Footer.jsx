import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2563EB] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10 mb-8">
          {/* Branding */}
          <div className="w-full lg:w-2/3 space-y-4 lg:space-y-5">
            <h2 className="justify-start text-white text-2xl sm:text-3xl lg:text-4xl font-medium">
              ship-simple.com
            </h2>
            <p className="justify-start text-white text-lg sm:text-xl lg:text-2xl font-medium">
              Trusted shipping from USA & UK to Barbados
            </p>
            <div className="justify-start text-white text-base sm:text-lg lg:text-xl font-medium">
              Get transparent, all-in pricing for your international shipments.
              No hidden fees, no surprises
            </div>
          </div>

          {/* Contact */}
          <div className="w-full lg:w-1/3 space-y-4 lg:space-y-5">
            <h3 className="justify-start text-white text-xl sm:text-2xl font-semibold">
              Contact Us
            </h3>
            <div className="flex items-center md:justify-start gap-2">
              <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
              <a
                href="mailto:hello@ship-simple.com"
                className="text-white text-lg sm:text-xl lg:text-2xl font-medium"
              >
                hello@ship-simple.com
              </a>
            </div>
            <div className="flex items-center md:justify-start gap-2">
              <Phone className="w-5 h-5 lg:w-5 lg:h-5" />
              <a
                href="tel:+12461234567"
                className="text-white text-lg sm:text-xl lg:text-2xl font-medium"
              >
                +1 (246) 123-4567
              </a>
            </div>
            <div className="space-y-3"></div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-100 pt-6">
          <p className="text-white text-sm sm:text-base font-inter font-normal mb-1">
            <span className="text-white text-sm sm:text-base font-inter font-semibold mb-1">
              Important Disclaimer:
            </span>{" "}
            Ship Simple is launching soon. All calculations are estimates based
            on current Barbados customs regulations and international shipping
            rates.
          </p>
          <p className="text-white text-sm sm:text-base font-inter font-normal mb-4">
            Actual costs may vary based on customs assessment, carrier rates,
            and other factors. This calculator is for informational purposes
            only and does not constitute a binding quote.
          </p>
          <p className="text-white text-sm sm:text-base font-inter font-semibold text-center">
            © 2025 ship-simple.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
