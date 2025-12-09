<template>
  <div>
    <Navbar />

    <main>
      <NuxtPage />
      <FloatingButtons />
    </main>

    <Footer />
  </div>
</template>

<script setup>
const handleScroll = (e, target) => {
  e.preventDefault()

  const el = document.querySelector(target)
  if (!el) return

  const yOffset = -80 // tinggi navbar
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({
    top: y,
    behavior: 'smooth'
  })
}
</script>

