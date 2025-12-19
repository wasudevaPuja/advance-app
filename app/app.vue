<script setup lang="ts">
const PROD_DOMAINS = [
  'advancetrade.asia',
  'www.advancetrade.asia'
]

const isProdDomain
  = typeof window !== 'undefined'
    && PROD_DOMAINS.includes(window.location.hostname)

useHead(() => {
  // jangan inject apa pun kalau bukan prod domain
  if (!import.meta.env.PROD || !isProdDomain) {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://www.advancetrade.asia'
        }
      ]
    }
  }

  // hanya jalan di advancetrade.asia
  return {
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
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.advancetrade.asia'
      }
    ]
  }
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
