import { useState } from 'react'

export function useLang() {
  const [lang, setLang] = useState(
    () => localStorage.getItem('lang') || 'en'
  )

  const toggleLang = () => {
    const next = lang === 'en' ? 'es' : 'en'
    localStorage.setItem('lang', next)
    setLang(next)
  }

  return { lang, toggleLang }
}
