<template>
  <section
    id="services"
    class="py-28 bg-white"
  >
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-blue-700">
          Our Services
        </h2>
        <p class="text-gray-500 mt-3 text-lg">
          High-value trading & strategic advisory solutions designed to accelerate business performance.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- WHOLESALE TRADING -->
        <div
          class="bg-white p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-300" />

          <div class="mb-6">
            <div
              class="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner border border-blue-100"
            >
              <UIcon
                name="ph:globe-duotone"
                class="w-10 h-10 text-blue-600"
              />
            </div>
          </div>

          <h3 class="text-2xl font-semibold text-blue-700 mb-4">
            Wholesale Trading (Fee / Contract Basis)
          </h3>

          <p class="text-gray-600 leading-relaxed mb-6">
            Professional representation to connect clients with global partners.
          </p>

          <ul class="text-gray-700 space-y-3">
            <li>• Brokerage & intermediary services</li>
            <li>• Cross-border trading representation</li>
            <li>• Product sourcing & supplier coordination</li>
            <li>• Commodities, machinery & raw material trading</li>
            <li>• Remote trading operations</li>
            <li>• Joint purchasing & selling coordination</li>
          </ul>
        </div>

        <!-- MANAGEMENT CONSULTING -->
        <div
          class="bg-white p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-300" />

          <div class="mb-6">
            <div
              class="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner border border-blue-100"
            >
              <UIcon
                name="mdi:chart-line"
                class="w-10 h-10 text-blue-600"
              />
            </div>
          </div>

          <h3 class="text-2xl font-semibold text-blue-700 mb-4">
            Management Consulting & Strategic Advisory
          </h3>

          <p class="text-gray-600 leading-relaxed mb-6">
            Tailored consulting designed for measurable operational improvement.
          </p>

          <ul class="text-gray-700 space-y-3">
            <li>• Business strategy & organizational planning</li>
            <li>• Operational efficiency optimization</li>
            <li>• Commercial & marketing strategy</li>
            <li>• Production & workflow improvement</li>
            <li>• Feasibility studies & infrastructure analysis</li>
            <li>• Business restructuring</li>
            <li>• Cost-control & accounting system design</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
