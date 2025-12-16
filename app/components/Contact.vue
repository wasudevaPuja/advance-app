<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

const loading = ref(false)
const contactForm = ref(null)

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = async () => {
  loading.value = true

  const formData = new FormData(contactForm.value)

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    }).then(res => res.json())

    loading.value = false

    if (response.success) {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for contacting us. We will reply shortly.',
        confirmButtonColor: '#3B82F6'
      })

      contactForm.value.reset()
      form.value = { name: '', email: '', message: '' }

      // scroll balik ke contact
      document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      throw new Error()
    }
  } catch {
    loading.value = false

    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Failed to send your message. Please try again.',
      confirmButtonColor: '#EF4444'
    })
  }
}
</script>

<template>
  <section
    id="contact"
    class="py-24 px-6 bg-white relative overflow-hidden"
  >
    <!-- Background Gradient Accent -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-transparent pointer-events-none"
    />

    <div
      class="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)]
             p-10 md:p-14 relative z-10 border border-gray-100"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div
        class="absolute top-0 left-0 w-full h-[10px] rounded-t-[2rem]
                  bg-gradient-to-r from-[#2563EB] to-[#60A5FA]"
      />

      <p
        class="text-center text-sm uppercase tracking-[0.25em] text-blue-700 font-semibold mb-3"
        data-aos="fade-up"
      >
        Get In Touch
      </p>

      <!-- Heading -->
      <h2
        class="text-4xl font-semibold text-center mb-6 text-blue-700"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Contact Us
      </h2>

      <!-- Subtext -->
      <p
        class="text-center text-gray-500 max-w-2xl mx-auto mb-12 text-lg"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Have questions or want to discuss opportunities?
        Our team is ready to assist you with clarity and professionalism.
      </p>

      <!-- Divider -->
      <div class="w-24 h-[3px] bg-blue-500/40 mx-auto rounded mb-12" />

      <!-- Form -->
      <form
        ref="contactForm"
        class="space-y-6"
        data-aos="fade-up"
        data-aos-delay="150"
        @submit.prevent="submitForm"
      >
        <input
          type="hidden"
          name="access_key"
          value="eee4ad2d-7153-4a81-9610-0d69b1294b0c"
        >

        <!-- Name -->
        <input
          v-model="form.name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
          class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
                 text-gray-800 placeholder-gray-400 shadow-sm
                 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-100 transition"
        >

        <!-- Email -->
        <input
          v-model="form.email"
          name="email"
          type="email"
          placeholder="Your Email"
          required
          class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
                 text-gray-800 placeholder-gray-400 shadow-sm
                 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-100 transition"
        >

        <!-- Message -->
        <textarea
          v-model="form.message"
          name="message"
          placeholder="Your Message"
          required
          class="w-full h-32 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
                 text-gray-800 placeholder-gray-400 shadow-sm
                 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-100 transition"
        />

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 rounded-xl text-white font-medium shadow-lg
                 bg-gradient-to-r from-blue-600 to-blue-700
                 hover:opacity-95 active:scale-[0.97]
                 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>
      </form>
    </div>
  </section>
</template>
