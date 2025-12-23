import { Package, BarChart3, Tag } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Package,
      title: "Fill in package & item details",
      description: "Enter your package dimensions, weight, and item information",
    },
    {
      icon: BarChart3,
      title: 'Click "Get total cost"',
      description: "Our system calculates all fees instantly",
    },
    {
      icon: Tag,
      title: "See final landed price instantly",
      description: "Get a complete breakdown including duties, VAT, and all fees",
    },
  ]

  return (
    <section id="how-it-works" className="py-8 sm:py-12 lg:py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-poppins font-medium text-black leading-normal mb-4">How it works</h2>
          <p className="text-base sm:text-lg lg:text-[20px] font-poppins font-normal text-black leading-relaxed lg:leading-[26px] text-center">Get your complete shipping estimate in three simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Dotted lines connecting steps (hidden on mobile) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5">
            <svg className="w-full h-full" style={{ height: "2px" }} preserveAspectRatio="none">
              <line x1="20%" y1="1" x2="45%" y2="1" stroke="#CBD5E0" strokeWidth="2" strokeDasharray="8,8" />
              <line x1="55%" y1="1" x2="80%" y2="1" stroke="#CBD5E0" strokeWidth="2" strokeDasharray="8,8" />
            </svg>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center relative flex flex-col items-center">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-[24px] font-roboto font-medium text-black leading-tight lg:leading-[33.6px] mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-base lg:text-[18px] font-poppins font-normal text-black leading-normal lg:leading-[23.4px] text-center max-w-xs md:max-w-none">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
