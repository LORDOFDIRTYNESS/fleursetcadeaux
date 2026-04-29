<script setup>
import { useLanguage } from '../../composables/useLanguage'

const { lang } = useLanguage()

const t = {
  fr: `Installé dans un immeuble centenaire emblématique du Quartier chinois, <em>Fleurs & Cadeaux</em> est un snack-bar japonais qui propose une expérience aussi gourmande que sensorielle. Ancienne boutique de fleurs et de souvenirs, le lieu a conservé son nom et sa façade pleine de charme en hommage à son histoire.`,
  en: `Nestled in a century-old building in Montréal's Chinatown, <em>Fleurs & Cadeaux</em> is a Japanese snack bar offering an experience as delicious as it is sensory. Once a flower and gift shop, the space kept its name and charming facade as a tribute to its history.`,
}
</script>

<template>
  <section class="bg-[#260000] px-8 pt-[148px] pb-20 md:px-10 md:pt-[125px] md:pb-20 lg:px-14 lg:pt-[155px] lg:pb-24 xl:px-16 xl:pt-[200px] xl:pb-32">
    <p
      class="font-inter text-[16px] leading-[1.35] tracking-[-0.3px] text-[#fffdf7] md:max-w-[55%] lg:text-[17px] xl:text-[18px]"
      v-html="t[lang]"
    />
  </section>
</template>
