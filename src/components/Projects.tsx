import projects from '../data/projects.json'
import { useTranslation } from 'react-i18next'

interface ILogoLink {
    url: string | null
    src: string
}

const LogoLink = ({ url, src }: ILogoLink) => {
    if (!url) {
        return null
    }

    return (
        <a href={url} target="_blank">
            <img src={src} height="25" class="ml-2 rounded" />
        </a>
    )
}

const handleScroll = (event: MouseEvent) => {
    event.preventDefault()

    const { currentTarget } = event
    const details = (currentTarget as HTMLElement).parentElement as HTMLDetailsElement

    details.toggleAttribute('open')

    const rect = details.getBoundingClientRect()
    const clientHeight = document.documentElement.clientHeight
    const boxOverflow = rect.bottom - clientHeight

    if (boxOverflow > 0) {
        window.scrollBy({ top: boxOverflow, behavior: 'smooth' })
    }
}

export const Projects = () => {
    const { t } = useTranslation()

    return (
        <section>
            <div class="container grid-2">
            <div class="p-5 text-end">
                    <p class="text-bold">{t('projects.header').toUpperCase()}</p>
                    <p class="fs-90">{t('projects.description')}</p>
                </div>
                <div class="p-5 projects-grid">
                        {projects.map((project) => {
                            const { name, url, sourceCodeUrl, technologiesCount } = project

                            return (
                                <details key={name}>

                                    <summary
                                        class="text-primary"
                                        onClick={handleScroll}
                                    >
                                        {t(`projects.${name}.projectName`)}
                                    </summary>

                                    <div class="d-flex gap-x-2 justify-between pl-2 align-center">
                                        <p>{t('projects.technologies')}:</p>
                                        <div>
                                            <LogoLink url={url} src="logo_www.png" />
                                            <LogoLink url={sourceCodeUrl} src="logo_github.png" />
                                        </div>
                                    </div>

                                    <ul>
                                        {Array.from({ length: technologiesCount }).map((_, i) => (
                                            <li key={i} class="fs-90">{t(`projects.${name}.tech-${i}`)}</li>
                                            ))}
                                    </ul>

                                </details>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}
