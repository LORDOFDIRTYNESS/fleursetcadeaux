<script setup>
import infoCardUrl from '../../assets/concept1/info-card.webp'
import infoImageUrl from '../../assets/concept1/info-image.webp'
import { useLanguage } from '../../composables/useLanguage'

const { lang } = useLanguage()

const days = {
  fr: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
  en: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
}
const times = Array(7).fill('17:00 - 22:30')
</script>

<template>
  <section class="bg-[#260000] px-5 py-6">
    <img :src="infoImageUrl" alt="" class="w-full object-cover mb-6 pl-14" />

    <div class="flex gap-4">
      <img :src="infoCardUrl" alt="" class="w-[45%] object-cover" />

      <div class="flex flex-1 flex-col gap-6 font-inter text-[14px] font-medium leading-[1.2] tracking-[-0.3px] text-[#fffdf7]">
        <div class="flex justify-between">
          <div class="flex flex-col gap-[2px]">
            <span v-for="(day, i) in days[lang]" :key="i">{{ day }}</span>
          </div>
          <div class="flex flex-col gap-[2px] ml-auto">
            <span v-for="(time, i) in times" :key="i">{{ time }}</span>
          </div>
        </div>

        <div class="font-inter text-[14px] font-medium leading-[1.4] tracking-[-0.3px] text-[#fffdf7]">
          <a
            href="https://maps.google.com/?q=1002+Rue+Saint-Urbain,+Montréal,+H2Z+1K6"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            <div>1002 Rue Saint-Urbain</div>
            <div>Montréal, H2Z 1K6</div>
          </a>
          <a href="tel:+15148664411" class="mt-2 block underline">+1 514-866-4411</a>
          <a href="mailto:info@fleursetcadeaux.com" class="mt-1 block underline">info@fleursetcadeaux.com</a>
        </div>
      </div>
    </div>
  </section>
</template>
