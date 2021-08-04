import data from '../data/projects.json'

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
};

const handleScroll = (event: MouseEvent) => {
    event.preventDefault()

    const { currentTarget } = event;
    const details = (currentTarget as HTMLElement).parentElement as HTMLDetailsElement

    details.toggleAttribute('open')

    const rect = details.getBoundingClientRect()
    const clientHeight = document.documentElement.clientHeight
    const boxOverflow = rect.bottom - clientHeight

    if (boxOverflow > 0) {
        window.scrollBy({ top: boxOverflow });
    }
};

export const Projects = () => {
    const { header, description, projectsList } = data;

    return (
        <section>
            <div class="container grid-2">
            <div class="p-5 text-end">
                    <p class="text-bold">{header.toUpperCase()}</p>
                    <p class="fs-90">{description}</p>
                </div>
                <div class="p-5 projects-grid">
                        {projectsList.map((project) => {
                            const { name, url, sourceCodeUrl, technologies } = project

                            return (
                                <details key={name}>
                                    <div class="d-flex gap-x-2 justify-between pl-2 align-center">
                                        <p>Технологии:</p>
                                        <div>
                                            <LogoLink url={url} src="logo_www.png" />
                                            <LogoLink url={sourceCodeUrl} src="logo_github.png" />
                                        </div>
                                    </div>
                                    <summary class="text-primary" onClick={handleScroll}>{name}</summary>
                                    <ul>
                                        {technologies.map((t) => <li key={t} class="fs-90">{t}</li>)}
                                    </ul>
                                </details>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}
