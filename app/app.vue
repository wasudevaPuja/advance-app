<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-LEFBPE4P2V',
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LEFBPE4P2V');
      `,
      type: 'text/javascript'
    }
  ]
})
</script>

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
