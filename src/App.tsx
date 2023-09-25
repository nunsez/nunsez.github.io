import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'

export const App = () => (
    <>
        <header>
            <Hero />
        </header>
        <main>
            <About />
            <Skills />
        </main>
    </>
)
