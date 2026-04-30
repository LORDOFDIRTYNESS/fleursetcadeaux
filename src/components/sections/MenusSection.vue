<script setup>
import { onMounted, ref } from 'vue'
import { useLanguage } from '../../composables/useLanguage'

const buttonsRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      buttonsRef.value?.classList.add('in-view')
      observer.disconnect()
    }
  }, { threshold: 0.2 })
  if (buttonsRef.value) observer.observe(buttonsRef.value)
})

const { lang } = useLanguage()

const t = {
  fr: {
    reserve: 'RÉSERVATION',
    sake: 'SAKÉ & VIN',
    disclaimer: '*Nos menus peuvent varier sans préavis.',
    heading1: 'Nos',
    heading2: 'Menus',
    eat: 'À manger',
    drink: 'À boire',
  },
  en: {
    reserve: 'RESERVATION',
    sake: 'SAKÉ & WINE',
    disclaimer: '*Our menus may change without notice.',
    heading1: 'Our',
    heading2: 'Menus',
    eat: 'To eat',
    drink: 'To drink',
  },
}
</script>

<template>
  <section class="bg-[#260000]">

    <!-- Mobile layout -->
    <div class="md:hidden px-5 py-8">
      <hr class="mb-8 border-t border-[#fffdf7]/70" />
      <div ref="buttonsRef" class="flex flex-col gap-3 px-8">
        <a
          href="https://booking.libroreserve.com/237aca3151e2466/QC016223038468/seat"
          target="_blank"
          rel="noopener noreferrer"
          class="slide-in delay-1 block w-full rounded-2xl bg-[#fffdf7] py-4 text-center font-inter text-[15px] font-semibold tracking-[-0.2px] text-black"
        >
          {{ t[lang].reserve }}
        </a>
        <a
          href="https://www.dropbox.com/scl/fi/79re4tr4ietf92ucw635v/FC-MENU.pdf?rlkey=ufu78k4dil7lr8i1eocpdcqsc&e=1&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          class="slide-in delay-2 block w-full rounded-2xl bg-[#fffdf7] py-4 text-center font-inter text-[15px] font-semibold tracking-[-0.2px] text-black"
        >
          MENU
        </a>
        <a
          href="https://www.dropbox.com/scl/fi/dsl0553bgacol1v6u0r43/FC-VIN-SAKE.pdf?rlkey=bx7vivdzle505azpss32od9qo&e=1&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          class="slide-in delay-3 block w-full rounded-2xl bg-[#fffdf7] py-4 text-center font-inter text-[15px] font-semibold tracking-[-0.2px] text-black"
        >
          {{ t[lang].sake }}
        </a>
      </div>
      <p class="mt-4 font-inter text-[11px] italic tracking-[-0.3px] text-[#fffdf7]/70">
        {{ t[lang].disclaimer }}
      </p>
    </div>

    <!-- Desktop layout -->
    <div class="hidden md:flex md:flex-col md:justify-center md:h-full md:px-8 md:py-10 md:gap-6 lg:px-12 lg:py-12 lg:gap-8 xl:px-16 xl:py-16 xl:gap-10">
      <div>
        <p class="font-inter font-bold leading-[1] tracking-[-2px] text-[#fffdf7] md:text-[70px] lg:text-[82px] xl:text-[96px]">{{ t[lang].heading1 }}</p>
        <p class="font-inter font-bold leading-[1] tracking-[-2px] text-[#fffdf7] md:text-[70px] lg:text-[82px] xl:text-[96px]">{{ t[lang].heading2 }}</p>
      </div>
      <div class="flex gap-4 w-fit">
        <a
          href="https://www.dropbox.com/scl/fi/79re4tr4ietf92ucw635v/FC-MENU.pdf?rlkey=ufu78k4dil7lr8i1eocpdcqsc&e=1&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          class="md:w-28 lg:w-40 xl:w-54 text-center bg-[#fffdf7] px-2 py-3 font-inter font-semibold tracking-[-0.2px] text-black underline hover:opacity-80 transition-opacity md:text-[12px] lg:text-[14px] xl:text-[15px]"
        >
          {{ t[lang].eat }}
        </a>
        <a
          href="https://www.dropbox.com/scl/fi/dsl0553bgacol1v6u0r43/FC-VIN-SAKE.pdf?rlkey=bx7vivdzle505azpss32od9qo&e=1&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          class="md:w-28 lg:w-40 xl:w-54 text-center bg-[#fffdf7] px-2 py-3 font-inter font-semibold tracking-[-0.2px] text-black underline hover:opacity-80 transition-opacity md:text-[12px] lg:text-[14px] xl:text-[15px]"
        >
          {{ t[lang].drink }}
        </a>
      </div>
      <p class="font-inter text-[11px] italic tracking-[-0.3px] text-[#fffdf7]/70">
        {{ t[lang].disclaimer }}
      </p>
    </div>

  </section>
</template>

<style scoped>
.slide-in {
  opacity: 0;
  transform: translateX(40px);
}

.in-view .slide-in {
  animation: slideIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.in-view .delay-1 { animation-delay: 0.1s; }
.in-view .delay-2 { animation-delay: 0.3s; }
.in-view .delay-3 { animation-delay: 0.5s; }

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
