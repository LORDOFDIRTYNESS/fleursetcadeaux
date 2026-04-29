<script setup>
import logoUrl from '../../assets/concept1/logo.png'
</script>

<template>
  <div class="overflow-hidden bg-[#fffdf7] py-4 md:-mt-10">
    <div class="marquee flex w-max items-center gap-10">
      <template v-for="_ in 6" :key="_">
        <span class="font-['Anton'] text-[14px] uppercase tracking-[0.1em] text-black whitespace-nowrap lg:text-[14px] xl:text-[15px]">Cuisine Japonaise</span>
        <div class="h-6 w-6 shrink-0 relative overflow-hidden lg:h-6 lg:w-6 xl:h-7 xl:w-7">
          <img :src="logoUrl" alt="" class="absolute left-[-587.72%] top-0 h-full w-[1275.75%] max-w-none" />
        </div>
        <span class="font-['Anton'] text-[14px] uppercase tracking-[0.1em] text-black whitespace-nowrap lg:text-[14px] xl:text-[15px]">Bar à Saké + Vin</span>
        <div class="h-6 w-6 shrink-0 relative overflow-hidden lg:h-6 lg:w-6 xl:h-7 xl:w-7">
          <img :src="logoUrl" alt="" class="absolute left-[-587.72%] top-0 h-full w-[1275.75%] max-w-none" />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
