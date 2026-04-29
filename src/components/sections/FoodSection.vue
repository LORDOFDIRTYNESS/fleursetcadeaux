<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import foodGifUrl from '../../assets/concept1/food-bg.gif'
import stickerUrl from '../../assets/concept1/sticker.png'

const sectionRef = ref(null)
const transform = ref('')

const handleScroll = () => {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  const progress = 1 - rect.bottom / (rect.height + window.innerHeight)
  const clamped = Math.max(0, Math.min(1, progress))

  const startX = window.innerWidth + 20
  const endX = -300
  const x = startX + (endX - startX) * clamped

  const wave = Math.sin(clamped * Math.PI * 4) * 18
  const rotate = 25.99 + Math.sin(clamped * Math.PI * 5) * 12

  transform.value = `translateX(${x}px) translateY(${wave}px) rotate(${rotate}deg)`
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section ref="sectionRef" class="relative z-10">
    <img :src="foodGifUrl" alt="" class="w-full" />

    <div
      class="absolute top-[-55px] left-0 will-change-transform"
      :style="{ transform }"
    >
      <div class="relative inline-block">
        <img :src="stickerUrl" alt="" class="relative block w-[147px]" />
        <img :src="stickerUrl" alt="" class="absolute top-[18px] left-[18px] w-[147px]" />
      </div>
    </div>
  </section>
</template>
