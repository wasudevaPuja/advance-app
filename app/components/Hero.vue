<template>
  <section
    id="home"
    class="pt-40 pb-32 bg-gradient-to-br from-[#F6F9FF] via-[#F2F6FF] to-[#EBF2FF]"
  >
    <div class="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <!-- TEXT SIDE -->
      <div
        class="space-y-8"
        data-aos="fade-right"
      >
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight text-blue-700">
          Where Global Trading Meets<br>
          <span class="text-blue-600">Strategic Excellence.</span>
        </h1>

        <p class="text-gray-600 text-xl leading-relaxed max-w-xl">
          We provide bespoke trading and management advisory solutions crafted to elevate business growth, unlock new opportunities, and deliver long-term success across global markets.
        </p>

        <!-- BUTTONS -->
        <div class="flex space-x-4 pt-4">
          <button
            class="px-8 py-4 rounded-2xl bg-blue-700 text-white text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-blue-800 transition"
          >
            Get Started
          </button>

          <button
            class="px-8 py-4 rounded-2xl border-2 border-blue-600 text-blue-700 text-lg font-semibold hover:bg-blue-50 transition"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- IMAGE SIDE -->
      <div class="flex justify-center relative">
        <div
          class="absolute w-64 h-64 bg-blue-200 opacity-30 blur-3xl rounded-full top-10 left-10"
        />

        <img
          src="/assets//img/finance-ill.svg"
          class="relative w-[420px] drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
        >
      </div>
    </div>
  </section>
</template>

<style>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-16px); }
  100% { transform: translateY(0px); }
}
</style>
