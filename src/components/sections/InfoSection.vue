<script setup>
import infoCardUrl from '../../assets/concept1/info-card.webp'
import infoImageUrl from '../../assets/concept1/info-image.webp'

const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
const times = Array(7).fill('17:00 - 22:30')
</script>

<template>
  <section class="bg-[#260000] px-5 py-6">
    <img :src="infoImageUrl" alt="" class="w-full object-cover mb-6 pl-14" />

    <div class="flex gap-4">
      <img :src="infoCardUrl" alt="" class="w-[45%] object-cover" />

      <div class="flex flex-1 flex-col gap-6 font-inter text-[12px] font-medium leading-[1.2] tracking-[-0.3px] text-[#fffdf7]">
        <div class="flex justify-between">
          <div class="flex flex-col gap-[2px]">
            <span v-for="(day, i) in days" :key="i">{{ day }}</span>
          </div>
          <div class="flex flex-col gap-[2px] ml-auto">
            <span v-for="(time, i) in times" :key="i">{{ time }}</span>
          </div>
        </div>

        <span class="flash inline-block -rotate-[6deg] self-center mt-8 font-inter text-[16px] font-semibold uppercase tracking-[0.05em] text-[#fffdf7]">
          7 jours sur 7
        </span>
      </div>
    </div>
  </section>

</template>

<style scoped>
.flash {
  animation: flash 1.2s step-start infinite;
}

@keyframes flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
