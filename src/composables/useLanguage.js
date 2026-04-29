import { ref } from 'vue'

const lang = ref('fr')

export function useLanguage() {
  const toggle = () => {
    lang.value = lang.value === 'fr' ? 'en' : 'fr'
  }
  return { lang, toggle }
}
