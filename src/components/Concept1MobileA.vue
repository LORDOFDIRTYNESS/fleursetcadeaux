<script setup>
import Concept1Nav from './concept1_dynamic/Concept1Nav.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import FoodSection from './sections/FoodSection.vue'
import MenusSection from './sections/MenusSection.vue'
import InfoSection from './sections/InfoSection.vue'
import FooterSection from './sections/FooterSection.vue'
</script>

<template>
  <div class="min-h-dvh bg-[#f4f4f4]">
    <Concept1Nav />
    <main>
      <HeroSection />
      <AboutSection />
      <FoodSection />
      <MenusSection />
      <InfoSection />
      <FooterSection />
    </main>
  </div>
</template>
