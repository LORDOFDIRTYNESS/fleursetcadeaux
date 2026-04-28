<script setup>
import sectionFoodBgUrl from '../../assets/concept1/section-food-bg.webp'
import stickerUrl from '../../assets/concept1/sticker.png'
</script>

<template>
  <section class="relative overflow-hidden bg-black">
    <img
      :src="sectionFoodBgUrl"
      alt=""
      class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-95"
      style="object-position: 40% 0%"
    />
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/35" />

    <div class="mx-auto w-full max-w-[1100px] px-5 py-16 sm:py-20">
      <div class="flex items-start justify-end">
        <div class="relative h-[124px] w-[180px]">
          <img :src="stickerUrl" alt="" class="absolute left-0 top-0 h-[66px] w-[147px] rotate-[25.99deg]" />
          <img :src="stickerUrl" alt="" class="absolute left-3 top-8 h-[66px] w-[147px] rotate-[25.99deg]" />
        </div>
      </div>
    </div>
  </section>
</template>

