<template>
  <section
    id="partners"
    class="py-20 bg-white"
  >
    <div
      class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
    >
      <!-- LEFT CONTENT -->
      <div
        data-aos="fade-right"
        class="text-center md:text-left"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our <span class="text-blue-600">Trusted Partners</span>
        </h2>

        <p class="text-gray-500 text-base md:text-lg max-w-md mx-auto md:mx-0">
          We collaborate with reputable partners to ensure professional, secure,
          and impactful business solutions for our clients.
        </p>
      </div>

      <!-- ORBIT CONTAINER -->
      <!-- DESKTOP + TABLET PARTNERS -->
      <div
        class="hidden md:flex flex-col gap-10 items-center"
        data-aos="fade-left"
      >
        <!-- ROW 1 -->
        <div class="partner-row">
          <img
            src="/img/tridatu.jpg"
            class="partner-card lg"
          >
          <img
            src="/img/ava.jpg"
            class="partner-card lg"
          >
          <img
            src="/img/ferron.png"
            class="partner-card lg"
          >
        </div>

        <!-- ROW 2 (MENJOROK KE DALAM) -->
        <div class="partner-row offset">
          <img
            src="/img/paradigm.png"
            class="partner-card md"
          >
          <img
            src="/img/lmats.png"
            class="partner-card md"
          >
          <img
            src="/img/shannon.png"
            class="partner-card md"
          >
        </div>

        <!-- ROW 3 -->
        <div class="partner-row">
          <img
            src="/img/nomaspect.png"
            class="partner-card sm"
          >
          <img
            src="/img/sprawdzaj.svg"
            class="partner-card sm"
          >
          <img
            src="/img/qingdao.jpeg"
            class="partner-card sm"
          >
        </div>
      </div>
    </div>

    <!-- ================= MOBILE GRID ================= -->
    <div
      class="mt-14 grid grid-cols-2 gap-6 px-6 md:hidden"
      data-aos="fade-up"
    >
      <div
        v-for="logo in logos"
        :key="logo"
        class="bg-white rounded-2xl shadow-md p-4 flex items-center justify-center
               hover:shadow-lg transition"
      >
        <img
          :src="logo"
          class="h-12 object-contain"
          alt="Partner Logo"
        >
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  '/img/tridatu.jpg',
  '/img/paradigm.png',
  '/img/ava.jpg',
  '/img/nomaspect.png',
  '/img/ferron.png',
  '/img/sprawdzaj.svg',
  '/img/lmats.png',
  '/img/qingdao.jpeg',
  '/img/shannon.png'
]
</script>

<style scoped>
/* ===== ROW ===== */
.partner-row {
  display: flex;
  gap: 32px;
  justify-content: center;
}

/* row tengah agak masuk */
.partner-row.offset {
  padding-left: 60px;
  padding-right: 60px;
}

/* ===== CARD ===== */
.partner-card {
  background: white;
  border-radius: 1.25rem;
  object-fit: contain;
  box-shadow: 0 12px 28px rgba(0,0,0,.08);
  transition: transform .25s ease, box-shadow .25s ease;
}

.partner-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 36px rgba(0,0,0,.12);
}

/* ===== SIZE ===== */
.partner-card.lg {
  width: 160px;
  height: 100px;
  padding: 16px;
}

.partner-card.md {
  width: 145px;
  height: 92px;
  padding: 14px;
}

.partner-card.sm {
  width: 135px;
  height: 85px;
  padding: 12px;
}

/* ===== TABLET ADJUST ===== */
@media (max-width: 1024px) {
  .partner-row {
    gap: 24px;
  }

  .partner-row.offset {
    padding-left: 30px;
    padding-right: 30px;
  }

  .partner-card.lg { width: 145px; }
  .partner-card.md { width: 130px; }
  .partner-card.sm { width: 120px; }
}
</style>
