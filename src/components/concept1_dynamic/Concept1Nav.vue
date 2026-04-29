<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import logoUrl from '../../assets/concept1/logo.png'
import { useLanguage } from '../../composables/useLanguage'

const isOpen = ref(false)
const { lang, toggle } = useLanguage()

const links = {
  fr: [
    { label: 'Réserver une table', href: 'https://booking.libroreserve.com/237aca3151e2466/QC016223038468/seat', external: true },
    { label: 'Menu', href: 'https://www.dropbox.com/scl/fi/79re4tr4ietf92ucw635v/FC-MENU.pdf?rlkey=ufu78k4dil7lr8i1eocpdcqsc&e=1&dl=0', external: true },
    { label: 'Saké & Vin', href: 'https://www.dropbox.com/scl/fi/dsl0553bgacol1v6u0r43/FC-VIN-SAKE.pdf?rlkey=bx7vivdzle505azpss32od9qo&e=1&dl=0', external: true },
    { label: 'Boutique', href: 'https://fleurs-et-cadeaux.square.site/', external: true },
  ],
  en: [
    { label: 'Book a table', href: 'https://booking.libroreserve.com/237aca3151e2466/QC016223038468/seat', external: true },
    { label: 'Menu', href: 'https://www.dropbox.com/scl/fi/79re4tr4ietf92ucw635v/FC-MENU.pdf?rlkey=ufu78k4dil7lr8i1eocpdcqsc&e=1&dl=0', external: true },
    { label: 'Saké & Wine', href: 'https://www.dropbox.com/scl/fi/dsl0553bgacol1v6u0r43/FC-VIN-SAKE.pdf?rlkey=bx7vivdzle505azpss32od9qo&e=1&dl=0', external: true },
    { label: 'Shop', href: 'https://fleurs-et-cadeaux.square.site/', external: true },
  ],
}

watch(isOpen, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 isolate">
    <div class="relative z-10 mx-auto w-full max-w-[1100px] px-3 pt-3">
      <div class="overflow-hidden rounded-md bg-[#fffdf7] shadow-sm">
        <div class="flex items-center justify-between px-4 py-1">
          <div class="h-10 w-10 shrink-0">
            <div class="relative h-full w-full overflow-hidden">
              <img :src="logoUrl" alt="Fleurs et Cadeaux" class="absolute left-[-587.72%] top-0 h-full w-[1275.75%] max-w-none" />
            </div>
          </div>

        <button
          type="button"
          :aria-expanded="isOpen"
          aria-label="Menu"
          class="relative grid h-14 w-14 place-items-center rounded-md hover:bg-black/5"
          @click="isOpen = !isOpen"
        >
          <span
            class="absolute h-[2px] w-8 rounded bg-brand-red transition-transform duration-200"
            :class="isOpen ? 'translate-y-0 rotate-45' : '-translate-y-3'"
          />
          <span
            class="absolute h-[2px] w-8 rounded bg-brand-red transition-opacity duration-200"
            :class="isOpen ? 'opacity-0' : 'opacity-100'"
          />
          <span
            class="absolute h-[2px] w-8 rounded bg-brand-red transition-transform duration-200"
            :class="isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-3'"
          />
        </button>
        </div>

        <nav
          class="bg-[#fffdf7] px-4 transition-[max-height,opacity] duration-200"
          :class="isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
          style="overflow: clip"
        >
          <div class="py-3">
            <a
              v-for="link in links[lang]"
              :key="link.label"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="block rounded-md px-3 py-3 text-center font-inter text-[16px] font-medium uppercase tracking-[0.02em] text-[#ea0050] hover:bg-[#ea0050]/5"
              @click="isOpen = false"
            >
              {{ link.label }}
            </a>

            <div class="mt-3 flex items-center justify-between border-t border-black/10 pt-3 px-1">
              <div class="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/fleurs.cadeaux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  class="text-[#ea0050] hover:opacity-70 transition-opacity"
                  @click="isOpen = false"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/fleurs_cadeaux/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  class="text-[#ea0050] hover:opacity-70 transition-opacity"
                  @click="isOpen = false"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
              </div>
              <button
                @click="toggle"
                class="font-inter text-[13px] font-semibold tracking-[0.05em] text-[#ea0050] hover:opacity-70 transition-opacity"
              >
                {{ lang === 'fr' ? 'EN' : 'FR' }}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div v-if="isOpen" class="fixed inset-0 z-0 bg-black/35" @click="isOpen = false" />
  </header>
</template>
