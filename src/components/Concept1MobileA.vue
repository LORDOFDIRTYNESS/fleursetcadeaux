<script setup>
import Concept1Nav from './concept1_dynamic/Concept1Nav.vue'
import AboutSection from './concept1_dynamic/AboutSection.vue'
import DividerBar from './concept1_dynamic/DividerBar.vue'
import FoodSection from './concept1_dynamic/FoodSection.vue'
import HeroSection from './concept1_dynamic/HeroSection.vue'
import InfoSection from './concept1_dynamic/InfoSection.vue'
import MenusSection from './concept1_dynamic/MenusSection.vue'
</script>

<template>
  <div class="min-h-dvh bg-[#f4f4f4]">
    <Concept1Nav />
    <main>
      <HeroSection />
      <AboutSection />
      <FoodSection />
      <MenusSection />
      <DividerBar />
      <InfoSection />
    </main>
  </div>
</template>
