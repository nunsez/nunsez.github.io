import about from '../data/about.json'
import { useTranslation } from 'react-i18next'

export const About = () => {
    const { t } = useTranslation()
    const { paragraphsCount } = about

    return (
        <section>
            <div class="container grid-2">
                <div class="p-5 text-end">
                    <p class="text-bold">{t('about.header').toUpperCase()}</p>
                    <p class="fs-90">{t('about.description')}</p>
                </div>
                <div class="p-5">
                    {Array.from({ length: paragraphsCount }).map((_, i) => <p key={i}>{t(`about.par-${i}`)}</p>)}
                </div>
            </div>
        </section>
    )
}
