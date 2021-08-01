import { Hero } from './Hero'
import { About } from './About'
import { Skills } from './Skills'
import { Projects } from './Projects'

export const App = () => {
    return (
        <>
            <header>
                <Hero />
            </header>
            <main>
                <About />
                <Skills />
                <Projects />
            </main>
        </>
    )
}
