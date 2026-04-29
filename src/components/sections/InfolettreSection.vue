<script setup>
import { useLanguage } from '../../composables/useLanguage'

const { lang } = useLanguage()

const FORM_URL = 'https://docs.google.com/forms/d/1B-aBUEJCcuVdN32LN58HS3LWjd6jTLwccVvVqsaQ450/viewform'

const t = {
  fr: {
    label: 'Infolettre',
    heading: 'Restez dans la boucle.',
    body: 'Recevez nos actualités, événements et offres spéciales directement dans votre boîte courriel.',
    button: "S'inscrire",
  },
  en: {
    label: 'Newsletter',
    heading: 'Stay in the loop.',
    body: 'Get our news, events and special offers delivered straight to your inbox.',
    button: 'Subscribe',
  },
}
</script>

<template>
  <section class="hidden md:flex md:flex-1 md:flex-col md:justify-center bg-[#260000] md:px-8 md:py-10 md:gap-3 lg:px-12 lg:py-12 lg:gap-4 xl:px-16 xl:py-14 xl:gap-4">
    <span class="font-inter font-medium uppercase tracking-[0.08em] text-[#fffdf7]/50 md:text-[14px] lg:text-[15px]">{{ t[lang].label }}</span>
    <p class="font-inter font-bold leading-[1.1] tracking-[-1px] text-[#fffdf7] md:text-[32px] lg:text-[38px] xl:text-[44px]">{{ t[lang].heading }}</p>
    <p class="font-inter font-medium leading-[1.5] tracking-[-0.2px] text-[#fffdf7]/70 md:text-[16px] lg:text-[17px] xl:text-[18px]">{{ t[lang].body }}</p>
    <a
      :href="FORM_URL"
      target="_blank"
      rel="noopener noreferrer"
      class="flex w-fit items-center gap-2 rounded-md border border-[#fffdf7]/40 font-inter font-semibold text-[#fffdf7] hover:opacity-70 transition-opacity md:px-4 md:py-2 md:text-[16px] lg:px-5 lg:py-2.5 lg:text-[17px] xl:px-6 xl:py-3 xl:text-[18px]"
    >
      {{ t[lang].button }}
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </a>
  </section>
</template>
