import about from '../data/about.json';
import { useTranslation } from '../hooks'

export const About = () => {
    const { t } = useTranslation('about');
    const { paragraphsCount } = about;

    return (
        <section>
            <div class="container grid-2">
                <div class="p-5 text-end">
                    <p class="text-bold">{t('header').toUpperCase()}</p>
                    <p class="fs-90">{t('description')}</p>
                </div>
                <div class="p-5">
                    {Array.from({ length: paragraphsCount }).map((_, i) => <p key={i}>{t(`par-${i}`)}</p>)}
                </div>
            </div>
        </section>
    )
}
