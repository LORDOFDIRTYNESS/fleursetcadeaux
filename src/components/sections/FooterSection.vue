<script setup>
import { ref } from 'vue'

const email = ref('')
const FORM_ENTRY_ID = 'REPLACE_WITH_ENTRY_ID'

const submit = () => {
  const url = `https://docs.google.com/forms/d/1B-aBUEJCcuVdN32LN58HS3LWjd6jTLwccVvVqsaQ450/viewform?${FORM_ENTRY_ID}=${encodeURIComponent(email.value)}`
  window.open(url, '_blank')
}
</script>

<template>
  <footer class="bg-[#260000] px-5 py-8">
    <div class="flex flex-col gap-6">

      <!-- Infolettre -->
      <div class="flex flex-col gap-2">
        <span class="font-inter text-[11px] font-medium uppercase tracking-[0.08em] text-[#fffdf7]/70">Infolettre</span>
        <form @submit.prevent="submit" class="flex w-fit items-center overflow-hidden rounded-md border border-[#fffdf7]/40">
          <input
            v-model="email"
            type="email"
            placeholder="Votre adresse courriel"
            required
            class="bg-transparent px-4 py-2 font-inter text-[13px] text-[#fffdf7] placeholder-[#fffdf7]/50 outline-none w-[180px]"
          />
          <button type="submit" class="pr-3 text-[#fffdf7] hover:opacity-70 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </form>
      </div>

      <!-- Address & contact -->
      <div class="font-inter text-[12px] font-medium leading-[1.4] tracking-[-0.3px] text-[#fffdf7]">
        <a
          href="https://maps.google.com/?q=1002+Rue+Saint-Urbain,+Montréal,+H2Z+1K6"
          target="_blank"
          rel="noopener noreferrer"
          class="underline"
        >
          <div>1002 Rue Saint-Urbain</div>
          <div>Montréal, H2Z 1K6</div>
        </a>
        <a href="tel:+15148664411" class="mt-2 block underline">+1 514-866-4411</a>
        <a href="mailto:info@fleursetcadeaux.com" class="mt-1 block underline">info@fleursetcadeaux.com</a>
      </div>

      <!-- Social links -->
      <div class="flex justify-center gap-4">
        <a
          href="https://www.facebook.com/fleurs.cadeaux/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          class="text-[#fffdf7] hover:opacity-70 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/fleurs_cadeaux/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="text-[#fffdf7] hover:opacity-70 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
        </a>
      </div>

    </div>
  </footer>
</template>
