<script setup>
import headerBgUrl from '../../assets/concept1/header-bg.webp'
</script>

<template>
  <section class="relative isolate min-h-[92svh] overflow-hidden bg-black">
    <img
      :src="headerBgUrl"
      alt=""
      class="pointer-events-none absolute inset-0 h-full w-full object-cover"
    />
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/70" />

    <div class="mx-auto flex min-h-[92svh] w-full max-w-[1100px] flex-col justify-end px-5 pb-8 pt-24">
      <div class="font-display text-[#fffdf7]">
        <div class="max-w-[680px]">
          <div class="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
            <p class="text-[18px] leading-none tracking-[0.06em] sm:text-[22px]">CUISINE JAPONAISE</p>
            <p class="text-right text-[16px] leading-none tracking-[-0.02em] sm:text-[18px]">BAR À SAKÉ + VIN</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

