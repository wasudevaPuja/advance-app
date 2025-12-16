<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const activeSection = ref('home')

/* ============================
   SECTION CLUSTERING
   ============================ */
const sectionMap = {
  home: ['home'],
  about: ['about', 'vision', 'mission', 'journey'],
  services: ['services', 'why'],
  contact: ['contact'],
  partners: ['partners']
}

const resolveCluster = (id) => {
  for (const cluster in sectionMap) {
    if (sectionMap[cluster].includes(id)) return cluster
  }
  return 'home'
}

/* ============================
   SMOOTH SCROLL + CLOSE MOBILE MENU
   ============================ */
const handleScroll = (e, target) => {
  e.preventDefault()
  isOpen.value = false

  document.querySelector(target)?.scrollIntoView({
    behavior: 'smooth'
  })
}

/* ============================
   INTERSECTION OBSERVER LOGIC
   ============================ */
const observeSections = () => {
  // Ambil semua section yang punya ID
  const sections = document.querySelectorAll('section[id], footer[id]')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          activeSection.value = resolveCluster(id)
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -45% 0px'
    }
  )

  sections.forEach(sec => observer.observe(sec))

  return observer
}

let observerInstance = null

/* ============================
   MOUNT & CLEANUP
   ============================ */
onMounted(() => {
  observerInstance = observeSections()
})

onUnmounted(() => {
  observerInstance?.disconnect()
})
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm"
  >
    <div class="container mx-auto px-6 h-20 flex items-center justify-between">
      <div class="text-2xl font-bold text-blue-700">
        ADVANCE TRADING
      </div>

      <nav class="hidden md:flex space-x-10 text-gray-600 font-medium">
        <a
          href="#home"
          :class="[
            'relative pb-1 transition text-lg',
            activeSection === 'home' ? 'text-blue-700 font-semibold' : 'hover:text-blue-700'
          ]"
          @click="handleScroll($event, '#home')"
        >
          Home
          <span
            :class="[
              'absolute left-0 bottom-0 h-[2px] bg-blue-700 transition-all duration-300',
              activeSection === 'home' ? 'w-full' : 'w-0'
            ]"
          />
        </a>

        <a
          href="#about"
          :class="[
            'relative pb-1 transition text-lg',
            activeSection === 'about' ? 'text-blue-700 font-semibold' : 'hover:text-blue-700'
          ]"
          @click="handleScroll($event, '#about')"
        >
          About Us
          <span
            :class="[
              'absolute left-0 bottom-0 h-[2px] bg-blue-700 transition-all duration-300',
              activeSection === 'about' ? 'w-full' : 'w-0'
            ]"
          />
        </a>

        <a
          href="#services"
          :class="[
            'relative pb-1 transition text-lg',
            activeSection === 'services' ? 'text-blue-700 font-semibold' : 'hover:text-blue-700'
          ]"
          @click="handleScroll($event, '#services')"
        >
          Services
          <span
            :class="[
              'absolute left-0 bottom-0 h-[2px] bg-blue-700 transition-all duration-300',
              activeSection === 'services' ? 'w-full' : 'w-0'
            ]"
          />
        </a>

        <a
          href="#partners"
          :class="[
            'relative pb-1 transition text-lg',
            activeSection === 'partners' ? 'text-blue-700 font-semibold' : 'hover:text-blue-700'
          ]"
          @click="handleScroll($event, '#partners')"
        >
          Our Partners
          <span
            :class="[
              'absolute left-0 bottom-0 h-[2px] bg-blue-700 transition-all duration-300',
              activeSection === 'partners' ? 'w-full' : 'w-0'
            ]"
          />
        </a>

        <a
          href="#contact"
          :class="[
            'relative pb-1 transition text-lg',
            activeSection === 'contact' ? 'text-blue-700 font-semibold' : 'hover:text-blue-700'
          ]"
          @click="handleScroll($event, '#contact')"
        >
          Contact
          <span
            :class="[
              'absolute left-0 bottom-0 h-[2px] bg-blue-700 transition-all duration-300',
              activeSection === 'contact' ? 'w-full' : 'w-0'
            ]"
          />
        </a>
      </nav>

      <button
        class="lg:hidden text-blue-700 focus:outline-none cursor-pointer"
        @click="isOpen = !isOpen"
      >
        <span
          v-if="!isOpen"
          class="text-3xl"
        >☰</span>
        <span
          v-else
          class="text-3xl"
        >✕</span>
      </button>
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="lg:hidden bg-white/95 border-t border-gray-200 shadow-lg aos-ignore"
      >
        <nav class="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
          <a
            href="#home"
            @click="handleScroll($event, '#home')"
          >Home</a>
          <a
            href="#about"
            @click="handleScroll($event, '#about')"
          >About Us</a>
          <a
            href="#services"
            @click="handleScroll($event, '#services')"
          >Services</a>
          <a
            href="#partners"
            @click="handleScroll($event, '#partners')"
          >Our Partners</a>
          <a
            href="#contact"
            @click="handleScroll($event, '#contact')"
          >Contact</a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* BIAR NAVBAR TIDAK PERNAH DITOUCH AOS */
.aos-ignore,
.aos-ignore * {
  opacity: 1 !important;
  transform: none !important;
}
</style>
