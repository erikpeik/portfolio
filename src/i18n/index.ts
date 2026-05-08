import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import fi from './fi'

const redirectedPath = new URL(window.location.href).searchParams.get('p')

if (redirectedPath) {
  window.history.replaceState(null, '', redirectedPath)
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fi: { translation: fi },
  },
  lng: window.location.pathname.startsWith('/en') ? 'en' : 'fi',
  fallbackLng: 'fi',
  interpolation: { escapeValue: false },
})

export default i18n
