<template>
  <footer
    id="contact"
    class="bg-white pt-20 pb-10 border-t"
  >
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 pb-16">
        <div class="space-y-4">
          <!-- LOGO SECTION (SMALL SIZE) -->
          <div class="flex flex-col items-start space-y-3">
            <!-- SMALLER LOGO -->
            <img
              src="/assets//img/logo.jpeg"
              alt="Company Logo"
              class="w-32 h-auto opacity-90 mx-auto"
            >

            <!-- Company tagline -->
            <p class="text-gray-500 text-sm mx-auto">
              Global Trading & Strategic Advisory
            </p>
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-gray-400 mb-4">
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
                href="#home"
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

        <div>
          <h4 class="font-semibold text-gray-400 mb-4">
            Company Info
          </h4>

          <ul class="space-y-2 text-gray-700 leading-relaxed">
            <li>
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
              >
                office.advancetrading.tech@gmail.com
              </a>
            </li>

            <li>
              <strong>Phone:</strong> <br>+62 821 3613 126
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-gray-400 mb-4">
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
        </div>
      </div>
    </div>
  </footer>
</template>
