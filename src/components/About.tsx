import data from '../data/about.json';

export const About = () => {
    const { header, description, content } = data;

    return (
        <section>
            <div class="container grid-2">
                <div class="p-5 text-end">
                    <p class="text-bold">{header.toUpperCase()}</p>
                    <p>{description}</p>
                </div>
                <div class="p-5">
                    {content.map((i) => <p key={i}>{i}</p>)}
                </div>
            </div>
        </section>
    )
}
