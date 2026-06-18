<script setup>
import sansSoleilLogoUrl from '../../assets/concept1/sanssoleil.webp'
import { useLanguage } from '../../composables/useLanguage'

const SANS_SOLEIL_URL = 'https://www.sanssoleilmtl.com/'

const { lang } = useLanguage()

const t = {
  fr: {
    eyebrow: 'Après Fleurs et Cadeaux',
    body: 'Poursuivez la soirée chez Sans Soleil.',
    cta: 'Découvrir Bar Sans Soleil',
  },
  en: {
    eyebrow: 'After Fleurs et Cadeaux',
    body: 'Keep the night going at Sans Soleil.',
    cta: 'Visit Sans Soleil Bar',
  },
}
</script>

<template>
  <section class="bg-[#260000] px-5 py-8 md:px-8 md:py-6 lg:px-12 lg:py-8 xl:px-16">
    <div class="flex flex-col gap-4 border-y border-[#fffdf7]/25 py-6 text-[#fffdf7] md:max-w-[520px] md:py-7">
      <div class="flex items-center justify-between gap-5">
        <img
          :src="sansSoleilLogoUrl"
          alt="Sans Soleil"
          class="sans-soleil-logo h-32 w-auto max-w-[380px] object-contain opacity-90 brightness-0 invert md:h-40 md:max-w-[460px] lg:h-48"
        />
        <span class="font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-[#fffdf7]/55 md:text-[12px]">
          {{ t[lang].eyebrow }}
        </span>
      </div>

      <div class="flex items-end justify-between gap-5">
        <p class="max-w-[320px] font-inter text-[22px] font-bold leading-[1.05] tracking-[-0.8px] md:text-[24px] lg:text-[28px]">
          {{ t[lang].body }}
        </p>
        <a
          :href="SANS_SOLEIL_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex shrink-0 items-center gap-2 font-inter text-[13px] font-semibold underline underline-offset-4 transition-opacity hover:opacity-70 md:text-[14px]"
        >
          {{ t[lang].cta }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sans-soleil-logo {
  animation: sansSoleilSpin 12s linear infinite;
  transform-origin: center;
}

@keyframes sansSoleilSpin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sans-soleil-logo {
    animation: none;
  }
}
</style>
