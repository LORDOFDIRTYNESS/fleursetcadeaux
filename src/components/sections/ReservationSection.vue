<script setup>
import pinkBgUrl from '../../assets/concept1/pinkbg.PNG'
import sashimiUrl from '../../assets/concept1/sashimi.webp'
</script>

<template>
  <section class="relative z-20">
    <!-- Pink background — just tall enough for the button -->
    <div class="relative h-[280px] overflow-hidden">
      <img :src="pinkBgUrl" alt="" class="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      <div class="relative px-5 pt-5">
        <button
          type="button"
          class="w-full rounded-[12px] bg-[#260000] px-4 py-3 font-inter text-[16px] font-semibold tracking-[-0.08px] text-[#fffdf7] shadow-sm"
        >
          RÉSERVER UNE TABLE
        </button>
      </div>
    </div>

    <!-- Sashimi: absolutely positioned, overflows into next section -->
    <div class="absolute inset-x-0 top-[65px] flex justify-center">
      <img
        :src="sashimiUrl"
        alt=""
        class="w-[440px] -rotate-[30.52deg] drop-shadow-xl"
      />
    </div>
  </section>
</template>
