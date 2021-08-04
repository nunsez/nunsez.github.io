import data from '../data/skills.json'

export const Skills = () => {
    const { header, description, skillsList } = data;

    return (
        <section>
            <div class="container grid-2">
                <div class="p-5 text-end">
                    <p class="text-bold">{header.toUpperCase()}</p>
                    <p class="fs-90">{description}</p>
                </div>
                <div class="p-5 skills-grid">
                        {skillsList.map((skill) => {
                            const { name, ico, url } = skill;

                            return (
                                <a href={url} title={`${name} source link`} class="skills-item" target="_blank">
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
