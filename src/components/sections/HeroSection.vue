<script setup>
import headerBgUrl from '../../assets/concept1/header-bg.webp'
import { useLanguage } from '../../composables/useLanguage'

const { lang } = useLanguage()

const t = {
  fr: { left: 'Cuisine Japonaise', right: 'Bar à Saké + Vin' },
  en: { left: 'Japanese Cuisine', right: 'Saké + Wine Bar' },
}
</script>

<template>
  <section class="relative isolate z-10 bg-black" style="height: calc(75svh - 74px)">
    <img
      :src="headerBgUrl"
      alt=""
      class="pointer-events-none absolute inset-0 h-full w-full object-cover"
    />
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75" />

    <div class="absolute inset-x-0 bottom-[-103px] flex justify-center">
      <div class="w-fit px-4">
        <div class="flex items-end justify-between pb-1">
          <p class="font-['Anton'] text-[18px] uppercase tracking-[0.04em] text-[#fffdf7]">{{ t[lang].left }}</p>
          <p class="font-['Anton'] text-[18px] uppercase tracking-[0.04em] text-[#fffdf7]">{{ t[lang].right }}</p>
        </div>
        <p class="font-['Anton'] text-[112px] leading-[0.92] uppercase text-[#fffdf7]">
          Fleurs&nbsp;&amp;<br>Cadeaux
        </p>
      </div>
    </div>
  </section>
</template>
