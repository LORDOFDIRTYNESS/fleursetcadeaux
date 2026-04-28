<script setup>
import infoCardUrl from '../../assets/concept1/info-card.webp'
import infoImageUrl from '../../assets/concept1/info-image.webp'

const infoDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
const infoTimes = Array(7).fill('17:00 - 22:30')
</script>

<template>
  <div class="absolute left-[-3px] top-[2145px] h-[537px] w-[407px] bg-[#260000]" />

  <div class="absolute left-[74px] top-[2167px] h-[248px] w-[310px]">
    <img :src="infoImageUrl" alt="" class="pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover" />
  </div>

  <div class="absolute left-[20px] top-[2435px] h-[226px] w-[181px]">
    <img :src="infoCardUrl" alt="" class="pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover" />
  </div>

  <div
    class="absolute left-[213px] top-[2436px] w-[161px] whitespace-pre-wrap font-inter text-[12px] font-medium leading-[1.13] tracking-[-0.48px] text-[#fffdf7]"
  >
    <div v-for="(day, idx) in infoDays" :key="`${day}-${idx}`" class="mb-[16px] last:mb-0">
      {{ day }}
    </div>
    <div class="mt-[10px]">
      <div>1002 Rue Saint-Urbain</div>
      <div>Montréal, H2Z 1K6</div>
      <div class="mt-[10px]">+1 514-866-4411</div>
    </div>
  </div>

  <div
    class="absolute left-[223px] top-[2436px] w-[161px] font-inter text-[12px] font-medium leading-[1.13] tracking-[-0.48px] text-[#fffdf7]"
  >
    <div v-for="(time, idx) in infoTimes" :key="idx" class="mb-[16px] last:mb-0">
      {{ time }}
    </div>
  </div>
</template>

