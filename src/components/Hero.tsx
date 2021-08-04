import data from '../data/hero.json'

export const Hero = () => {
    const {
        firstName, lastName, profession, avatar, socialMedia, contacts,
    } = data;

    return (
        <section>
            <div class="container grid-2">
                <div class="avatar p-5">
                    <img src={avatar.src} alt="Avatar" width="200" height="200" />
                </div>
                <div class="p-5 mt-auto">
                    <h1 class="name">
                        <span class="first-name">{firstName}</span>
                        <br/>
                        <span class="last-name">{lastName}</span>
                    </h1>
                    <div class="d-flex justify-between align-center flex-wrap">
                        <p class="mr-3 text-italic">{profession}</p>
                        <div class="d-flex gap-x-2">
                            {socialMedia.map((i) => (
                                    <a href={i.url} target="_blank" key={i.name} >
                                        <img src={i.src} width="30" height="30" class="rounded" />
                                    </a>
                                ))}
                        </div>
                    </div>
                    <div class="contacts d-flex justify-between align-center flex-wrap gap-x-3">
                        {contacts.map((i) => (
                            <div key={i.name}>
                                <p class="text-bold">{i.name}</p>
                                <p class="fs-90">
                                    <a href={i.url}>{i.content}</a>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
