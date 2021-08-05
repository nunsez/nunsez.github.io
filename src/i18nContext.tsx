import { i18n } from 'i18next'
import { createContext } from 'preact'

export interface I18 {
    i18n: i18n | null
}

const defaultContext: I18 = {
    i18n: null,
}

export const I18nContext = createContext(defaultContext)
