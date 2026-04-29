<script setup>
import { onMounted, ref } from 'vue'
import infoCardUrl from '../../assets/concept1/info-card.webp'
import infoImageUrl from '../../assets/concept1/info-image.webp'
import { useLanguage } from '../../composables/useLanguage'

const sectionRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      sectionRef.value?.classList.add('in-view')
      observer.disconnect()
    }
  }, { threshold: 0.15 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})

const { lang } = useLanguage()

const t = {
  fr: 'Nos heures d\'ouverture',
  en: 'Opening hours',
}

const days = {
  fr: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
  en: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
}
const times = Array(7).fill('17:00 - 22:30')
</script>

<template>
  <section ref="sectionRef" class="bg-[#260000] px-5 py-6 md:px-8 md:py-10 lg:px-12 lg:py-14 xl:px-16 xl:py-16 overflow-hidden">
    <img :src="infoImageUrl" alt="" class="slide-from-right w-full object-cover mb-6 pl-14" />

    <div class="flex gap-4 md:gap-6 lg:gap-10 xl:gap-16">
      <img
        :src="infoCardUrl"
        alt=""
        class="slide-from-left w-[45%] object-cover md:w-[42%] md:max-w-[280px] lg:max-w-[330px] xl:max-w-[380px] md:h-full"
      />

      <div class="flex flex-1 flex-col gap-6 font-inter font-medium leading-[1.2] tracking-[-0.3px] text-[#fffdf7] md:text-[13px] md:gap-6 lg:text-[14px] lg:gap-8 xl:text-[16px] xl:gap-10">
        <span class="block text-center font-inter font-semibold uppercase tracking-[0.08em] text-[#fffdf7] md:text-[13px] lg:text-[14px] xl:text-[15px]">{{ t[lang] }}</span>
        <hr class="-mt-5 mx-auto w-3/4 border-t border-[#fffdf7]" />

        <div class="flex justify-between">
          <div class="flex flex-col gap-[2px]">
            <span v-for="(day, i) in days[lang]" :key="i">{{ day }}</span>
          </div>
          <div class="flex flex-col gap-[2px] ml-auto pr-3 md:pr-0">
            <span v-for="(time, i) in times" :key="i">{{ time }}</span>
          </div>
        </div>

        <div class="font-inter font-medium leading-[1.4] tracking-[-0.3px] text-[#fffdf7] md:text-[13px] lg:text-[14px] xl:text-[16px]">
          <a
            href="https://maps.google.com/?q=1002+Rue+Saint-Urbain,+Montréal,+H2Z+1K6"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            <div>1002 Rue Saint-Urbain</div>
            <div>Montréal, H2Z 1K6</div>
          </a>
          <a href="tel:+15148664411" class="mt-2 block underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]">+1 514-866-4411</a>
          <a href="mailto:info@fleursetcadeaux.com" class="mt-1 block underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]">info@fleursetcadeaux.com</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-from-right {
  opacity: 0;
  transform: translateX(60px);
}

.slide-from-left {
  opacity: 0;
  transform: translateX(-60px);
}

.in-view .slide-from-right {
  animation: slideFromRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
}

.in-view .slide-from-left {
  animation: slideFromLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
}

@keyframes slideFromRight {
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideFromLeft {
  to { opacity: 1; transform: translateX(0); }
}
</style>
