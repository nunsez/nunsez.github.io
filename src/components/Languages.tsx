import { locales } from '../i18n/locales'
import { useTranslation } from 'react-i18next'

export const Languages = () => {
    const { i18n } = useTranslation()

    const handleChangeLanguage = async (locale: string) => {
        i18n.changeLanguage(locale)
    }

    return (
        <div class="languages d-flex gap-x-2 ml-2">
            {locales.map(({ locale, ico }) => (
                <a key={locale} onClick={() => handleChangeLanguage(locale)}>
                    <img src={ico} width="30" height="23" class="rounded" />
                </a>
            ))}
        </div>
    )
}
