import { useContext } from 'preact/hooks'
import { I18nContext } from './i18nContext'

export const useTranslation = (prefix = '') => {
    const { i18n } = useContext(I18nContext)

    if (!i18n) {
        throw Error('i18next instance is null!')
    }

    const translate = i18n.t.bind(i18n)
    const changeLanguage = i18n.changeLanguage.bind(i18n)

    const t = (key = '') => {
        if (prefix === '') {
            return translate(key)
        }

        return translate(`${prefix}.${key}`)
    }

    return { t, changeLanguage }
}
