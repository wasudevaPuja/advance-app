<template>
  <section
    id="about"
    class="py-24 bg-white"
  >
    <div class="container mx-auto px-6 max-w-6xl">
      <div
        class="text-center mb-20"
        data-aos="fade-up"
      >
        <h2 class="text-4xl font-bold text-blue-700">
          About Us
        </h2>
        <p class="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
          A trusted partner for global trading and strategic business advisory, built on integrity and excellence.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div data-aos="fade-right">
          <h3 class="text-3xl font-semibold text-gray-800 mb-6">
            Who We Are
          </h3>

          <p class="text-gray-600 text-lg leading-relaxed">
            PT Advance Trading Technology was established in 2025 to provide world-class trading expertise,
            strategic advisory, and global market insight for companies operating in rapidly evolving industries.
          </p>

          <p class="text-gray-600 text-lg leading-relaxed mt-6">
            We combine international experience with strong local understanding, enabling businesses to grow,
            expand, and compete confidently in global markets.
          </p>
        </div>

        <div
          class="flex justify-center"
          data-aos="fade-left"
        >
          <div
            class="p-6 rounded-3xl bg-white shadow-[0_25px_50px_rgba(0,0,0,0.07)]
                   transition-all duration-300 hover:shadow-[0_35px_65px_rgba(0,0,0,0.1)]"
          >
            <img
              src="/img/about.svg"
              class="w-[380px]"
              alt="About ys illustration"
            >
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-10 mb-24">
        <div
          class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100
                 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          data-aos="fade-up"
        >
          <UIcon
            name="mdi:earth"
            class="w-10 h-10 text-blue-600 mb-4"
          />
          <h4 class="text-xl font-semibold text-gray-800 mb-2">
            Global Perspective
          </h4>
          <p class="text-gray-600 leading-relaxed">
            International network, strong regional presence, and deep market insight.
          </p>
        </div>

        <div
          class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100
                 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <UIcon
            name="mdi:shield-check"
            class="w-10 h-10 text-blue-600 mb-4"
          />
          <h4 class="text-xl font-semibold text-gray-800 mb-2">
            Trust & Governance
          </h4>
          <p class="text-gray-600 leading-relaxed">
            Built on transparency, integrity, and compliance with international standards.
          </p>
        </div>

        <div
          class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100
                 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <UIcon
            name="mdi:chart-line"
            class="w-10 h-10 text-blue-600 mb-4"
          />
          <h4 class="text-xl font-semibold text-gray-800 mb-2">
            Strategic Expertise
          </h4>
          <p class="text-gray-600 leading-relaxed">
            Delivering measurable impact through data-driven advisory and trading execution.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
