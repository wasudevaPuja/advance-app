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

            <li class="text-justify leading-relaxed text-gray-700">
              <strong>Alamat:</strong><br>
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

        <div>
          <h4 class="font-semibold text-gray-500 mb-2">
            Contact Us
          </h4>

          <p class="text-gray-500 text-sm mb-4">
            Reach us instantly via WhatsApp.
          </p>

          <a
            href="https://wa.me/628213613126?text=Hello%20Advance%20Trading%20Technology,%20I%20would%20like%20to%20ask%20about%20your%20services."
            target="_blank"
            class="inline-flex items-center space-x-2 bg-green-600 text-white px-5 py-3 rounded-full hover:bg-green-700 transition shadow-md"
          >
            <UIcon
              name="mdi:whatsapp"
              class="w-5 h-5 text-white"
            />
            <span class="font-medium">WhatsApp Us</span>
          </a>

          <div class="flex items-center gap-4 mt-6">
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
            >
              <UIcon
                name="mdi:instagram"
                class="w-6 h-6"
              />
            </a>

            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
            >
              <UIcon
                name="mdi:facebook"
                class="w-6 h-6"
              />
            </a>

            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
            >
              <UIcon
                name="mdi:youtube"
                class="w-6 h-6"
              />
            </a>

            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-sky-500 hover:text-white transition"
            >
              <UIcon
                name="mdi:telegram"
                class="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full h-[3px] bg-gradient-to-r from-blue-600 to-blue-300 mb-12 opacity-80">
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
