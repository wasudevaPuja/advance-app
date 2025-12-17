<template>
  <div
    class="bg-white pt-20 pb-10 border-t shadow-sm"
  >
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 pb-16">
        <div class="space-y-4 flex flex-col items-center md:items-start">
          <img
            src="/img/logo.jpeg"
            alt="Company Logo"
            class="w-36 opacity-90"
          >
          <p class="text-gray-500 text-sm text-center md:text-left">
            Global Trading & Strategic Advisory
          </p>
        </div>

        <div>
          <h4 class="font-semibold text-gray-500 mb-4">
            Menu
          </h4>
          <ul class="space-y-2 text-gray-700">
            <li>
              <button
                class="hover:text-blue-700 transition cursor-pointer"
                @click="scrollToSection('home')"
              >
                Home
              </button>
            </li>
            <li>
              <button
                class="hover:text-blue-700 transition cursor-pointer"
                @click="scrollToSection('about')"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                class="hover:text-blue-700 transition cursor-pointer"
                @click="scrollToSection('services')"
              >
                Services
              </button>
            </li>
            <li>
              <button
                class="hover:text-blue-700 transition cursor-pointer"
                @click="scrollToSection('partners')"
              >
                Our Partners
              </button>
            </li>
            <li>
              <button
                class="hover:text-blue-700 transition cursor-pointer"
                @click="scrollToSection('contact')"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-gray-500 mb-4">
            Company Info
          </h4>
          <ul class="space-y-3 text-gray-700 leading-relaxed">
            <li class="font-medium">
              PT ADVANCE TRADING TECHNOLOGY
            </li>

            <li class="leading-relaxed text-justify text-gray-700">
              <strong>Address:</strong><br>
              Millennium Centennial Center, 38th Floor <br>
              Jl. Jenderal Sudirman Kav. 25,<br>
              Jakarta Selatan, DKI Jakarta 12920,<br>
              Indonesia
            </li>

            <li class="mt-3 text-justify leading-relaxed text-gray-700">
              <strong>Office Hours:</strong><br>
              Monday to Friday, 09.00 – 17.00 WIB
            </li>

            <li>
              <strong>Email:</strong>
              <a
                href="mailto:office.advancetrading.tech@gmail.com"
                class="text-blue-600 hover:underline"
              ><br>office.advancetrading.tech@gmail.com</a>
            </li>

            <li>
              <strong>Phone:</strong><br>
              +62 821 3613 126
            </li>
          </ul>
        </div>

        <div class="text-center text-gray-600  leading-relaxed max-w-sm mx-auto">
          Advance Trading Technology operates through
          <span class="font-medium">direct business communication</span>.
          Official updates and inquiries are handled via
          <span class="font-semibold text-blue-600">email</span>
          and
          <span class="font-semibold text-blue-600">phone</span>
          only.
        </div>
      </div>
    </div>
  </div>
  <div class="w-full h-[3px] bg-gradient-to-r from-blue-700 to-blue-300 mb-12 opacity-1000">
    <footer class="py-3 bg-[#F6F9FF] text-center text-black">
      <p>© 2025 PT Advance Trading Technology — All Rights Reserved</p>
    </footer>
  </div>
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
