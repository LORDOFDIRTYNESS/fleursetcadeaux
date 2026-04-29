<script setup>
import { useLanguage } from '../../composables/useLanguage'

const { lang } = useLanguage()

const FORM_URL = 'https://docs.google.com/forms/d/1B-aBUEJCcuVdN32LN58HS3LWjd6jTLwccVvVqsaQ450/viewform'

const t = {
  fr: { label: 'Infolettre', button: "S'inscrire" },
  en: { label: 'Newsletter', button: 'Subscribe' },
}
</script>

<template>
  <footer class="bg-[#260000] px-5 py-8">
    <div class="flex flex-col gap-6">

      <!-- Infolettre -->
      <div class="flex flex-col gap-2">
        <span class="font-inter text-[11px] font-medium uppercase tracking-[0.08em] text-[#fffdf7]/70">{{ t[lang].label }}</span>
        <a
          :href="FORM_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="flex w-fit items-center gap-2 overflow-hidden rounded-md border border-[#fffdf7]/40 px-4 py-2 font-inter text-[13px] text-[#fffdf7] hover:opacity-70 transition-opacity"
        >
          {{ t[lang].button }}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <!-- Social links -->
      <div class="flex justify-center gap-4">
        <a
          href="https://www.facebook.com/fleurs.cadeaux/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          class="text-[#fffdf7] hover:opacity-70 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/fleurs_cadeaux/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="text-[#fffdf7] hover:opacity-70 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
        </a>
      </div>

    </div>
  </footer>
</template>
