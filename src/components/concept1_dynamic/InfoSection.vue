<script setup>
import infoCardUrl from '../../assets/concept1/info-card.webp'
import infoImageUrl from '../../assets/concept1/info-image.webp'

const infoDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
const infoTimes = Array(7).fill('17:00 - 22:30')
</script>

<template>
  <section class="bg-[#260000] py-12">
    <div class="mx-auto w-full max-w-[1100px] px-5">
      <div class="grid gap-7 sm:grid-cols-2 sm:items-start">
        <div class="grid gap-5">
          <img :src="infoImageUrl" alt="" class="w-full max-w-[520px] justify-self-end object-cover" />
          <img :src="infoCardUrl" alt="" class="w-full max-w-[360px] object-cover" />
        </div>

        <div class="grid gap-6 font-inter text-[12px] font-medium leading-[1.2] tracking-[-0.48px] text-[#fffdf7] sm:pt-6">
          <div class="grid grid-cols-2 gap-6">
            <div>
              <div v-for="(day, idx) in infoDays" :key="`${day}-${idx}`" class="mb-4 last:mb-0">{{ day }}</div>
            </div>
            <div>
              <div v-for="(time, idx) in infoTimes" :key="idx" class="mb-4 last:mb-0">{{ time }}</div>
            </div>
          </div>

          <div class="max-w-[320px]">
            <div>1002 Rue Saint-Urbain</div>
            <div>Montréal, H2Z 1K6</div>
            <div class="mt-3">+1 514-866-4411</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

