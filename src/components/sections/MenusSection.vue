<script setup>
import { useLanguage } from '../../composables/useLanguage'

const { lang } = useLanguage()

const t = {
  fr: {
    reserve: 'RÉSERVER UNE TABLE',
    sake: 'SAKÉ & VIN',
    disclaimer: '*Nos menus peuvent varier sans préavis.',
  },
  en: {
    reserve: 'BOOK A TABLE',
    sake: 'SAKÉ & WINE',
    disclaimer: '*Our menus may change without notice.',
  },
}
</script>

<template>
  <section class="bg-[#260000]">
    <div class="px-5 py-8">
      <hr class="mb-8 border-t border-[#fffdf7]/70" />
      <div class="flex flex-col gap-3 px-8">
        <a
          href="https://booking.libroreserve.com/237aca3151e2466/QC016223038468/seat"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full rounded-2xl bg-[#e0acd5] py-4 text-center font-inter text-[15px] font-semibold tracking-[-0.2px] text-[#260000]"
        >
          {{ t[lang].reserve }}
        </a>
        <a
          href="https://www.dropbox.com/scl/fi/79re4tr4ietf92ucw635v/FC-MENU.pdf?rlkey=ufu78k4dil7lr8i1eocpdcqsc&e=1&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full rounded-2xl bg-[#e0acd5] py-4 text-center font-inter text-[15px] font-semibold tracking-[-0.2px] text-[#260000]"
        >
          MENU
        </a>
        <a
          href="https://www.dropbox.com/scl/fi/dsl0553bgacol1v6u0r43/FC-VIN-SAKE.pdf?rlkey=bx7vivdzle505azpss32od9qo&e=1&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full rounded-2xl bg-[#e0acd5] py-4 text-center font-inter text-[15px] font-semibold tracking-[-0.2px] text-[#260000]"
        >
          {{ t[lang].sake }}
        </a>
      </div>
      <p class="mt-4 font-inter text-[11px] italic tracking-[-0.3px] text-[#fffdf7]/70">
        {{ t[lang].disclaimer }}
      </p>
      <hr class="mt-4 border-t border-[#fffdf7]/70" />
    </div>
  </section>
</template>
