<template>
  <footer class="bg-white border-t pt-20">
    <!-- MAIN FOOTER -->
    <div class="container mx-auto px-6">
      <div class="grid gap-12 md:grid-cols-4 pb-16">
        <!-- BRAND -->
        <div class="flex flex-col items-center md:items-start space-y-4">
          <img
            src="/img/logo.jpeg"
            alt="PT Advance Trading Technology"
            class="w-36 opacity-90"
          >
          <p class="text-gray-500 text-sm text-center md:text-left">
            Global Trading & Strategic Advisory
          </p>
        </div>

        <!-- MENU -->
        <div>
          <h4 class="text-gray-500 font-semibold mb-4">
            Menu
          </h4>
          <ul class="space-y-2 text-gray-700">
            <li>
              <button
                class="hover:text-blue-700 transition"
                @click="scrollToSection('home')"
              >
                Home
              </button>
            </li>
            <li>
              <button
                class="hover:text-blue-700 transition"
                @click="scrollToSection('about')"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                class="hover:text-blue-700 transition"
                @click="scrollToSection('services')"
              >
                Services
              </button>
            </li>
            <li>
              <button
                class="hover:text-blue-700 transition"
                @click="scrollToSection('partners')"
              >
                Our Partners
              </button>
            </li>
            <li>
              <button
                class="hover:text-blue-700 transition"
                @click="scrollToSection('contact')"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <!-- COMPANY INFO -->
        <div>
          <h4 class="text-gray-500 font-semibold mb-4">
            Company Info
          </h4>

          <p class="font-medium text-gray-800 mb-3">
            PT ADVANCE TRADING TECHNOLOGY
          </p>

          <p class="text-gray-700 leading-relaxed mb-4">
            Millennium Centennial Center, 38th Floor<br>
            Jl. Jenderal Sudirman Kav. 25<br>
            Jakarta Selatan, DKI Jakarta 12920<br>
            Indonesia
          </p>

          <p class="text-gray-700">
            <strong>Office Hours:</strong><br>
            Monday – Friday, 09.00 – 17.00 WIB
          </p>
        </div>

        <!-- CONTACT -->
        <div>
          <h4 class="text-gray-500 font-semibold mb-4">
            Contact
          </h4>

          <p class="text-gray-700 mb-4">
            <strong>Email:</strong><br>
            <a
              href="mailto:office.advancetrading.tech@gmail.com"
              class="text-blue-600 hover:underline break-all"
            >
              office.advancetrading.tech@gmail.com
            </a>
          </p>

          <p class="text-gray-700">
            <strong>Phone:</strong><br>
            +62 821 3613 126
          </p>
        </div>
      </div>
    </div>

    <!-- DIVIDER -->
    <div class="w-full h-[3px] bg-[#F6F9FF]" />

    <!-- COPYRIGHT -->
    <div class="bg-[#F6F9FF] py-4 text-center text-black">
      © 2025 PT Advance Trading Technology. All Rights Reserved.
    </div>
  </footer>
</template>

<script setup>
const scrollToSection = (id) => {
  const section = document.getElementById(id)
  if (!section) return

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}
</script>
