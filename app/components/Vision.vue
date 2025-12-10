<template>
  <section
    id="vision"
    class="py-24 bg-[#F7F9FF]"
  >
    <div class="container mx-auto px-6">
      <div data-aos="fade-up">
        <h2 class="text-4xl font-bold text-blue-700 text-center">
          Our Vision & Mission
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 mt-16">
        <div
          data-aos="fade-up"
          class="bg-white p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]
                 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
        >
          <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-300" />

          <div class="flex items-center gap-3 mb-5">
            <UIcon
              name="ph:eye-duotone"
              class="w-7 h-7 text-blue-600"
            />
            <h3 class="text-2xl font-semibold text-blue-600">
              Our Vision
            </h3>
          </div>

          <p class="text-gray-600 leading-relaxed text-lg">
            To become a distinguished leader in cross-border trading and strategic business advisory—
            recognized for integrity, innovation, and excellence.
            <br><br>
            Empowering companies with insights, connections, and strategies needed to thrive
            in a dynamic international marketplace.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="bg-white p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]
                 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
        >
          <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-300" />

          <div class="flex items-center gap-3 mb-5">
            <UIcon
              name="ph:flag-banner-duotone"
              class="w-7 h-7 text-blue-600"
            />
            <h3 class="text-2xl font-semibold text-blue-600">
              Our Mission
            </h3>
          </div>

          <ul class="text-gray-600 text-lg space-y-3 leading-relaxed">
            <li>• Deliver High-Value Trading Solutions</li>
            <li>• Offer Strategic Advisory with Measurable Impact</li>
            <li>• Build Long-Term Partnerships</li>
            <li>• Empower Businesses with Strategic Insight</li>
            <li>• Commit to Excellence in Every Engagement</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
