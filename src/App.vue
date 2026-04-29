<script setup>
import { onMounted, ref } from 'vue'
import Concept1MobileA from './components/Concept1MobileA.vue'
import flowersUrl from './assets/concept1/flowers.png'

const loading = ref(true)

onMounted(() => {
  const start = Date.now()
  const minDisplay = 1800

  const done = () => {
    const elapsed = Date.now() - start
    const remaining = Math.max(0, minDisplay - elapsed)
    setTimeout(() => { loading.value = false }, remaining + 400)
  }

  if (document.readyState === 'complete') {
    done()
  } else {
    window.addEventListener('load', done, { once: true })
  }
})
</script>

<template>
  <Transition name="splash">
    <div v-if="loading" class="splash">
      <img :src="flowersUrl" alt="" class="splash-logo" />
      <p class="splash-name">Fleurs & Cadeaux</p>
    </div>
  </Transition>
  <Concept1MobileA />
</template>

<style scoped>
.splash {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #260000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.splash-logo {
  width: 110px;
  animation: logoIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.splash-name {
  font-family: 'Anton', sans-serif;
  font-size: 28px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fffdf7;
  animation: nameIn 0.8s 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes logoIn {
  from { opacity: 0; transform: scale(0.85); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes nameIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.splash-enter-active,
.splash-leave-active {
  transition: opacity 0.5s ease;
}
.splash-enter-from,
.splash-leave-to {
  opacity: 0;
}
</style>
