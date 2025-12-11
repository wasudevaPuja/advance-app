<template>
  <section
    id="home"
    class="pt-40 pb-36 bg-gradient-to-b from-[#F7FAFF] via-[#F3F6FF] to-[#ECF2FF]"
  >
    <div class="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div
        data-aos="fade-right"
        class="space-y-8"
      >
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight text-blue-800">
          Where Global Trading Meets<br>
          <span class="text-blue-600">Strategic Excellence.</span>
        </h1>

        <p class="text-gray-600 text-xl leading-relaxed max-w-xl">
          Delivering bespoke trading and management advisory solutions designed to
          unlock growth, accelerate performance, and build sustainable long-term value
          across global markets.
        </p>

        <div class="pt-4">
          <button
            class="px-10 py-4 rounded-full bg-blue-700 text-white text-lg font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.20)] hover:bg-blue-800 transition-all duration-300 inline-flex items-center gap-2 active:scale-95 cursor-pointer"
            @click="scrollTo('#about')"
          >
            Get Started
            <UIcon
              name="mdi:arrow-down"
              class="w-5 h-5 text-white"
            />
          </button>
        </div>
      </div>

      <div
        class="flex justify-center relative"
        data-aos="fade-left"
      >
        <div class="absolute w-72 h-72 bg-blue-300 opacity-20 blur-[90px] rounded-full top-12 left-16" />

        <img
          src="/img/finance-ill.svg"
          class="relative w-[440px] drop-shadow-xl animate-[float_7s_ease-in-out_infinite]"
          alt="Financial illustration showing investment and trading concept"
        >
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (target) => {
  const el = document.querySelector(target)
  if (!el) return

  const offset = -80
  const y = el.getBoundingClientRect().top + window.pageYOffset + offset

  window.scrollTo({
    top: y,
    behavior: 'smooth'
  })
}
</script>

<style>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
  100% { transform: translateY(0px); }
}
</style>
