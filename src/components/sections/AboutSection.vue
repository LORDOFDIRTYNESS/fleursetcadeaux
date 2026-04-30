<script setup>
import { useLanguage } from '../../composables/useLanguage'

const { lang } = useLanguage()

const t = {
  fr: `Un restaurant dans une ancienne boutique de fleurs et de souvenirs, une équipe passionnée de cuisine japonaise, de sakés artisanaux, de vins d'émotion. Bienvenue chez nous!`,
  en: `A restaurant in a former flower and souvenir shop, a team passionate about Japanese cuisine, artisanal sakés, and expressive wines. Welcome!`,
}
</script>

<template>
  <section class="bg-[#260000] px-8 pt-[148px] pb-20 md:px-10 md:pt-[125px] md:pb-20 lg:px-24 lg:pt-[155px] lg:pb-24 xl:px-36 xl:pt-[200px] xl:pb-32">
    <p
      class="font-inter text-[18px] leading-[1.35] tracking-[-0.3px] text-[#fffdf7] md:max-w-[55%] lg:text-[20px] xl:text-[22px]"
      v-html="t[lang]"
    />
  </section>
</template>
