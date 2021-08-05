import i18next, { InitOptions } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import resources from './locales'

const options: InitOptions = {
    fallbackLng: 'en',
    resources,
    debug: true,
    interpolation: {
        escapeValue: false,
    },
    react: {
        defaultTransParent: 'div',
        useSuspense: false,
    },
}

const i18nextInit = async () => {
    const i18n = i18next
        .createInstance(options)
        .use(LanguageDetector)

    i18n.init()

    return i18n
}

export default i18nextInit
