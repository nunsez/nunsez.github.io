import i18next, { InitOptions } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import resources from './locales'

// @ts-expect-error
const isDev = import.meta.env.DEV ?? false

const options: InitOptions = {
    fallbackLng: 'en',
    resources,
    debug: isDev,
    interpolation: {
        escapeValue: false,
    },
    react: {
        defaultTransParent: 'div',
    },
}

const i18nextInit = async () => {
    const i18n = i18next
        .createInstance(options)
        .use(LanguageDetector)
        .use(initReactI18next)

    i18n.init()

    return i18n
}

export default i18nextInit
