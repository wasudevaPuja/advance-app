<template>
  <footer
    id="contact"
    class="bg-white pt-20 pb-10 border-t shadow-sm"
  >
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 pb-16">
        <!-- Logo + Tagline -->
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

        <!-- Menu -->
        <div>
          <h4 class="font-semibold text-gray-500 mb-4">
            Menu
          </h4>
          <ul class="space-y-2 text-gray-600">
            <li>
              <a
                href="#home"
                class="hover:text-blue-700"
              >Home</a>
            </li>
            <li>
              <a
                href="#about"
                class="hover:text-blue-700"
              >About Us</a>
            </li>
            <li>
              <a
                href="#services"
                class="hover:text-blue-700"
              >Services</a>
            </li>
            <li>
              <a
                href="#contact"
                class="hover:text-blue-700"
              >Contact</a>
            </li>
          </ul>
        </div>

        <!-- Company Info -->
        <div>
          <h4 class="font-semibold text-gray-500 mb-4">
            Company Info
          </h4>
          <ul class="space-y-3 text-gray-700 leading-relaxed">
            <li class="font-medium">
              PT ADVANCE TRADING TECHNOLOGY
            </li>

            <li>
              <strong>Alamat:</strong><br>
              Jalan Raya Bedulu, Kelurahan Bedulu,<br>
              Kecamatan Blahbatuh, Kabupaten Gianyar,<br>
              Bali 80581
            </li>

            <li>
              <strong>Email:</strong>
              <a
                href="mailto:office.advancetrading.tech@gmail.com"
                class="text-blue-600 hover:underline"
              >office.advancetrading.tech@gmail.com</a>
            </li>

            <li>
              <strong>Phone:</strong><br>
              +62 821 3613 126
            </li>
          </ul>
        </div>

        <!-- Contact Card -->
        <div>
          <h4 class="font-semibold text-gray-500 mb-2">
            Contact Us
          </h4>

          <p class="text-gray-500 text-sm mb-4">
            Reach us instantly via WhatsApp.
          </p>

          <!-- WhatsApp Button -->
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

          <!-- Social Icons -->
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
  </footer>
</template>
