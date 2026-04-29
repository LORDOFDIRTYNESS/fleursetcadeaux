<script setup>
import Concept1Nav from './concept1_dynamic/Concept1Nav.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import FoodSection from './sections/FoodSection.vue'
import MenusSection from './sections/MenusSection.vue'
import InfoSection from './sections/InfoSection.vue'
import BannerSection from './sections/BannerSection.vue'
import InfolettreSection from './sections/InfolettreSection.vue'
import FooterSection from './sections/FooterSection.vue'
</script>

<template>
  <div class="min-h-dvh overflow-x-hidden bg-[#260000]">
    <Concept1Nav />
    <main>
      <HeroSection />
      <AboutSection />
      <div class="hidden md:block">
        <BannerSection />
      </div>
      <div class="md:hidden">
        <FoodSection />
      </div>
      <div class="md:mx-10 lg:mx-24 xl:mx-36 md:rounded-xl md:overflow-hidden">
        <div class="md:flex md:items-stretch">
          <div class="md:w-1/2 md:flex md:flex-col">
            <MenusSection />
            <div class="md:hidden">
              <BannerSection />
            </div>
            <InfolettreSection />
          </div>
          <div class="md:w-1/2">
            <InfoSection />
          </div>
        </div>
        <FooterSection />
      </div>
    </main>
  </div>
</template>
