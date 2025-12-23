import { ArrowRight } from "lucide-react"

export function ShippingCTA() {
  return (
    <section className="bg-blue-600 py-8 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl lg:text-[24px] font-inter font-medium text-white leading-normal mb-4">Ready to know your shipping cost?</h2>
        <p className="text-base sm:text-lg lg:text-[20px] font-inter font-medium text-white leading-normal mb-6 sm:mb-8">
          Get an instant, transparent estimate with all fees included. No surprises, no hidden charges.
        </p>
        <button className="flex w-full sm:w-[365px] px-4 py-3 sm:px-6 sm:py-4 justify-center items-center gap-3 rounded-[8px] bg-white text-[#2563EB] font-inter font-medium mx-auto text-lg sm:text-xl lg:text-2xl">
          Calculating My Shipping
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 pt-1" />
        </button>
      </div>
    </section>
  )
}
