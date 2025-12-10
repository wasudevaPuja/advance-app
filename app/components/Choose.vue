<template>
  <section
    id="why"
    class="py-24 bg-white"
  >
    <div class="container mx-auto px-6">
      <h2
        class="text-4xl font-bold text-blue-700 text-center mb-16"
        data-aos="fade-up"
      >
        Why Choose Us
      </h2>

      <div class="grid md:grid-cols-3 gap-10">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="p-6 rounded-2xl border border-gray-200 shadow-sm bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          data-aos="fade-up"
          :data-aos-delay="i * 120"
        >
          <div class="flex flex-col space-y-4">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <UIcon
                :name="item.icon"
                class="w-6 h-6 text-blue-600"
              />
            </div>

            <h3 class="text-lg font-semibold text-blue-700">
              {{ item.title }}
            </h3>

            <p class="text-gray-600 leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    icon: 'ph:globe-duotone',
    title: 'International Expertise & Local Market Strength',
    desc: 'Strong global network combined with deep local insight.'
  },
  {
    icon: 'mdi:shield-check',
    title: 'Fully Licensed & Legally Compliant',
    desc: 'Trusted legal foundation for safe and reliable operations.'
  },
  {
    icon: 'mdi:target',
    title: 'Tailored Strategies for Real Impact',
    desc: 'Solutions crafted specifically for measurable business outcomes.'
  },
  {
    icon: 'mdi:handshake-outline',
    title: 'Dual Expertise in Trading & Consulting',
    desc: 'Strategic advisory backed with executional trading capability.'
  },
  {
    icon: 'mdi:shield-account-outline',
    title: 'Integrity & Transparency',
    desc: 'Ethical, open, and responsible business practice at every step.'
  },
  {
    icon: 'mdi:star-check-outline',
    title: 'Consistent, Reliable, & Excellent Delivery',
    desc: 'High-performance service backed by professional commitment.'
  }
]
</script>
