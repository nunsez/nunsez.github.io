import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

export const App = () => (
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
