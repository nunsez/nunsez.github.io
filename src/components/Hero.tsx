import hero from '../data/hero.json'
import { useTranslation } from 'react-i18next'
import { Locales } from './Locales'

export const Hero = () => {
    const { t } = useTranslation()
    const { avatar, socialMedia, contacts } = hero

    return (
        <section>
            <div class="container grid-2">
                <div class="avatar p-5">
                    <img src={avatar.ico} alt="Avatar" width="200" height="200" />
                </div>
                <div class="p-5 mt-auto relative">
                    <Locales />
                    <h1 class="name">
                        <span class="first-name">{t('hero.firstName')}</span>
                        <br/>
                        <span class="last-name text-primary">{t('hero.lastName')}</span>
                    </h1>
                    <div class="d-flex justify-between align-center flex-wrap">
                        <p class="mr-3 text-italic">{t('hero.profession')}</p>
                        <div class="d-flex gap-x-2">
                            {socialMedia.map((i) => (
                                    <a href={i.url} target="_blank" key={i.name} >
                                        <img src={i.ico} width="30" height="30" class="rounded" />
                                    </a>
                                ))}
                        </div>
                    </div>
                    <div class="contacts d-flex justify-between align-center flex-wrap gap-x-3">
                        {contacts.map((contact) => {
                            const { name, url, content } = contact

                            return (
                                <div key={name}>
                                    <p class="text-bold">{t(`hero.${name}`)}</p>
                                    <p class="fs-90">
                                        <a href={url}>{t(`hero.${content}`)}</a>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
