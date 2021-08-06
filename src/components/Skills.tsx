import skills from '../data/skills.json'
import { useTranslation } from 'react-i18next'

export const Skills = () => {
    const { t } = useTranslation()

    return (
        <section>
            <div class="container grid-2">
                <div class="p-5 text-end">
                    <p class="text-bold">{t('skills.header').toUpperCase()}</p>
                    <p class="fs-90">{t('skills.description')}</p>
                </div>
                <div class="p-5 skills-grid">
                        {skills.map((skill) => {
                            const { name, ico, url } = skill

                            return (
                                <a
                                    href={url}
                                    title={`${name} source link`}
                                    class="skills-item"
                                    target="_blank"
                                    key={name}
                                >
                                    <img class="mr-2 rounded" src={ico} alt="ico" height="25" />
                                    <span class="text-primary">{name}</span>
                                </a>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}
