<script setup>
import headerBgUrl from '../../assets/concept1/header-bg.webp'
import foodGifUrl from '../../assets/concept1/food-bg.gif'
import { useLanguage } from '../../composables/useLanguage'

const { lang } = useLanguage()

const t = {
  fr: { left: 'Cuisine Japonaise', right: 'Bar à Saké + Vin' },
  en: { left: 'Japanese Cuisine', right: 'Saké + Wine Bar' },
}
</script>

<template>
  <section class="hero relative isolate z-10 bg-black">
    <img
      :src="headerBgUrl"
      alt=""
      class="pointer-events-none absolute inset-0 h-full w-full object-cover"
    />
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75" />

    <div class="absolute inset-x-0 bottom-[-103px] flex justify-center md:bottom-[-85px] lg:bottom-[-115px] xl:bottom-[-147px] md:justify-start md:left-10 lg:left-24 xl:left-36 md:inset-x-auto">
      <div class="w-fit px-4 md:px-0">
        <div class="flex items-end justify-between pb-1 ml-[3px]">
          <p class="slide-up anim-delay-3 font-['Anton'] text-[18px] uppercase tracking-[0.04em] text-[#fffdf7]">{{ t[lang].left }}</p>
          <p class="slide-up anim-delay-4 font-['Anton'] text-[18px] uppercase tracking-[0.04em] text-[#fffdf7]">{{ t[lang].right }}</p>
        </div>
        <div class="font-['Anton'] text-[112px] leading-[0.92] uppercase text-[#fffdf7] md:text-[92px] lg:text-[125px] xl:text-[160px]">
          <div class="slide-up anim-delay-1">Fleurs&nbsp;&amp;</div>
          <div class="slide-up anim-delay-2">Cadeaux</div>
        </div>
      </div>
    </div>

    <!-- Desktop food image overlay -->
    <div class="hidden md:block absolute right-0 md:bottom-[-160px] lg:bottom-[-190px] xl:bottom-[-220px] md:w-[42%] lg:w-[40%] xl:w-[38%] z-20 shadow-2xl pr-8">
      <img :src="foodGifUrl" alt="" class="w-full object-cover" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: calc(75svh - 74px);
}
@media (min-width: 768px) {
  .hero { height: 80vh; }
}

.slide-up {
  opacity: 0;
  transform: translateX(40px);
  animation: slideIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.anim-delay-1 { animation-delay: 0.4s; }
.anim-delay-2 { animation-delay: 0.65s; }
.anim-delay-3 { animation-delay: 1s; }
.anim-delay-4 { animation-delay: 1.2s; }

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
