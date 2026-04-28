<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  viewportPadding: { type: Number, default: 24 },
})

const scale = ref(1)

const updateScale = () => {
  if (typeof window === 'undefined') return
  const available = Math.max(0, window.innerWidth - props.viewportPadding)
  scale.value = Math.min(1, available / props.width)
}

onMounted(() => {
  updateScale()
  window.addEventListener('resize', updateScale, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScale)
})

const wrapperStyle = computed(() => ({
  width: `${props.width * scale.value}px`,
  height: `${props.height * scale.value}px`,
}))

const artboardStyle = computed(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`,
  transform: `scale(${scale.value})`,
  transformOrigin: 'top left',
}))
</script>

<template>
  <div class="min-h-dvh bg-[#f4f4f4] py-6">
    <div class="mx-auto" :style="wrapperStyle">
      <div
        class="relative overflow-hidden bg-white shadow-[0_18px_55px_rgba(0,0,0,0.18)]"
        :style="artboardStyle"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

