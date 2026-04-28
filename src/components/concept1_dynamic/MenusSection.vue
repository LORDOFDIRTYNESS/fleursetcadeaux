<script setup>
import rectangle14Url from '../../assets/concept1/rectangle14.webp'
import de14Url from '../../assets/concept1/de14.webp'
import sashimiUrl from '../../assets/concept1/sashimi.webp'
</script>

<template>
  <section class="bg-[#fffdf7]">
    <div class="relative overflow-hidden">
      <img :src="rectangle14Url" alt="" class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-95" />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fffdf7]/20 via-black/0 to-[#fffdf7]/70" />

      <div class="mx-auto w-full max-w-[1100px] px-5 py-14">
        <div class="relative">
          <div class="pointer-events-none absolute -left-10 -top-12 hidden sm:block">
            <img :src="sashimiUrl" alt="" class="h-[340px] w-[340px] -rotate-[30.52deg] drop-shadow-xl" />
          </div>

          <div class="max-w-[520px] sm:ml-auto">
            <button
              type="button"
              class="w-full rounded-[12px] bg-[#260000] px-4 py-3 font-inter text-[16px] font-semibold tracking-[-0.08px] text-[#fffdf7] shadow-sm hover:bg-black/90"
            >
              RÉSERVER UNE TABLE
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="relative overflow-hidden bg-[#260000]">
      <img :src="de14Url" alt="" class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-95" />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/60" />

      <div class="mx-auto w-full max-w-[1100px] px-5 py-14">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 class="font-display text-[56px] leading-[0.9] tracking-[-1.4px] text-[#fffdf7] sm:text-[68px]">
            NOS MENUS
          </h2>

          <p class="font-inter text-[11px] font-medium italic tracking-[-0.44px] text-[#fffdf7]">
            *Nos menus peuvent varier sans préavis.
          </p>
        </div>

        <div class="mt-6 flex gap-3">
          <button type="button" class="h-8 w-[90px] bg-[#fffdf7] font-inter text-[14px] font-medium tracking-[-0.56px] text-[#260000] underline">
            À manger
          </button>
          <button type="button" class="h-8 w-[90px] bg-[#fffdf7] font-inter text-[14px] font-medium tracking-[-0.56px] text-[#260000] underline">
            À boire
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

