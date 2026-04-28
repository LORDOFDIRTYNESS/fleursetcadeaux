<script setup>
import logoUrl from '../../assets/concept1/logo.png'
import menuIconUrl from '../../assets/concept1/menu-icon.svg'
</script>

<template>
  <div class="absolute left-[9px] top-[47px] h-[56px] w-[384px] rounded-[4px] bg-[#fffdf7]" />

  <div class="absolute left-[25px] top-[54px] h-[41px] w-[42px]">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <img :src="logoUrl" alt="" class="absolute left-[-587.72%] top-0 h-full w-[1275.75%] max-w-none" />
    </div>
  </div>

  <button type="button" aria-label="Menu" class="absolute left-[326px] top-[41px] h-[68px] w-[68px] rounded-md">
    <img :src="menuIconUrl" alt="" class="pointer-events-none absolute inset-0 h-full w-full" />
  </button>
</template>

